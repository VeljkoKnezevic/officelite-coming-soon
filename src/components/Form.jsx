import { useState } from "react";
import Select from "react-select";

export default function Form() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    pack: "basic",
    phone: "",
    company: "",
  });

  const [options] = useState([
    { label: `Basic Pack Free`, value: "basic" },
    { label: "Pro Pack $9.99", value: "pro" },
    { label: "Ultimate Pack $19.99", value: "ultimate" },
  ]);

  const [userChoice, setUserChoice] = useState(options[0]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    const inputs = e.target.elements;
    const emailRegex = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_-]+)(\.[a-zA-Z]{2,5}){1,2}$/;

    if (profile.name === "") {
      inputs[0].classList.add("form__input--error");
      e.preventDefault();
    } else {
      inputs[0].classList.remove("form__input--error");
    }

    if (!profile.email.match(emailRegex)) {
      inputs[1].classList.add("form__input--error");
      e.preventDefault();
    } else {
      inputs[1].classList.remove("form__input--error");
    }

    if (profile.phone === "") {
      inputs[3].classList.add("form__input--error");
      e.preventDefault();
    } else {
      inputs[3].classList.remove("form__input--error");
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="form">
      <input
        className="form__input"
        name="name"
        value={profile.name}
        onChange={(e) => handleChange(e)}
        type="text"
        placeholder="Name"
      />
      <input
        className="form__input"
        name="email"
        value={profile.email}
        onChange={(e) => handleChange(e)}
        type="text"
        placeholder="Email Address"
      />
      <Select
        unstyled
        isClearable={false}
        isSearchable={false}
        className="react-select-container"
        classNamePrefix="react-select"
        options={options}
        defaultValue={userChoice}
        onChange={(choice) => setUserChoice(choice)}
      />
      <input
        className="form__input"
        name="phone"
        value={profile.phone}
        onChange={(e) => handleChange(e)}
        type="text"
        placeholder="Phone Number"
      />
      <input
        className="form__input"
        name="company"
        value={profile.company}
        onChange={(e) => handleChange(e)}
        type="text"
        placeholder="Company"
      />
      <button className="form__button" type="submit">
        Get on the list
      </button>
    </form>
  );
}
