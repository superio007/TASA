import React from "react";
import { NavLink } from "react-router-dom";
import Left from "./assets/TASAAR.webp";
import styles from "./css/PublicationsCards.module.css";
import Logo from "./assets/deZeen.png";
import { MdOutlineArrowRight } from "react-icons/md";
function PublicationsCards() {
  let publication = [
    {
      ArticleLogo: "./src/components/PublicationPage/assets/deZeen.png",
      ArticleTitle:
        "This Mumbai office adapts Japandi design to the Indian context",
      ArticleLink:
        "https://www.architecturaldigest.in/story/this-mumbai-office-adapts-japandi-design-to-the-indian-context/",
      ArticleDescription: `“As an architect, I was looking for a style and strong
                    foundation that would define my work—serving as an
                    architectural signature in everything I built,” recalls
                    Tanzeem Sarguroh, when looking back at how she found a way
                    to blend Japandi (Japanese-Scandinavian)....”`,
    },
  ];
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
                  <img className={styles.LeftImage} src={Left} alt="" />
                  <div
                    className={`${styles.LeftChild} md:px-12 p-8 md:py-16 bg-white`}
                  >
                    <div className="flex w-full justify-start items-center">
                      <img src={item.ArticleLogo} alt="" className="h-[60px]" />
                    </div>
                    <p
                      className="font-light py-3 text-[22.6px]"
                      style={{
                        fontFamily: "Copse, serif",
                        fontStyle: "normal",
                        fontWeight: "400",
                      }}
                    >
                      {item.ArticleTitle}
                    </p>
                  </div>
                  <div className={`${styles.RightChild} px-10 py-12 bg-white`}>
                    <div className="border-t-1 border-black w-[70px]"></div>
                    <p className="font-light py-3 text-sm">
                      {item.ArticleDescription}
                    </p>
                    <a
                      href={item.ArticleLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="flex items-center ">
                        <span className="text-sm">Read More</span>
                        <MdOutlineArrowRight
                          style={{
                            // marginLeft: "-8px",
                            fontSize: "20px",
                          }}
                        />
                      </div>
                    </a>
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
