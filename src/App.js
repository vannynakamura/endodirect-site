import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Who from "./components/who-we-are/Who";
import Podcast from "./components/podcast/Podcast";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Who />
      <Podcast />
      <Footer />
    </div>
  );
}

export default App;
