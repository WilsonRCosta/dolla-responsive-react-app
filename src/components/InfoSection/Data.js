import img1 from "../../images/svg1.svg";
import img2 from "../../images/svg2.svg";
import img3 from "../../images/svg3.svg";

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Premium Bank",
  headLine: "Unlimited Transactions with zero fees",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.",
  buttonLabel: "Get Started",
  imgStart: true,
  img: img1,
  alt: "Card",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Unlimited Access",
  headLine: "Login to your account at any time",
  description:
    "We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.",
  buttonLabel: "Learn More",
  imgStart: false,
  img: img2,
  alt: "PiffyBank",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "signup",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Join our Team",
  headLine: "Creating an account is extremely easy",
  description:
    "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
  buttonLabel: "Start Now",
  imgStart: true,
  img: img3,
  alt: "Paper",
  dark: false,
  primary: false,
  darkText: true,
};
