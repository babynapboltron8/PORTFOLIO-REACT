import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Dswd from "./works/Dswd";
import Apple from "./works/Apple";
import Google from "./works/Google";
import ReactBD from "./works/ReactBD";
import Pnp from "./works/Pnp";

const Experience = () => {
  const [workReactbd, setWorkReactbd] = useState(true);
  const [workGoogle, setWorkGoogle] = useState(false);
  const [workApple, setWorkApple] = useState(false);
  const [workPnp, setWorkPnp] = useState(false);
  const [workDswd, setWorkDswd] = useState(false);

  const handleReactbd = () => {
    setWorkReactbd(true);
    setWorkGoogle(false);
    setWorkApple(false);
    setWorkPnp(false);
    setWorkDswd(false);
  };

  const handleGoogle = () => {
    setWorkReactbd(false);
    setWorkGoogle(true);
    setWorkApple(false);
    setWorkPnp(false);
    setWorkDswd(false);
  };

  const handleApple = () => {
    setWorkReactbd(false);
    setWorkGoogle(false);
    setWorkApple(true);
    setWorkPnp(false);
    setWorkDswd(false);
  };
  const handlePnp = () => {
    setWorkReactbd(false);
    setWorkGoogle(false);
    setWorkApple(false);
    setWorkPnp(true);
    setWorkDswd(false);
  };
  const handleDswd = () => {
    setWorkReactbd(false);
    setWorkGoogle(false);
    setWorkApple(false);
    setWorkPnp(false);
    setWorkDswd(true);
  };
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Professional Experience" titleNo="&#x2161;" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleReactbd}
            className={`${
              workReactbd
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            RactBD
          </li>
          <li
            onClick={handleGoogle}
            className={`${
              workGoogle
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Google
          </li>
          <li
            onClick={handleApple}
            className={`${
              workApple
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Apple
          </li>
          <li
            onClick={handlePnp}
            className={`${
              workPnp
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            PNP
          </li>
          <li
            onClick={handleDswd}
            className={`${
              workDswd
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            DSWD
          </li>
        </ul>
        {workReactbd && <ReactBD />}
        {workGoogle && <Google />}
        {workApple && <Apple />}
        {workPnp && <Pnp />}
        {workDswd && <Dswd />}
      </div>
    </section>
  );
};

export default Experience;
