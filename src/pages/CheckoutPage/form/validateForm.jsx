export const validateForm = (user) => {
  const formErrs = {};
  if (!user.email) {
    formErrs.email = "email is not provided";
  } else if (!user.firstName || user.firstName.length < 2) {
    formErrs.firstName =
      "firstName is not provided or is less than 2 characters";
  } else if (!user.lastName || user.lastName.length < 2) {
    formErrs.firstName =
      "lastName is not provided or is less than 2 characters";
  } else if (!user.address || user.address.length < 6) {
    formErrs.address = "address is not provided or is less than 6 characters";
  } else if (!user.location || user.location.length < 5) {
    formErrs.location = "location is not provided or is less than 5 characters";
  }
  return formErrs;
};
