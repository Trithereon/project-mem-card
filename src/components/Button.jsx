export default function Button({ onClick, label, classes, style }) {
  return (
    <>
      <button onClick={onClick} className={classes} style={style}>
        {label}
      </button>
    </>
  );
}
