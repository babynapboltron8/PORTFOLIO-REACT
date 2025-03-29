import { TiArrowForward } from 'react-icons/ti';
import { motion } from 'framer-motion';
const Revson = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Web Developer
        <span className="text-textGreen tracking-wide">@Revson </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Sep 2024 - Nov 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I worked at Revson as a web developer, ensuring efficient and
          user-friendly website functionality.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Alongside web development, I managed email outreach, content and
          social media, and conducted general research and technical support.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I also handled administrative tasks and cold email management to
          optimize communication and engagement.
        </li>
      </ul>
    </motion.div>
  );
};

export default Revson;
