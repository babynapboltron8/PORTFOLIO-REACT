import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Small-Scale Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="To-Do-List"
          des=" A to-do list app using JavaScript allows users to add, complete, and delete tasks, with data persistence via local storage."
          listItem={["HTML", "CSS", "JavaScript"]}
          link="https://stackblitz.com/edit/stackblitz-starters-hewmi6?file=package.json"
        />
        <ArchiveCard
          title="Task Manager"
          des=" Enables users to create, manage, and organize tasks, incorporating features like adding, editing, deleting tasks, and marking them as complete."
          listItem={["HTML", "CSS", "JavaScript"]}
          link="https://stackblitz.com/edit/stackblitz-starters-bpbagk?file=index.html"
        />
        <ArchiveCard
          title="Sidebar Menu"
          des=" Built using HTML for structure, CSS for styling, and JavaScript for interactive functionality, allowing users to switch pages."
          listItem={["HTML", "CSS", "JavaScript"]}
          link="https://stackblitz.com/edit/stackblitz-starters-9syf3j?file=index.js"
        />
        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="Testimonial slider"
                des=" Showcase user feedback dynamically. Created using HTML for structure, CSS for styling, and JavaScript for functionality, allowing users to navigate."
                listItem={["HTML", "CSS", "JavaScript"]}
                link="https://stackblitz.com/edit/stackblitz-starters-bkkpxf?file=index.js"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ArchiveCard
                title="Tabs"
                des=" Implemented with HTML for structure, CSS for styling, and JavaScript for interactivity, enabling users to switch between sections seamlessly and enhancing the app's user experience.."
                listItem={["HTML", "CSS", "JavaScript"]}
                link="https://stackblitz.com/edit/stackblitz-starters-basmsk?file=app.js"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ArchiveCard
                title="Dark Mode"
                des=" This feature is implemented using CSS to adjust the color scheme and JavaScript to toggle between light and dark modes based on user preferences."
                listItem={["HTML", "CSS", "JavaScript"]}
                link="https://stackblitz.com/edit/stackblitz-starters-v9gpmc?file=index.js"
              />
            </motion.div>
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Archive;
