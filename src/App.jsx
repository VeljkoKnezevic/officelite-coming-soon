import Cards from "./components/Cards";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./styles/styles.scss";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Cards />
      </main>

      <footer className="footer">
        <section className="date">
          {/* If you're choosing to make this date dynamic, set it to 30 days in the future from the moment the visitor views the page */}
          <h3 className="date__date">Coming 4 Nov 2020</h3>
          {/* If you're choosing to make this timer dynamic, have it countdown from the date you set above */}
          <div className="date__time">47 Days 07 Hours 56 Min 14 Sec </div>
          <button className="date__button" type="button">
            Get Started
          </button>
        </section>
      </footer>
    </div>
  );
}

export default App;
