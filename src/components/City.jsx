import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./City.module.css";
import { useCities } from "../contexts/CitiesContext";
// import { flagEmojiToPNGUrl } from "../utils/helpers";
import Flag from "./Flag";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const { id } = useParams();
  const { getCity, currentCity } = useCities();
  console.log(getCity, "getCity");

  useEffect(
    function () {
      getCity(id);
    },
    [id]
  );

  const { cityName, date, notes, emoji } = currentCity;

  console.log(currentCity, "currentCity");

  // const flag = flagEmojiToPNGUrl(currentCity.emoji);
  // console.log(flag, "flag");

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3 className="">{cityName}</h3>
        <span className={styles.emoji}>{emoji && <Flag flag={emoji} />}</span>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>{/* <ButtonBack /> */}</div>
    </div>
  );
}

export default City;
