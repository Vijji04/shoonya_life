import './App.css';
import Header from './components/Header';
import Filters from './components/Filters';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="App">
     <Header />
    <div className='hidden md:block'>
    <HeroSection />  
    </div> 
     <Filters />
    </div>
  );
}

export default App;
