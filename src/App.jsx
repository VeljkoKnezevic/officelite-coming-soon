import Cards from "./components/Cards";
import DateComponent from "./components/DateComponent";
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
        <DateComponent />
      </footer>
    </>
  );
}

export default App;
