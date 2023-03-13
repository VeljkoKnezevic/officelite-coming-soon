export default function Date() {
  return (
    <section className="date">
      {/* If you're choosing to make this date dynamic, set it to 30 days in the future from the moment the visitor views the page */}
      <h3 className="date__date">
        Coming <span className="date__date--blue">4 Nov 2020</span>
      </h3>
      {/* If you're choosing to make this timer dynamic, have it countdown from the date you set above */}
      <div className="date__time">
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
      <button className="date__button" type="button">
        Get Started
      </button>
    </section>
  );
}