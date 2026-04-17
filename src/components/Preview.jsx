import { FaPhone, FaEnvelope } from "react-icons/fa6";
import "../styles/preview.css";

function Name({ name }) {
  return <div>{name === "" ? null : <h1>{name.toUpperCase()}</h1>}</div>;
}

function ContactInfo({ email, phone }) {
  if (email === "" && phone === "") {
    return null;
  }
  return (
    <section>
      {phone === "" ? null : (
        <div>
          <FaPhone size={"1.2em"} />
          {phone}
        </div>
      )}

      {email === "" ? null : (
        <div>
          <FaEnvelope size={"1.2em"} />
          {email}
        </div>
      )}
    </section>
  );
}

function Education({ education }) {
  if (education.length === 0) {
    return null;
  }

  return (
    <section>
      <h2>EDUCATION</h2>
      {education.map((form) => {
        return (
          <div key={form.id}>
            <div>
              <h3 className="school">{form.school || "<School>"}</h3>
              <p>
                <span className="degree">{form.degree || "<Degree>"}</span>
                <span className="field"> in {form.field || "<Field>"}</span>
              </p>
            </div>
            <div>
              <span className="location-dates">
                {form.location || "<Location>"} |{" "}
                {form.startDate || "<Start Date>"} to{" "}
                {form.endDate || "<End Date>"}
              </span>
            </div>
          </div>
        );
      })}
    </section>
  );
}

function Experience({ experience }) {
  if (experience.length === 0) {
    return null;
  }

  return (
    <section>
      <h2>EXPERIENCE</h2>
      {experience.map((form) => {
        return (
          <div key={form.id}>
            <div>
              <h3>{form.jobTitle || "<Job Title>"}</h3>
              <strong>{form.employer || "<Employer>"}</strong>
            </div>
            <div>
              <span>
                {form.location || "<Location>"} |{" "}
                {form.startDate || "<Start Date>"} -{" "}
                {form.endDate || "<End Date>"}
              </span>
            </div>
            <p>{form.responsibilities}</p>
          </div>
        );
      })}
    </section>
  );
}

export default function Preview({ data }) {
  return (
    <div className="page">
      <Name name={data.contactInfo.name} />
      <ContactInfo
        email={data.contactInfo.email}
        phone={data.contactInfo.phone}
      />
      <Education education={data.education} />
      <Experience experience={data.experience} />
    </div>
  );
}
