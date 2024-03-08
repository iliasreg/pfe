import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Description from "../components/Description";
import Faq from "../components/Faq";
import ConnectWithUs from "../components/ConnectWithUs";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero/>
      <Description/>
      <Faq />
      <ConnectWithUs />
      <Footer />
    </>  
  );
}
