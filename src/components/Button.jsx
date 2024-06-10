const Button = ({ label, backgroundColor, borderColor, classProps }) => {
  return (
    <button
      className={`py-2 px-4 rounded-md border ${
        backgroundColor ? `${backgroundColor}` : "bg-transparent"
      } ${borderColor ? `${borderColor}` : "border-slate-500/55"}
       text-slate-200 ${classProps}`}
    >
      {label}
    </button>
  );
};

export default Button;
