import React, {useState, useEffect} from "react";
import axios from 'axios'
import DisplayS from './DisplayS'
import "./App.css";
import styles from 'styled-components'




function App() {
  const [image,setImage] = useState({})
  
  
  
 useEffect(() => {
  
  const getImage = () => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(res => {
        console.log(res.data)
        setImage(res.data)
      })
      .catch(err => {
        
      })
  }
  getImage()

  
}, [])


  

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
       
      </p>

      <DisplayS  imgInfo = {image.url} title = {image.title} copyright = {image.copyright}
      date = {image.date} imageDesc={image.explanation} />
    </div>

 );



}

export default App;
