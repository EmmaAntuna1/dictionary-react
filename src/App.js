import "./App.css";
import Dictionary from "./Dictionary";

export default function App(){
  return(
    <div className="App">
      <div className="container">
        <header className="App-header">
        </header>
        <main>
          <Dictionary defaultKeyword="yoga" />
        </main>
        <footer>
      This project was coded by Emma Antuna and is{" "}
    <a href="https://github.com/EmmaAntuna1/weather-app-react"
    target="_blank"
    rel="noopener noreferrer">
       open-sourced on github
    </a>
    {" "}and 
    <a href="https://reverent-ritchie-af8e63.netlify.app" target="_blank"
    rel="noopener noreferrer"> 
    {" "}hosted on Netlify
    </a>
    </footer>
      </div>
    </div>
  );
}