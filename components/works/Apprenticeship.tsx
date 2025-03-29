import { TiArrowForward } from 'react-icons/ti';
import { motion } from 'framer-motion';
const Apprenticeship = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Junior Web Developer
        <span className="text-textGreen tracking-wide">
          @Software Engr. Dexter Echalico{' '}
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Mar 2023 - Nov 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Creating and styling components based on designs provided by UI/UX
          designers. This involves using HTML, CSS, and JavaScript (or
          frameworks/libraries like React).
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Ensuring that web pages and components are responsive, adapting to
          various screen sizes and devices.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Using Git to manage code changes, create branches, and collaborate
          with other team members. This includes committing changes, pushing to
          repositories, and handling merge conflicts.
        </li>
      </ul>
    </motion.div>
  );
};

export default Apprenticeship;
