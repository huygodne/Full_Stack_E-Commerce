import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './Pages/Home';
import Header from './Components/Header';
import axios from 'axios';
import { createContext } from 'react';
import { useState, useEffect } from 'react';


const MyContext = createContext();
function App() {
  const [countryList, setcountryList] = useState([]);
  const [selectedCountry, setselectedCountry] = useState('');
  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry = async (url) => {
    const responsive = await axios.get(url).then((res) => {
      setcountryList(res.data.data);
      console.log(res.data.data[0].country);
    })
  }


  const values = {
    countryList,
    setselectedCountry,
    selectedCountry
  }

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext }