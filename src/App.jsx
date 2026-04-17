import { useState } from "react";
import "./styles/app.css";
import ContactInfoForm from "./components/ContactInfoForm";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import Accordion from "./components/Accordion";
import Preview from "./components/Preview";
import { FaAddressCard, FaGraduationCap, FaBriefcase } from "react-icons/fa6";
import { sampleData } from "./assets/sampleData";

function App() {
  const [data, setData] = useState(sampleData);

  const updateContactInfo = (field, value) => {
    setData((prevData) => {
      return {
        ...prevData,
        contactInfo: {
          ...prevData.contactInfo,
          [field]: value,
        },
      };
    });
  };

  const addEducationData = () => {
    setData((prevData) => {
      return {
        ...prevData,
        education: [
          ...prevData.education,
          {
            id: crypto.randomUUID(),
            school: "",
            degree: "",
            field: "",
            location: "",
            startDate: "",
            endDate: "",
          },
        ],
      };
    });
  };

  const updateEducationData = (id, field, value) => {
    setData((prevData) => {
      return {
        ...prevData,
        education: prevData.education.map((form) =>
          form.id === id ? { ...form, [field]: value } : form,
        ),
      };
    });
  };

  const deleteEducationData = (id) => {
    setData((prevData) => {
      return {
        ...prevData,
        education: prevData.education.filter((form) => form.id !== id),
      };
    });
  };

  const addExperienceData = () => {
    setData((prevData) => {
      return {
        ...prevData,
        experience: [
          ...prevData.experience,
          {
            id: crypto.randomUUID(),
            jobTitle: "",
            employer: "",
            location: "",
            responsibilities: "",
            startDate: "",
            endDate: "",
          },
        ],
      };
    });
  };

  const updateExperienceData = (id, field, value) => {
    setData((prevData) => {
      return {
        ...prevData,
        experience: prevData.experience.map((form) =>
          form.id === id ? { ...form, [field]: value } : form,
        ),
      };
    });
  };

  const deleteExperienceData = (id) => {
    setData((prevData) => {
      return {
        ...prevData,
        experience: prevData.experience.filter((form) => form.id !== id),
      };
    });
  };

  const [editModes, setEditModes] = useState([true, true, true]);

  const toggleEditMode = (index) => {
    setEditModes((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <>
      <section id="forms">
        <Accordion
          index={0}
          title="Contact Info"
          icon={<FaAddressCard />}
          editMode={editModes[0]}
          onToggleEditMode={() => toggleEditMode(0)}
        >
          <ContactInfoForm
            editMode={editModes[0]}
            contactInfo={data.contactInfo}
            onChange={updateContactInfo}
          />
        </Accordion>
        <br />
        <Accordion
          title="Education"
          icon={<FaGraduationCap />}
          onAddForm={addEducationData}
          editMode={editModes[1]}
          onToggleEditMode={() => toggleEditMode(1)}
        >
          {data.education.map((form) => (
            <EducationForm
              editMode={editModes[1]}
              key={form.id}
              education={form}
              onChange={(field, value) =>
                updateEducationData(form.id, field, value)
              }
              onDelete={() => deleteEducationData(form.id)}
            />
          ))}
        </Accordion>
        <br />
        <Accordion
          title="Work Experience"
          icon={<FaBriefcase />}
          onAddForm={addExperienceData}
          editMode={editModes[2]}
          onToggleEditMode={() => toggleEditMode(2)}
        >
          {data.experience.map((form) => (
            <ExperienceForm
              editMode={editModes[2]}
              key={form.id}
              experience={form}
              onChange={(field, value) =>
                updateExperienceData(form.id, field, value)
              }
              onDelete={() => deleteExperienceData(form.id)}
            />
          ))}
        </Accordion>
      </section>

      <section id="preview">
        <Preview data={data} />
      </section>
    </>
  );
}

export default App;
