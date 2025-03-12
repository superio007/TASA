import Contact from "../components/contactPage/Contact";
import HeroSection from "../components/HomePage/HeroSection"
import { ParallaxProvider } from "react-scroll-parallax";
const HomePage = () => {
  return (
    <>
      <ParallaxProvider>
        <HeroSection />
      </ParallaxProvider>
      <Contact />
    </>
  );
};
export default HomePage;
