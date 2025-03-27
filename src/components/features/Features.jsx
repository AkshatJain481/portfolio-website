import Title from "../common/Title";
import Card from "./Card";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";

// Features Data
const featuresData = [
  {
    id: 1,
    title: "Business Stratagy",
    des: "Developing data-driven business strategies to optimize growth, enhance efficiency, and drive sustainable success in competitive markets.",
  },
  {
    id: 2,
    icon: <AiFillAppstore />,
    title: "Web Development",
    des: "Building responsive, high-performance websites using modern technologies to deliver seamless user experiences and scalable solutions.",
  },
  {
    id: 3,
    icon: <SiProgress />,
    title: "SEO Optimisation",
    des: "Enhancing website visibility with data-driven SEO strategies to improve rankings, drive traffic, and boost online presence effectively.",
  },
  {
    id: 4,
    icon: <FaMobile />,
    title: "Mobile Development",
    des: "Creating high-performance mobile applications with intuitive UI/UX, ensuring seamless functionality across Android and iOS platforms.",
  },
  {
    id: 5,
    icon: <SiAntdesign />,
    title: "UX Design",
    des: "Designing intuitive and user-centric interfaces that enhance engagement, improve usability, and deliver seamless digital experiences.",
  },
  {
    id: 6,
    icon: <FaGlobe />,
    title: "Hosting Websites",
    des: "Deploying and managing secure, high-performance websites with reliable hosting solutions for optimal speed and uptime.",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {featuresData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Features;
