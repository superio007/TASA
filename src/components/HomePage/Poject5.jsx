import Project5 from "./assets/project5.avif";
import styles from "./css/FeaturedProject.module.css";
import { MdOutlineArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
const Project = () => {
  return (
    <>
      <div className="container mx-auto pt-7 pb-32 p-4 xl:px-65">
        {/* Project 5 */}
        <div>
          <img src={Project5} alt="Project 5" />
          <div className="flex justify-end items-center">
            <div className={`${styles.Project5} bg-white px-12 py-18`}>
              <p className="text-sm pb-3 font-medium">Project 5</p>
              <div className="border-t-1 border-black w-[70px]"></div>
              <p className="font-light py-3 text-sm">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font..
              </p>
              <NavLink to={`/projects/5`}>
                <div className="flex items-center ">
                  <div className="border-t-1 border-black w-[70px]"></div>
                  <MdOutlineArrowRight
                    style={{ marginLeft: "-8px", fontSize: "12px" }}
                  />
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Project;
