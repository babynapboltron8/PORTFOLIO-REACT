import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Internship = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Front-end Developer
        <span className="text-textGreen tracking-wide">@Cinnamon ph</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Mar 2024 - Jun 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I built and styled reusable UI components using HTML, CSS, and JavaScript, ensuring responsiveness and accessibility across various devices and browsers.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I learned to optimize web page performance through techniques such as lazy loading and code splitting, improving both load times and user experience.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I actively used Git for version control and worked closely with designers, back-end developers, and other stakeholders, participating in daily stand-ups and code reviews to enhance my skills and contribute effectively to projects.
        </li>
      </ul>
    </motion.div>
  );
};

export default Internship;
