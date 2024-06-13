import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";

import { useCities } from "../contexts/CitiesContext";

const CityList = () => {
  const { cities, isLoading } = useCities();
  if (isLoading) {
    return <Spinner />;
  }

  if (cities.length === 0) {
    return <Message message="Add your first city by clicking on the map" />;
  }

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
};

// CityList.propTypes = {
//   cities: PropTypes.array.isRequired,
//   isLoading: PropTypes.bool.isRequired,
// };

export default CityList;
