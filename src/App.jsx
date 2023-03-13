import Header from "./components/Header";
import Hero from "./components/Hero";
import "./styles/styles.scss";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <div className="cards">
          <div className="card">
            <h2 className="card__heading">Basic</h2>
            <div className="card__price">Free</div>
            <p className="card__users">Up to 5 users for free</p>
            <p className="card__benefit">Basic document collaboration</p>
            <p className="card__benefit">2 gb storage</p>
            <p className="card__benefit">Great security and support</p>
            <button type="button" className="card__button">
              Try for Free
            </button>
          </div>
          <div className="card">
            <h2 className="card__heading">Pro</h2>
            <div className="card__price">$9.99</div> <p className="card__users">Per user, billed monthly</p>
            <p className="card__benefit">All essential integrations</p>
            <p className="card__benefit">50 gb storage</p>
            <p className="card__benefit">More control and insights</p>
            <button type="button" className="card__button">
              Try for Free
            </button>
          </div>
          <div className="card">
            <h2 className="card__heading">Ultimate</h2>
            <div className="card__price">$19.99</div>
            <p className="card__users">Per user, billed monthly</p>
            <p className="card__benefit">Robust work management</p>
            <p className="card__benefit">100 gb</p>
            <p className="card__benefit">storage VIP support</p>
            <button type="button" className="card__button">
              Try for Free
            </button>
          </div>
        </div>
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
