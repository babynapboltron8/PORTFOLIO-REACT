import { cinnamon, realestate, ecommerce } from "@/public/assets";
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Projects I've Developed" titleNo="&#x2162;" />
      {/* ============ project One Start here ================ */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://cinnamon.ph/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={cinnamon}
                alt="cinnamon"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Cinnamon Ph</h3>
            </div>
            <p className="bg-[#31363F] text-sm md:text-base p-2 md:p-6 rounded-md">
            A Cinnamon PH platform for <span className="text-textGreen">enrolling courses.</span> create your account with O-auth <span className="text-textGreen">Explore a wide range of courses,{" "}</span>and seamlessly enroll.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>C#</li>
              <li>Blazer</li>
              <li>Bootstrap</li>
              <li>Docker</li>
              <li>CSS</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/babynapboltron8"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://cinnamon.ph/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href=""
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={realestate}
                alt="realestate"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Real Estate Website</h3>
            </div>
            <p className="text-sm md:text-base bg-[#31363F] p-2 md:p-6 rounded-md xl:-mr-16">
            A real estate platform for <span className="text-textGreen">browsing and purchasing properties</span>. Explore various listings, create your account with O-auth, and{" "} <span className="text-textGreen">conveniently</span> make purchases.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>React</li>
              <li>Tailwind</li>
              <li>Chart.js</li>
              <li>Nodejs</li>
              <li>HTML</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/babynapboltron8/real-estate"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href=""
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Two End here ================== */}
        {/* ============ project Three Start here ============== */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href=""
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={ecommerce}
                alt="ecommerce"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Figma Ecommerce UI</h3>
            </div>
            <p className="text-sm md:text-base bg-[#31363F] p-2 md:p-6 rounded-md">
            A Figma Ecommerce UI project for <span className="text-textGreen">designing</span> and <span className="text-textGreen">prototyping</span> online stores. Explore various templates,{" "} <span className="text-textGreen">customize</span> design and professional UI.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>User-centered design</li>
              <li>Simplicity</li>
              <li>Consistency</li>
              <li>Accessibility</li>
              <li>Readability</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/babynapboltron8"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://www.figma.com/proto/YU4sp49iqXOq4h7BN3PWqc/E-commerce-website-design?page-id=0%3A1&node-id=2-2&viewport=535%2C209%2C0.18&t=nQXBDiDBjimOk0D7-1&scaling=scale-down"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Three End here ================== */}
      </div>
    </section>
  );
};

export default Projects;
