import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      <a href="https://github.com/AkshatJain481" target="_blank">
        <span className="bannerIcon">
          <FaGithub />
        </span>
      </a>
      <a
        href="https://www.linkedin.com/in/akshat-jain-264810276/"
        target="_blank"
      >
        <span className="bannerIcon">
          <FaLinkedinIn />
        </span>
      </a>
    </div>
  );
};

export default SocialLinks;
