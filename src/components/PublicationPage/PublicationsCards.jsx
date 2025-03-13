import React from "react";
import { NavLink } from "react-router-dom";
import Left from "./assets/TASAAR.webp";
import styles from "./css/PublicationsCards.module.css";
import Logo from "./assets/deZeen.png";
import { MdOutlineArrowRight } from "react-icons/md";
function PublicationsCards() {
  let publication = [
    {
      ArticleLogo:
        "./src/components/PublicationPage/assets/architecturalDigest.png",
      ArticleTitle:
        "This Mumbai office adapts Japandi design to the Indian context",
      ArticalBack: "./src/components/PublicationPage/assets/TASAAR.webp",
      ArticleLink:
        "https://www.architecturaldigest.in/story/this-mumbai-office-adapts-japandi-design-to-the-indian-context/",
      ArticleDescription: `“As an architect, I was looking for a style and strong
                    foundation that would define my work—serving as an
                    architectural signature in everything I built,” recalls
                    Tanzeem Sarguroh, when looking back at how she found a way
                    to blend Japandi (Japanese-Scandinavian)”`,
    },
    {
      ArticleLogo: "./src/components/PublicationPage/assets/deZeen.webp",
      ArticleTitle:
        "Tasa Designs has created a workspace in India that balances form, function and simplicity.",
      ArticalBack: "./src/components/PublicationPage/assets/DazeenBack.jpeg",
      ArticleLink: "https://www.dezeen.com/awards/2022/longlists/811/",
      ArticleDescription: `The project is a 40 square metre space designed with a Japandi aesthetic to align with objectives of minimalism and practical sustainability.
An open layout was adopted for working with natural elements and best use of daylight, and was constructed with materials including 100-year-old reclaimed teak wood salvaged from demolished structures of Old Bombay built during the British Era.`,
    },
    {
      ArticleLogo: "./src/components/PublicationPage/assets/DesignPataki.png",
      ArticleTitle:
        "Three Contemporary Workspaces In India That Champion Colour And Texture",
      ArticalBack: "./src/components/PublicationPage/assets/TASAAR.webp",
      ArticleLink:
        "https://www.designpataki.com/three-contemporary-workspaces-in-india-that-champion-colour-and-texture/",
      ArticleDescription: `As work-life boundaries have gotten fuzzier, it has led to an increase in expectations for comfort and flexibility in the workplace. “Flexibility is key for employee retention, productivity, and quality of life – one size doesn’t fit all – and hybrid work environments that encourage both the digital and the physical workplace are in demand, and designers are adapting to seamlessly move between the two!”, said Cindy Allen, Editor-in-Chief at Interior Design Magazine. The outcome is chic, contemporary and clean, with the right amount of cosy across the realm of office design.”`,
    },
    {
      ArticleLogo: "./src/components/PublicationPage/assets/thehindu-logo.svg",
      ArticleTitle:
        "Channel your energy in the Year of the Wood Snake to create calming spaces",
      ArticalBack: "./src/components/PublicationPage/assets/TASAAR.webp",
      ArticleLink:
        "https://www.thehindu.com/life-and-style/homes-and-gardens/channel-your-energy-in-the-year-of-the-wood-snake-to-create-calming-spaces/article69104467.ece",
      ArticleDescription: `The mystical serpent of the Chinese zodiac slithers into 2025, bringing a transformative Year of the Wood Snake that promises more strategic moves than a chess grandmaster’s playbook.
Rooted in a 60-year cyclical calendar combining 12 zodiac animals and five elemental forces, the 2025 Yin Wood Snake represents a nuanced dance of wisdom and adaptability. Unlike the rigid Yang Wood Dragon of 2024, this year embodies a ‘small green snake’ capable of calculated, diplomatic maneuvers.`,
    },
    {
      ArticleLogo:
        "./src/components/PublicationPage/assets/architecturalDigest.png",
      ArticleTitle:
        "AD Small Spaces: 5 compact offices that prove limited space is never a constraint",
      ArticalBack: "./src/components/PublicationPage/assets/TASAAR.webp",
      ArticleLink:
        "https://www.architecturaldigest.in/story/ad-small-spaces-5-compact-offices-that-prove-limited-space-is-never-a-constraint/",
      ArticleDescription: `Designing small spaces in an efficient yet aesthetically pleasing style may seem like a daunting task, but not for the designers of these projects. In this collection of compact offices taken from the AD archives, the designers put their best foot forward to showcase unique design styles and maximise the functionality of a small space.`,
    },
    {
      ArticleLogo: "./src/components/PublicationPage/assets/rethinking.webp",
      ArticleTitle: "811 by TASA designs",
      ArticalBack: "./src/components/PublicationPage/assets/TAsa2.jpg",
      ArticleLink:
        "https://www.re-thinkingthefuture.com/residentail-interior-design/8837-811-by-tasa-designs/",
      ArticleDescription: `The use of non-natural products is skyrocketing with their innovations and versatility, and the short-term incentives for the end-users to choose natural materials over them are on a steep decline. The reasons may range from inconvenient availability to higher costs.
With 40sqm of space, it was challenging to fit our ambitious requirements that included a powder bathroom, a pantry, some storage, all the workstations and a meeting room/cabin. Additionally, a lounge area for us to just sit and do nothing, an attempt at bringing some hygge to the space.`,
    },
    {
      ArticleLogo:
        "./src/components/PublicationPage/assets/architecturalDigest.png",
      ArticleTitle:
        "5 minimalist workspaces from the AD archives that are “very demure, very mindful”",
      ArticalBack: "./src/components/PublicationPage/assets/TASAAR.webp",
      ArticleLink:
        "https://www.architecturaldigest.in/story/5-minimalist-workspaces-from-the-ad-archives-that-are-very-demure-very-mindful/",
      ArticleDescription: `Warm neutrals, unostentatious details, and timeless elegance—these minimalist workspaces from the AD archives are architectural personifications of the “very demure, very mindful” TikTok phenomenon by beauty influencer Jools Lebron; perfect for those of you who don’t come to work with a green cut-crease.`,
    },
  ];
  function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;

    let truncated = text.slice(0, maxLength);

    // Ensure we don't cut off in the middle of a word
    let lastSpace = truncated.lastIndexOf(" ");
    if (lastSpace > 0) {
      truncated = truncated.slice(0, lastSpace);
    }

    return truncated + "...";
  }
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
                  <img
                    className={styles.LeftImage}
                    src={item.ArticalBack}
                    alt=""
                  />
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
                      {truncateText(item.ArticleDescription, 200)}
                    </p>
                    <a href={item.ArticleLink} target="_blank" rel="noreferrer">
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
