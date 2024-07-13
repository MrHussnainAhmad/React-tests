import "./App.module.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Hf from "./components/HF";
import DisplayHF from "./components/HF2";
import TheQuran from "./components/TQ";
import ImageSlider from "./components/ImageSlider";

function App() {
  let date = new Date();
  let options = { weekday: "long" };
  let dayName = date.toLocaleDateString("en-US", options);

  return (
    <>
      <Header />
      <NavBar />
      <Hf Time={date} />
      {dayName === "Friday" && <DisplayHF />} 
      <ImageSlider />
      <TheQuran />
    </>
  );
}

export default App;
