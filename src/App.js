import { About } from './About';
import './App.css';
import { Footer } from './Footer';
import { Info } from './Info';
import { Interest } from './Interest';

function App() {
  return (
    <div className='w-full bg-[#23252C] overflow-hidden '>
      <div className="App w-4/5 lg:w-2/5 overflow-hidden bg-[#1A1B21] text-white flex flex-col mx-auto my-16 rounded-3xl text-justify" >
        <Info/>
        <About/>
        <Interest/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
