const validateForm = (user) => {
  const formErrs = {};
  if (!user.firstName || user.firstName.length < 3) {
    formErrs.firstName =
      "first name is not provided or is less than 3 characters";
  } else if (!user.lastName || user.lastName.length < 3) {
    formErrs.lastName =
      "last Name is not provided or is less than 3 characters";
  } else if (!user.email) {
    formErrs.email = "email is not provided";
  } else if (!user.password || user.password.length < 10) {
    formErrs.password =
      "password is not provided or is less than 10 characters";
  }
  return formErrs;
};

export default validateForm;
