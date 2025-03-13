import React from "react";
import styles from "./css/AboutHeroSection.module.css";
const AboutHeroSection = () => {
  return (
    <>
      <div className={`${styles.bg}`}>
        <div className="flex justify-center items-center">
          <div className={`${styles.parent} container mx-auto xl:px-80`}>
            <div className={`${styles.child} bg-white p-4 md:px-12 md:py-18`}>
              <p className="text-lg pb-3 font-normal">About us</p>
              <div className="border-t-1 border-black w-[45px]"></div>
              <p className="font-light py-3 text-sm">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. Feel free to drag and
                drop me anywhere you like on your page. I’m a great place for
                you to tell a story and let your users know a little more about
                you. ​
              </p>
              <p className="font-light py-3 text-sm">
                This is a great space to write long text about your company and
                your services. You can use this space to go into a little more
                detail about your company. Talk about your team and what
                services you provide. Tell your visitors the story of how you
                came up with the idea for your business and what makes you
                different from your competitors. Make your company stand out and
                show your visitors who you are.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHeroSection;
