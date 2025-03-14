import React from "react";
import styles from "./css/PublicationHeroSection.module.css";
import { Parallax } from "react-scroll-parallax";

function PublicationHeroSection() {
  return (
    <div className={`${styles.bg}`}>
      <Parallax translateY={["-40%", "50%"]}>
        <div className="flex justify-center items-center min-h-[80vh]">
          <h1 className="font-bold text-9xl text-center text-white">Our Appearences</h1>
        </div>
      </Parallax>
    </div>
  );
}

export default PublicationHeroSection;
