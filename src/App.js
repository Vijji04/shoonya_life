import './App.css';
import Header from './components/Header';
import Filters from './components/Filters';
import HeroSection from './components/HeroSection';
import Listing from './components/Listing';
import { useState,useCallback } from 'react';
import Footer from './components/Footer';
function App() {

  const [filterData,setFilterData] = useState(
   {
    date:null,
    option: "",
    search: "",
  } 
  )

  //using useCallback to prevent the function from re-rendering,handling an error caused earlier
  const handleSetFilterData = useCallback((values) => {
    setFilterData(values);
  }, []);

  return (
    <div className="App">
     <Header />
    <div className='hidden md:block'>
    <HeroSection />  
    </div> 
     <Filters setFilterData={handleSetFilterData} />
     <Listing filterData={filterData} />
     <Footer />
    </div>
  );
}

export default App;
