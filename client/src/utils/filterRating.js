const filterRating = (rating, num) => {
  if (num) {
    for (let i = 0; i < rating.length; i++) {
      let low = parseFloat(rating[i]) - 0.5;
      let high = parseFloat(rating[i]) + 0.5;

      if (parseFloat(num) >= low && parseFloat(num) < high) {
        return true;
      }
    }
  } else {
    return false;
  }
};

export default filterRating;
