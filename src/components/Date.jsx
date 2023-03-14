import { useLocation } from "react-router-dom";

export default function Date() {
  const location = useLocation();

  return (
    <section className={location.pathname === "/sign-up" ? "signup__date" : "date"}>
      {/* If you're choosing to make this date dynamic, set it to 30 days in the future from the moment the visitor views the page */}
      <h3 className={location.pathname === "/sign-up" ? "signup__date__date" : "date__date"}>
        Coming <span className="date__date--blue">4 Nov 2020</span>
      </h3>
      {/* If you're choosing to make this timer dynamic, have it countdown from the date you set above */}
      <div className={location.pathname === "/sign-up" ? "signup__date__time" : "date__time"}>
        <div className="date__card">
          <div className="date__card__number">47</div>
          <div className="date__card__unit">Days</div>
        </div>
        <div className="date__card">
          <div className="date__card__number">07</div>
          <div className="date__card__unit">Hours</div>
        </div>
        <div className="date__card">
          <div className="date__card__number">56</div>
          <div className="date__card__unit">Min</div>
        </div>
        <div className="date__card">
          <div className="date__card__number">14</div>
          <div className="date__card__unit">Sec</div>
        </div>
      </div>

      <button className={location.pathname === "/sign-up" ? "signup__date__button" : "date__button"} type="button">
        Get Started
      </button>
    </section>
  );
}
