import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Dswd from "./works/Dswd";
import Evpieza from "./works/Evpieza";
import Google from "./works/Google";
import ReactBD from "./works/ReactBD";
import Pnp from "./works/Pnp";

const Experience = () => {
  const [workReactbd, setWorkReactbd] = useState(true);
  const [workGoogle, setWorkGoogle] = useState(false);
  const [workEvpieza, setWorkEvpieza] = useState(false);
  const [workPnp, setWorkPnp] = useState(false);
  const [workDswd, setWorkDswd] = useState(false);

  const handleReactbd = () => {
    setWorkReactbd(true);
    setWorkGoogle(false);
    setWorkEvpieza(false);
    setWorkPnp(false);
    setWorkDswd(false);
  };

  const handleGoogle = () => {
    setWorkReactbd(false);
    setWorkGoogle(true);
    setWorkEvpieza(false);
    setWorkPnp(false);
    setWorkDswd(false);
  };

  const handleEvpieza = () => {
    setWorkReactbd(false);
    setWorkGoogle(false);
    setWorkEvpieza(true);
    setWorkPnp(false);
    setWorkDswd(false);
  };
  const handlePnp = () => {
    setWorkReactbd(false);
    setWorkGoogle(false);
    setWorkEvpieza(false);
    setWorkPnp(true);
    setWorkDswd(false);
  };
  const handleDswd = () => {
    setWorkReactbd(false);
    setWorkGoogle(false);
    setWorkEvpieza(false);
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
            onClick={handleEvpieza}
            className={`${
              workEvpieza
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Evpieza
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
        {workEvpieza && <Evpieza />}
        {workPnp && <Pnp />}
        {workDswd && <Dswd />}
      </div>
    </section>
  );
};

export default Experience;
