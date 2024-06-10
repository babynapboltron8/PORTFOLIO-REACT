import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Evpieza = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
      Bookkeeper 
        <span className="text-textGreen tracking-wide">@Evpieza Archt'l Design Studio </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2022 - Oct 2022
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Documenting income from various projects, consulting fees, and other sources.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Preparing balance sheets, income statements, and cash flow statements to provide a clear picture of the firm's financial health.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Assisting in the creation of project budgets and tracking expenses against these budgets to ensure financial discipline.
        </li>
      </ul>
    </motion.div>
  );
};

export default Evpieza;
