import { Link } from "react-router-dom";

export default function Cards() {
  return (
    <div className="cards">
      <div className="card" id="basic">
        <h2 className="card__heading">Basic</h2>
        <div className="card__price">Free</div>
        <p className="card__users">Up to 5 users for free</p>
        <div className="card__benefits">
          <p className="card__benefit">Basic document collaboration</p>
          <p className="card__benefit">2 gb storage</p>
          <p className="card__benefit">Great security and support</p>
        </div>
        <Link to="/sign-up">
          <button type="button" className="card__button">
            Try for Free
          </button>
        </Link>
      </div>
      <div className="card" id="pro">
        <h2 className="card__heading">Pro</h2>
        <div className="card__price">$9.99</div> <p className="card__users">Per user, billed monthly</p>
        <div className="card__benefits">
          <p className="card__benefit">All essential integrations</p>
          <p className="card__benefit">50 gb storage</p>
          <p className="card__benefit">More control and insights</p>
        </div>
        <Link to="/sign-up">
          <button type="button" className="card__button">
            Try for Free
          </button>
        </Link>
      </div>
      <div className="card" id="ultimate">
        <h2 className="card__heading">Ultimate</h2>
        <div className="card__price">$19.99</div>
        <p className="card__users">Per user, billed monthly</p>
        <div className="card__benefits">
          <p className="card__benefit">Robust work management</p>
          <p className="card__benefit">100 gb</p>
          <p className="card__benefit">storage VIP support</p>
        </div>
        <Link to="/sign-up">
          <button type="button" className="card__button">
            Try for Free
          </button>
        </Link>
      </div>
    </div>
  );
}
