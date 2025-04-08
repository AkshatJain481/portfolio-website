import { contactImg } from "../../assets";
import SocialLinks from "../common/SocialLinks";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Akshat Jain</h3>
        <p className="text-lg font-normal text-gray-400">Software Engineer</p>
        <p className="text-base text-gray-400 tracking-wide">
          Full Stack Developer skilled in React, Next.js, and Node.js,
          passionate about building impactful digital experiences.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 70152 04292</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">akshatjain481@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <SocialLinks />
      </div>
    </div>
  );
};

export default ContactLeft;
