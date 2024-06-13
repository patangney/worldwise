/* eslint-disable react/prop-types */
import { createContext, useEffect, useState, useContext } from "react";

const CitiesContext = createContext();

const BASE_URL = "http://localhost:3001";

const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    async function fetchCities() {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/cities`);
        const data = await response.json();
        setCities(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCities();
  }, []);

  const getCity = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await response.json();
      setCurrentCity(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CitiesContext.Provider value={{ cities, isLoading, currentCity, getCity }}>
      {children}
    </CitiesContext.Provider>
  );
};

const useCities = () => {
  const context = useContext(CitiesContext);
  if (context === undefined) {
    throw new Error("useCities must be used within a CitiesProvider");
  }
  return context;
};

export { CitiesProvider, useCities };
