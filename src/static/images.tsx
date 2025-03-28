import { FaClipboardList, FaClock, FaPlus } from "react-icons/fa6";

export const swiperImages = [
  { src: "/assets/png/slider.jpg", alt: "Slider1" },
  { src: "/assets/png/slider2.jpg", alt: "Slider2" },
  { src: "/assets/png/slider3.jpg", alt: "Slider3" },
];

export const cardsData = [
  {
    title: "Lorem Amet",
    subtitle: "Emergency Cases",
    description:
      "Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.",
    icon: <FaPlus />,
  },
  {
    title: "Fusce Porttitor",
    subtitle: "Doctors Timetable",
    description:
      "Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.",
    icon: <FaClipboardList />,
  },
  {
    title: "Donec luctus",
    subtitle: "Opening Hours",
    details: [
      { label: "Monday - Friday", time: "8.00-20.00" },
      { label: "Saturday", time: "9.00-18.30" },
      { label: "Monday - Thursday", time: "9.00-15.00" },
    ],
    icon: <FaClock />,
  },
];
