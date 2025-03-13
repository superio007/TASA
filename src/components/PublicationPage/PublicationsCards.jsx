import React from "react";
import { NavLink } from "react-router-dom";
import Left from "./assets/HeroSectionBack.avif";
import styles from "./css/PublicationsCards.module.css";
import { MdOutlineArrowRight } from "react-icons/md";
function PublicationsCards() {
  let publication = [{}, {}];
  // console.log(publication.length)
  return (
    <>
      <div className="bg-[#e9ebeb]">
        <div className="container mx-auto md:pb-28 p-4 xl:px-80">
          {/* Project 1 & 2 */}
          {publication.map((item, index) => (
            <div key={index} className="flex pt-18 flex-col items-center">
              <div className={styles.LeftSuperParent}>
                <div className={styles.LeftParent}>
                  <img src={Left} alt="" />
                  <div className={`${styles.LeftChild} md:px-12 p-8 md:py-18 bg-white`}>
                    <p className="text-sm pb-3 font-medium">
                      Project {index + 1}
                    </p>
                    <div className="border-t-1 border-black w-[70px]"></div>
                    <p className="font-light py-3 text-sm">
                      I'm a paragraph. Click here to add your own text and edit
                      me. Let your users get to know you.
                    </p>
                    <NavLink to={`/projects/${index + 1}`}>
                      <div className="flex items-center ">
                        <div className="border-t-1 border-black w-[70px]"></div>
                        <MdOutlineArrowRight
                          style={{
                            marginLeft: "-8px",
                            fontSize: "12px",
                          }}
                        />
                      </div>
                    </NavLink>
                  </div>
                  <div className={`${styles.RightChild} px-10 py-12 bg-white`}>
                    <p className="text-sm pb-3 font-medium">
                      Project {index + 1}
                    </p>
                    <div className="border-t-1 border-black w-[70px]"></div>
                    <p className="font-light py-3 text-sm">
                      I'm a paragraph. Click here to add your own text and edit
                      me. Let your users get to know you.
                    </p>
                    <NavLink to={`/projects/${index + 1}`}>
                      <div className="flex items-center ">
                        <div className="border-t-1 border-black w-[70px]"></div>
                        <MdOutlineArrowRight
                          style={{
                            marginLeft: "-8px",
                            fontSize: "12px",
                          }}
                        />
                      </div>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PublicationsCards;
