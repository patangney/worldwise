import PropTypes from "prop-types";
import styles from "./CountryItem.module.css";
// import { flagEmojiToPNGUrl } from "../utils/helpers";
import Flag from "./Flag";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span className={styles.emoji}>
        {country.emoji && <Flag flag={country.emoji} />}
      </span>
      <span>{country.country}</span>
    </li>
  );
}

CountryItem.propTypes = {
  country: PropTypes.object.isRequired,
};

export default CountryItem;
