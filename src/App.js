import { useState } from 'react';
import './App.css';
import Test from './components/Test';
import "./index.css";


function App() {
  // const [activeTab, setActiveTab] = useState(0);
  const [show, setShow]=useState(false);
  
  return (
    <div>
      {/* <button onClick={()=>setActiveTab((Math.random()*2).toFixed(0))}>Aktif tabı değiştir</button>
     <Tab activeTab={activeTab} setActiveTab={setActiveTab}>
        <Tab.Panel title="Profile">1.Tab</Tab.Panel>
        <Tab.Panel title="Hakkında">2.Tab</Tab.Panel>
        <Tab.Panel title="Ayarlar">3.Tab</Tab.Panel>
     </Tab>
     {
      activeTab === 2 && (
        <div>Burasıda ektra bir alan</div>
      )
     } */}
     <button onClick={()=>setShow(!show)}>{show?"Gizle":"Göster"}</button>
    {
      show && ( <Test/>)
    }
   
    </div>
  );
}

export default App;
