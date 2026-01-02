import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Premium Digital Solutions",
  desc: "At PT Solusi Digital Khatulistiwa, we craft world-class digital experiences. From high-performance websites to scalable mobile applications, our passionate engineering team delivers nothing but perfection.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Custom Software Engineering",
      desc: "Tailor-made solutions architecture designed to handle millions of users with sub-second latency.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Mobile Application Development",
      desc: "Native and Cross-platform mobile apps that provide intuitive and fluid user experiences on iOS and Android.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "UI/UX Design Systems",
      desc: "Award-winning design aesthetics that focus on user engagement, accessibility, and visual brilliance.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Why Choose Our Elite Team?",
  desc: "We are not just developers; we are visionaries. As an ambitious new company, we bring a fresh approach and the latest technology to your project.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Enterprise Grade Security",
      desc: "Bank-level security protocols ensuring your data remains unbreachable and secure.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Cutting-Edge Technology Stack",
      desc: "We use the absolute latest frameworks (Next.js, React Native, Rust, Go) to ensure longevity and performance.",
      icon: <SunIcon />,
    },
    {
      title: "24/7 Global Support",
      desc: "Our global team ensures that your operations never stop, with round-the-clock monitoring and support.",
      icon: <FaceSmileIcon />,
    },
  ],
};

export {benefitOne, benefitTwo};
