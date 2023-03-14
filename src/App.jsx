import Cards from "./components/Cards";
import Date from "./components/Date";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./styles/styles.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Cards />
      </main>
      <footer className="footer">
        <Date />
      </footer>
    </>
  );
}

export default App;
