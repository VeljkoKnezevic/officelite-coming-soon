/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import { format, addDays, addHours } from "date-fns";
import Countdown from "react-countdown";

export default function DateComponent() {
  const location = useLocation();

  const futureDate = addHours(addDays(new Date(), 30), 1);
  const date = format(futureDate, "d MMM yyyy");

  return (
    <section className={location.pathname === "/sign-up" ? "signup__date" : "date"}>
      <h3 className={location.pathname === "/sign-up" ? "signup__date__date" : "date__date"}>
        Coming <span className="date__date--blue">{date}</span>
      </h3>
      <div className={location.pathname === "/sign-up" ? "signup__date__time" : "date__time"}>
        <div className="date__card">
          <div className="date__card__number">
            <Countdown date={futureDate} renderer={(props) => <div>{props.days}</div>} />
          </div>
          <div className="date__card__unit">Days</div>
        </div>
        <div className="date__card">
          <div className="date__card__number">
            <Countdown date={futureDate} renderer={(props) => <div>{props.hours}</div>} />
          </div>
          <div className="date__card__unit">Hours</div>
        </div>
        <div className="date__card">
          <div className="date__card__number">
            <Countdown date={futureDate} renderer={(props) => <div>{props.minutes}</div>} />
          </div>
          <div className="date__card__unit">Min</div>
        </div>
        <div className="date__card">
          <div className="date__card__number">
            <Countdown date={futureDate} renderer={(props) => <div>{props.seconds}</div>} />
          </div>

          <div className="date__card__unit">Sec</div>
        </div>
      </div>

      <button className={location.pathname === "/sign-up" ? "signup__date__button" : "date__button"} type="button">
        <Link to="/sign-up">Get Started</Link>
      </button>
    </section>
  );
}
