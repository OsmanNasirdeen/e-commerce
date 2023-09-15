export const validateForm = (user) => {
  const formErrs = {};
  if (!user.cardName || user.cardName.length < 3) {
    formErrs.cardName =
      "card owner name is not provided or is less than 3 characters";
  } else if (!user.cardNumber || user.cardNumber.length < 10) {
    formErrs.cardNumber =
      "cardNumber is not provided or is less than 10 characters";
  }
  return formErrs;
};
