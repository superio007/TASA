import Left from "./assets/Left.avif"
import Right from "./assets/Right.avif"
import styles from "./css/FeaturedProject.module.css";
import { MdOutlineArrowRight } from "react-icons/md";
import Project4 from "./Project4";
import Project5 from "./Poject5";
import Project3 from "./Project3"
import { NavLink } from "react-router-dom";

const FeaturedProject = () => {
  return (
    <>
      <div className="bg-[#e9ebeb]">
        <div className="container mx-auto pt-14 p-4 xl:px-80">
          <div className="pt-8 pb-16">
            <h2 className="text-2xl text-center font-bold ">
              Our Featured Projects.
            </h2>
          </div>
          {/* Project 1 & 2 */}
          <div className="flex md:flex-row gap-8 mb-14 flex-col md:items-center md:justify-center">
            <div className="flex flex-col items-center">
              <div className={styles.LeftSuperParent}>
                <div className={styles.LeftParent}>
                  <img src={Left} alt="" />
                  <div className={`${styles.LeftChild} px-12 py-18 bg-white`}>
                    <p className="text-sm pb-3 font-medium">Project 1</p>
                    <div className="border-t-1 border-black w-[70px]"></div>
                    <p className="font-light py-3 text-sm">
                      I'm a paragraph. Click here to add your own text and edit
                      me. Let your users get to know you.
                    </p>
                    <NavLink to={"/projects/1"}>
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
            <div className="flex flex-col items-center">
              <div className={styles.RightSuperParent}>
                <div className={styles.RightParent}>
                  <img src={Right} alt="" />
                  <div className={`${styles.RightChild} px-12 py-18 bg-white`}>
                    <p className="text-sm pb-3 font-medium">Project 2</p>
                    <div className="border-t-1 border-black w-[70px]"></div>
                    <p className="font-light py-3 text-sm">
                      I'm a paragraph. Click here to add your own text and edit
                      me. Let your users get to know you.
                    </p>
                    <NavLink to={"/projects/2"}>
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
          </div>
        </div>
        <Project3 />
        <Project4 />
        <Project5 />
      </div>
    </>
  );
};
export default FeaturedProject;
