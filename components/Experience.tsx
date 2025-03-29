import { useState } from 'react';
import SectionTitle from './SectionTitle';
import Dswd from './works/Dswd';
import Evpieza from './works/Evpieza';
import Apprenticeship from './works/Apprenticeship';
import Internship from './works/Internship';
import Pnp from './works/Pnp';
import Revson from './works/Revson';

const Experience = () => {
  const [workRevson, setWorkRevson] = useState(true);
  const [workInternship, setWorkInternship] = useState(false);
  const [workApprenticeship, setWorkApprenticeship] = useState(false);
  const [workEvpieza, setWorkEvpieza] = useState(false);
  const [workPnp, setWorkPnp] = useState(false);
  const [workDswd, setWorkDswd] = useState(false);

  const handleRevson = () => {
    setWorkRevson(true);
    setWorkInternship(false);
    setWorkApprenticeship(false);
    setWorkEvpieza(false);
    setWorkPnp(false);
    setWorkDswd(false);
  };

  const handleInternship = () => {
    setWorkRevson(false);
    setWorkInternship(true);
    setWorkApprenticeship(false);
    setWorkEvpieza(false);
    setWorkPnp(false);
    setWorkDswd(false);
  };

  const handleApprenticeship = () => {
    setWorkRevson(false);
    setWorkInternship(false);
    setWorkApprenticeship(true);
    setWorkEvpieza(false);
    setWorkPnp(false);
    setWorkDswd(false);
  };

  const handleEvpieza = () => {
    setWorkRevson(false);
    setWorkInternship(false);
    setWorkApprenticeship(false);
    setWorkEvpieza(true);
    setWorkPnp(false);
    setWorkDswd(false);
  };
  const handlePnp = () => {
    setWorkRevson(false);
    setWorkInternship(false);
    setWorkApprenticeship(false);
    setWorkEvpieza(false);
    setWorkPnp(true);
    setWorkDswd(false);
  };
  const handleDswd = () => {
    setWorkRevson(false);
    setWorkInternship(false);
    setWorkApprenticeship(false);
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
            onClick={handleRevson}
            className={`${
              workRevson
                ? 'border-l-textGreen text-textGreen'
                : 'border-l-hoverColor text-textDark'
            } border-l-2 bg-transparent hover:bg-[#31363F] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Web Developer
          </li>
          <li
            onClick={handleInternship}
            className={`${
              workInternship
                ? 'border-l-textGreen text-textGreen'
                : 'border-l-hoverColor text-textDark'
            } border-l-2 bg-transparent hover:bg-[#31363F] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Internship
          </li>
          <li
            onClick={handleApprenticeship}
            className={`${
              workApprenticeship
                ? 'border-l-textGreen text-textGreen'
                : 'border-l-hoverColor text-textDark'
            } border-l-2 bg-transparent hover:bg-[#31363F] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Apprentice
          </li>
          <li
            onClick={handleEvpieza}
            className={`${
              workEvpieza
                ? 'border-l-textGreen text-textGreen'
                : 'border-l-hoverColor text-textDark'
            } border-l-2 bg-transparent hover:bg-[#31363F] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Evpieza
          </li>
          <li
            onClick={handlePnp}
            className={`${
              workPnp
                ? 'border-l-textGreen text-textGreen'
                : 'border-l-hoverColor text-textDark'
            } border-l-2 bg-transparent hover:bg-[#31363F] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            PNP
          </li>
          <li
            onClick={handleDswd}
            className={`${
              workDswd
                ? 'border-l-textGreen text-textGreen'
                : 'border-l-hoverColor text-textDark'
            } border-l-2 bg-transparent hover:bg-[#31363F] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            DSWD
          </li>
        </ul>
        {workRevson && <Revson />}
        {workInternship && <Internship />}
        {workApprenticeship && <Apprenticeship />}
        {workEvpieza && <Evpieza />}
        {workPnp && <Pnp />}
        {workDswd && <Dswd />}
      </div>
    </section>
  );
};

export default Experience;
