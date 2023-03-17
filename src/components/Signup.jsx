import DateComponent from "./DateComponent";
import Header from "./Header";
import Form from "./Form";

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
        <Form />
      </div>
      <div className="signup__footer" />
    </div>
  );
}
