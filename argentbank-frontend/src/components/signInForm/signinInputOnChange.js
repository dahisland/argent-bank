export function signinInputOnChange(e, inputID, setUsername, setPassword) {
  switch (inputID) {
    case "username":
      setUsername(e.target.value);
      break;

    case "current-password":
      setPassword(e.target.value);
      break;

    default:
      setUsername("");
      setPassword("");
  }
}

export function signinCheckboxOnChange(e, setCheckbox) {
  setCheckbox(e.target.checked);
}
