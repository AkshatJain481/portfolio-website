import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2024 - Present
          </p>
          <h2 className="text-4xl font-bold">Industry Experience</h2>
        </div>
        <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Developer Intern"
            subTitle="Airth (Jan 2025 - Present)"
            result="Remote"
            des="Developing a Chrome extension using React.js to help Instagram creators and business owners automate tasks and increase engagement. Working with Instagram APIs to enable automated actions and provide analytics for improved productivity."
          />
          <ResumeCard
            title="Full Stack Developer Intern"
            subTitle="Zucol (Jul 2024 - Jan 2025)"
            result="Remote"
            des="Built the Apyflux platform using Next.js, React.js, and ASP.NET Core, integrating APIs across various sectors. Developed and maintained RESTful APIs using ASP.NET Core for efficient data management and seamless integration with client applications."
          />
          <ResumeCard
            title="Web Developer Intern"
            subTitle="Campus Code (formerly SoarX) - (Feb 2024 - Aug 2024)"
            result="Remote"
            des="Created responsive web applications with improved load times through server-side rendering and static site generation using Next.js. Optimized performance by implementing code splitting and lazy loading, which reduced initial load time by 30%."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
