import Header from "./components/header";
import Preview from "./components/preview";
import About from "./components/about";
import Roadmap from "./components/roadmap";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <Preview/>
      <About/>
      <Roadmap/>
      <Footer/>
    </div>
  );
}
