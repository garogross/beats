import './App.css';
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import SelectColor from "../SelectColor/SelectColor";
import BeatsAndKim from "../BeatsAndKim/BeatsAndKim";
import Carousel from "../Carousel/Carousel";
import ChooseYourBeats from '../ChooseYourBeats/ChooseYourBeats';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <SelectColor/>
      <BeatsAndKim/>
      <Carousel />
      <ChooseYourBeats />
      <Footer/>
    </div>
  );
}

export default App;
