import iconChat from "../assets/icon-chat.png";
import iconMoney from "../assets/icon-money.png";
import iconSecurity from "../assets/icon-security.png";

export const heroData = {
  title: "Promoted Content",
  subtitles: ["No fees.", "No minimum deposit.", "High interest rates."],
  text: "Open a savings account with Argent Bank today!",
};

export const featuresData = [
  {
    title: "You are our #1 priority",
    img: iconChat,
    alt: "Chat Icon",
    content:
      "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  },
  {
    title: "More savings means higher rates",
    img: iconMoney,
    alt: "Money Icon",
    content:
      "The more you save with us, the higher your interest rate will be!",
  },
  {
    title: "Security you can trust",
    img: iconSecurity,
    alt: "Security Icon",
    content:
      "We use top of the line encryption to make sure your data and money is always safe.",
  },
];

export const signInInputData = [
  { id: "username", type: "text", label: "Username" },
  { id: "password", type: "password", label: "Password" },
];

export const signUpInputData = [
  { id: "firstname", type: "text", label: "Firstname" },
  { id: "lastname", type: "text", label: "Lastname" },
  { id: "usermail", type: "email", label: "Email" },
  { id: "userpassword", type: "password", label: "Choose password" },
];
