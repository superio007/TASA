import Contact from "../components/contactPage/Contact";
import HeroSection from "../components/HomePage/HeroSection"
import { ParallaxProvider } from "react-scroll-parallax";
import FeaturedProject from "../components/HomePage/FeaturedProject"
const HomePage = () => {
  return (
    <>
      <ParallaxProvider>
        <HeroSection />
      </ParallaxProvider>
      <FeaturedProject/>
      <Contact />
    </>
  );
};
export default HomePage;
