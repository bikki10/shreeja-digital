import { lazy, Suspense } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import OurPortfolio from "./Components/OurPortfolio";
import Contact from "./Components/Contact";

const Banner = lazy(() => import("./Components/Banner"));
const FAQs = lazy(() => import("./Components/FAQs"));
const Homepage = lazy(() => import("./Components/Homepage"));
const OurServices = lazy(() => import("./Components/OurServices"));
const WhyTrustUs = lazy(() => import("./Components/WhyTrustUs"));

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Homepage />
        <OurServices />
        <OurPortfolio />
        <WhyTrustUs />
        <FAQs />
        <Banner />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
