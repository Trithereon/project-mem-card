export default function Input({
  type,
  label,
  id,
  name,
  autoComplete,
  classes,
  value,
  onChange,
}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        autoComplete={autoComplete}
        name={name}
        className={classes}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
