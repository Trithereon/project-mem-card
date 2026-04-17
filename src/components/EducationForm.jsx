import Button from "./Button";
import Input from "./Input";
import "../styles/form.css";
import { useId } from "react";

export default function EducationForm({
  education,
  onChange,
  onDelete,
  editMode,
}) {
  const id = useId();

  const handleChange = (e) => {
    const { name, value } = e.target; // pulls e.target.name and e.target.value
    onChange(name, value);
  };

  return (
    <form id={"education" + id}>
      <fieldset disabled={!editMode}>
        <Input
          type="text"
          label="School: "
          id={"school" + id}
          name="school"
          autoComplete="off"
          classes="medium"
          value={education.school}
          onChange={handleChange}
        />
        <Input
          type="text"
          label="Degree: "
          id={"degree" + id}
          name="degree"
          autoComplete="off"
          classes="medium"
          value={education.degree}
          onChange={handleChange}
        />
        <Input
          type="text"
          label="Field of study: "
          id={"fieldOfStudy" + id}
          name="field"
          autoComplete="off"
          classes="medium"
          value={education.field}
          onChange={handleChange}
        />
        <Input
          type="text"
          label="Location: "
          id={"location" + id}
          name="location"
          autoComplete="off"
          classes="medium"
          value={education.location}
          onChange={handleChange}
        />
        <Input
          type="date"
          label="Start date: "
          id={"studyStartDate" + id}
          name="startDate"
          autocomplete="off"
          value={education.startDate}
          onChange={handleChange}
        />
        <Input
          type="date"
          label="End date: "
          id={"studyEndDate" + id}
          name="endDate"
          autocomplete="off"
          value={education.endDate}
          onChange={handleChange}
        />
        <Button classes="delete" label="Delete Entry" onClick={onDelete} />
      </fieldset>
    </form>
  );
}
