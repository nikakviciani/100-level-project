// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// // 12) კომენტარებით ახსენით რას ნიშანვს აპლიკაციის კომპონენტებად დაყოფა და რა უპირატესობები აქვს
// // კომპონენტებად დაყოფა ნიშნავს კოდის რაღაც ნაწილის სხვადაასხვა ფაილში დანაწილებას და რპომონენტების სახით ორგანიზებას.
// // უპირატესობები:
// // 1. კოდის გამეორების შემცირება - ერთნაირი ფუნქციონალისთვის ერთი კომპონენტის გამოყენება
// // 2. კოდის წაკითხვის და მენეჯმენტის გამარტივება - პატარა კომპონენტები ადვილად იკითხება და მართვადია
// // 3. ხელახლა გამოყენებადობა - ერთი კომპონენტის გამოყენება სხვადასხვა ადგილას აპლიკაციაში
// // 4. გუნდური მუშაობის გამარტივება - სხვადასხვა დეველოპერები მუშაობენ სხვადასხვა კომპონენტებზე პარალელურად
// function App() {
  
  
//   return (
//     <>
      
//     </>
    
//   )
// }

// export default App
import { useState } from "react";
import wines from "./wines.json";

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [search, setSearch] = useState("");

  const filteredWines = wines.filter(w =>
    w.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.body.className = next;
  };

  return (
    <>
      <header>
        <h1>Wine Bar</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#collection">Collection</a>
          <a href="#map">Map</a>
        </nav>
        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </header>

      <main>
        <section className="search">
          <h2 id="home">Search Wine</h2>
          <input
            type="text"
            placeholder="Type wine name..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </section>

        <section id="collection" className="gallery">
          {filteredWines.map(wine => (
            <div className="card" key={wine.id}>
              <img src={wine.image} alt={wine.name} />
              <div className="info">
                <h3>{wine.name}</h3>
                <span className="price">{wine.price}</span>
              </div>
            </div>
          ))}
        </section>
      </main>

      <footer id="map">
        <p>© 2026 Wine Bar</p>
      </footer>
    </>
  );
}
