import HeroImg from "../../assets/home/illustration-charts.svg";

export default function Hero() {
  return (
    <section className="hero">
      <img className="hero__image" src={HeroImg} alt="statistics and graphs" />
      <div className="hero__content">
        <h1 className="hero__heading">A simple solution to complex tasks is coming soon</h1>
        <p className="hero__para">
          Say goodbye to inefficient juggling of multiple apps, teams, and projects. Officelite is the new collaboration
          platform built with an intuitive interface to improve productivity.
        </p>
        <button className="hero__button" type="button">
          Get Started
        </button>
      </div>
    </section>
  );
}
