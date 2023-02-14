import './App.css';
import "./index.css";

function App() {
  return (
    <div className="bg-lime-300 text-yellow-500 font-semibold mx-auto w-full">
     <p>Test</p>
     <p>
     {
        process.env.REACT_APP_API_URL
      }
     </p>
    <button className='w-[200px] rounded py-2 px-7 bg-blue-600 text-white hover:bg-blue-800 transition duration-150 ease-in-out text-xl'>Gönder</button>
    </div>
  );
}

export default App;
