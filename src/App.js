import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from './Components/header'
import Image from './Components/image'
import Footer from './Components/footer'
import {URL_BASE, API_KEY} from './Constants/index'

function App() {
  const [data, setData] = useState(null);
  const [random, setRandom] = useState([''])
  useEffect(() => {
    console.log(`Hello ${random}`);
    axios.get(`${URL_BASE}${API_KEY}${random[0]}`)
      .then((res) => {
        console.log(res.data);
        Array.isArray(res.data) ? setData(res.data[0]) : setData(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [random]) 
  // function refreshPage() {
  //   random === '&count=1' ? refreshPage() : setRandom('&count=1')
  // }
  // Display a loading message while the data is fetching
  if (!data) return <h3>Loading...</h3>;
  // console.log(['']===['']);
  // Display your component as normal after the data has been fetched
  return (
    <div className="App">
     
      <Header  date={data} />
      <>
        <button onClick={() => setRandom(['&count=1'])}>Random Day</button>
        <button onClick={() => setRandom('&')}>Today</button>
      </>
      <Image data={data} />
      <Footer data={data} />
      
    
    </div>
  );
}

export default App;


