const validateForm = (user) => {
  const formErrs = {};
  if (!user.email) {
    formErrs.email = "email is not provided";
  } else if (!user.password) {
    formErrs.password = "password is not provided";
  }
  return formErrs;
};

export default validateForm;
