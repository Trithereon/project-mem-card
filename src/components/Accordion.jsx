import Button from "./Button";
import "../styles/accordion.css";

export default function Accordion({
  title,
  icon,
  children,
  onAddForm,
  editMode,
  onToggleEditMode,
}) {
  return (
    <details className="accordion" open>
      <summary>
        {title}
        {icon}
      </summary>
      {children}
      <Button
        classes={editMode ? "submit" : "edit"}
        label={editMode ? "Submit" : "Edit"}
        onClick={onToggleEditMode}
      />
      <Button
        style={
          title === "Contact Info"
            ? { display: "none" }
            : { display: "inline-block" }
        }
        classes="addForm"
        label={"Add " + title}
        onClick={onAddForm}
      />
    </details>
  );
}
