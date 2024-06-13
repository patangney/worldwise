import styles from "./Map.module.css";
import { useSearchParams, useNavigate } from "react-router-dom";
const Map = () => {
  const navigate = useNavigate(); // hook from react-router-dom
  const [searchParams, setSearchParams] = useSearchParams();

  const { lat, lng } = Object.fromEntries(searchParams);
  console.log(lat, lng);
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>Map</h1>
      <h1>
        Position: {lat} {lng}
      </h1>
    </div>
  );
};

export default Map;
