import Header from "./components/header";
import Banner from "./components/banner";
import Preview from "./components/preview";
import About from "./components/about";
import Features from "./components/features";
import Roadmap from "./components/roadmap";
import Milestones from "./components/milestones";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Header/>
      {/* <Banner/> */}
      <Preview/>
      <About/>
      <Features/>
      <Roadmap/>
      <Milestones/>
      <Footer/>
    </div>
  );
}
