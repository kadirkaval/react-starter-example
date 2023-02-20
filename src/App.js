import './App.css';
import Guarantee from './components/Guarantee';
import HobbylList from './components/HobbylList';
import chat from "./assets/chat.png";
import coin from "./assets/coin.png";
import delivery from "./assets/delivery.png";
import "./index.css";

function App() {
  const title = ["Free shipping", "100% Money back", "Online support 24/7"]
  const description = ["Fusce urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vesti bulum mal esuada aliquet libero viverra cursus.", "Urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vesti bulum mal esuada aliquet libero viverra cursus.", "Urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vesti bulum mal esuada aliquet libero viverra cursus."]
  return (
    <div className='w-full'>
    <HobbylList />

    <div className='flex w-[60%] mx-auto text-center'>
    <Guarantee img={delivery} title={title[0]} description={description[2]} />
    <Guarantee img={chat} title={title[2]} description={description[0]} />
    <Guarantee img={coin} title={title[1]} description={description[1]} />    
    </div>
    </div>
    
  );
}

export default App;
