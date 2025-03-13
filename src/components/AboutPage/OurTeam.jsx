import React from "react";
import styles from "./css/OurTeam.module.css";
import { MdOutlineArrowRight } from "react-icons/md";

const OurTeam = () => {
  return (
    <>
      <div className="bg-white">
        <div className={`${styles.OurTeamContainer} container mx-auto`}>
          <h2 className="text-center text-2xl pb-24 font-bold">Our Team.</h2>
          <div className="flex md:p-0 p-4 flex-col gap-24 md:items-start items-center">
            <div className={`${styles.LeftParent} flex px-12 pb-24 flex-col`}>
              <p className="text-lg pb-3 font-normal">Bella Doe</p>
              <div className="border-t-1 border-black w-[45px]"></div>
              <p className="font-bold pt-3 text-sm">Partner</p>
              <p className="text-sm pt-[2px] font-light">
                {" "}
                <a href="mailto:info@mysite.com">info@mysite.com</a>
              </p>
              <p className="text-sm pt-[2px] font-light">
                Tel: <a href="tel:123456789">123-456-7890</a>
              </p>
              <div className="flex items-center pt-3">
                <div className="border-t-1 border-black w-[70px]"></div>
                <MdOutlineArrowRight
                  style={{ marginLeft: "-8px", fontSize: "12px" }}
                />
              </div>
              <div className={`${styles.LeftChild} flex items-center`}>
                <img
                  src="https://static.wixstatic.com/media/2e2a49_6cdb9486155e456c971ac2b7c4ee8269~mv2_d_5760_3844_s_4_2.jpg/v1/crop/x_2570,y_0,w_2510,h_2506/fill/w_251,h_250,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2e2a49_6cdb9486155e456c971ac2b7c4ee8269~mv2_d_5760_3844_s_4_2.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex md:p-0 p-4 flex-col mt-24 pb-24 md:items-end items-center">
            <div className={`${styles.LeftParent} flex px-12 pb-24 flex-col`}>
              <p className="text-lg pb-3 font-normal">John Doe</p>
              <div className="border-t-1 border-black w-[45px]"></div>
              <p className="font-bold pt-3 text-sm">Partner</p>
              <p className="text-sm pt-[2px] font-light">
                {" "}
                <a href="mailto:info@mysite.com">info@mysite.com</a>
              </p>
              <p className="text-sm pt-[2px] font-light">
                Tel: <a href="tel:123456789">123-456-7890</a>
              </p>
              <div className="flex items-center pt-3">
                <div className="border-t-1 border-black w-[70px]"></div>
                <MdOutlineArrowRight
                  style={{ marginLeft: "-8px", fontSize: "12px" }}
                />
              </div>
              <div className={`${styles.LeftChild} flex items-center`}>
                <img
                  src="https://static.wixstatic.com/media/2e2a49_e43c9db9261140f886dfa07219fe055b~mv2_d_5760_8572_s_4_2.jpg/v1/crop/x_1770,y_919,w_2510,h_2508/fill/w_251,h_250,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2e2a49_e43c9db9261140f886dfa07219fe055b~mv2_d_5760_8572_s_4_2.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
