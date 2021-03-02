const convert = (min, max) => {
  if (max === undefined) {
    return `${Math.round((min * 9) / 5 + 32)}\xB0F`;
  } else {
    return `${Math.round((min * 9) / 5 + 32)}\xB0F - ${Math.round(
      (max * 9) / 5 + 32
    )}\xB0F `;
  }
};

export default convert;
