import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Splash = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Patrolman &#x2160;
        <span className="text-textGreen tracking-wide">@Philippine National Police</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Oct 2020 - Oct 2021
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Building strong relationships with community members through outreach programs, dialogues, and partnerships to foster trust and cooperation.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Assists in disaster preparedness, response, and recovery efforts. This includes search and rescue operations and providing aid during natural disasters like typhoons, earthquakes, and floods.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Implementing programs to assist communities in various aspects, such as crime prevention seminars, youth programs, and livelihood projects.
        </li>
      </ul>
    </motion.div>
  );
};

export default Splash;
