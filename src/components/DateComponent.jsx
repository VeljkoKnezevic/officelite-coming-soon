import { Link, useLocation } from "react-router-dom";
import { format, addDays } from "date-fns";

export default function DateComponent() {
  const location = useLocation();

  const futureDate = addDays(new Date(), 30);
  const date = format(futureDate, "d MMM yyyy");

  return (
    <section className={location.pathname === "/sign-up" ? "signup__date" : "date"}>
      {/* If you're choosing to make this date dynamic, set it to 30 days in the future from the moment the visitor views the page */}
      <h3 className={location.pathname === "/sign-up" ? "signup__date__date" : "date__date"}>
        Coming <span className="date__date--blue">{date}</span>
      </h3>
      {/* If you're choosing to make this timer dynamic, have it countdown from the date you set above */}
      <div className={location.pathname === "/sign-up" ? "signup__date__time" : "date__time"}>
        <div className="date__card">
          {/* <div className="date__card__number">{}</div> */}
          <div className="date__card__unit">Days</div>
        </div>
        <div className="date__card">
          {/* <div className="date__card__number">{}</div> */}
          <div className="date__card__unit">Hours</div>
        </div>
        <div className="date__card">
          {/* <div className="date__card__number">{}</div> */}
          <div className="date__card__unit">Min</div>
        </div>
        <div className="date__card">
          {/* <div className="date__card__number">{}</div> */}
          <div className="date__card__unit">Sec</div>
        </div>
      </div>

      <button className={location.pathname === "/sign-up" ? "signup__date__button" : "date__button"} type="button">
        <Link to="/sign-up">Get Started</Link>
      </button>
    </section>
  );
}
