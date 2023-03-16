import DateComponent from "./DateComponent";
import Header from "./Header";

export default function Signup() {
  return (
    <div className="signup">
      <Header />
      <div className="signup__container">
        <div className="signup__content">
          <h1 className="signup__heading">Work smarter. Save time.</h1>
          <p className="signup__para">
            Easily manage your projects. Get on the list and receive in-app perks available only to early subscribers.
            We are moving into final development and getting ready for official launch soon.
          </p>
          <DateComponent />
        </div>
        <form className="form">
          <input className="form__input" type="text" placeholder="Name" />
          <input className="form__input" type="email" placeholder="Email Address" />
          <select className="form__input" id="pricing" name="pricing">
            <option className="form__options" value="basic">
              Basic Pack Free
            </option>
            <option className="form__options" value="pro">
              Pro Pack $9.99
            </option>
            <option className="form__options" value="ultimate">
              Ultimate Pack $19.99
            </option>
          </select>
          <input className="form__input" type="text" placeholder="Phone Number" />
          <input className="form__input" type="text" placeholder="Company" />
          <button className="form__button" type="submit">
            Get on the list
          </button>
        </form>
      </div>
      <div className="signup__footer" />
    </div>
  );
}
