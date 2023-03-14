import Date from "./Date";
import Header from "./Header";

export default function Signup() {
  return (
    <div className="signup">
      <Header />
      <h1 className="signup__heading">Work smarter. Save time.</h1>
      <p className="signup__para">
        Easily manage your projects. Get on the list and receive in-app perks available only to early subscribers. We
        are moving into final development and getting ready for official launch soon.
      </p>
      <Date />
      <form className="form">
        <input className="form__input" type="text" placeholder="Name" />
        <input className="form__input" type="email" placeholder="Email Address" />
        <select className="form__input" id="pricing" name="pricing">
          <option value="basic">
            Basic Pack <span className="form-prices">Free</span>
          </option>
          <option value="pro">
            Pro Pack <span className="form-prices">$9.99</span>
          </option>
          <option value="ultimate">
            Ultimate Pack <span className="form-prices">$19.99</span>
          </option>
        </select>
        <input className="form__input" type="text" placeholder="Phone Number" />
        <input className="form__input" type="text" placeholder="Company" />
        <button className="form__button" type="submit">
          Get on the list
        </button>
      </form>
    </div>
  );
}
