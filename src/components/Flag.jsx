function Flag({ flag }) {
  let countryCode = "";
  const countryCodeUtf16 = Array.from(flag, (codeUnit) =>
    codeUnit.codePointAt()
  );
  if (countryCodeUtf16[0] >= 127462 && countryCodeUtf16[1] >= 127462) {
    countryCode = countryCodeUtf16
      .map((char) => String.fromCharCode(char - 127397).toLowerCase())
      .join("");
  } else {
    countryCode = flag.toLowerCase();
  }
  return (
    <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
  );
}

export default Flag;
