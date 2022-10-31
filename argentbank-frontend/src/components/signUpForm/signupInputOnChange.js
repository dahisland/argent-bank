export function signupInputOnChange(
  e,
  inputID,
  setFirstname,
  setLastname,
  setEmail,
  setPassword
) {
  switch (inputID) {
    case "firstname":
      setFirstname(e.target.value);
      break;

    case "lastname":
      setLastname(e.target.value);
      break;

    case "usermail":
      setEmail(e.target.value);
      break;

    case "current-password":
      setPassword(e.target.value);
      break;

    default:
      setFirstname("");
      setLastname("");
      setEmail("");
      setPassword("");
  }
}
