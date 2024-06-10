import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Amazon = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Social Worker
        <span className="text-textGreen tracking-wide">@Dept. of Social Welfare & Development</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2018 - Dec 2019
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Conducts research to improve social work practices, policies, and outcomes. They analyze data and disseminate findings to inform evidence-based practices.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Mobilizes community resources and groups to address local issues and advocate for social change. They build networks and coordinate collective actions to improve community well-being.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Supports and promotes clients' rights and needs within various systems. They work to ensure clients have access to necessary services and fair treatment.
        </li>
      </ul>
    </motion.div>
  );
};

export default Amazon;
