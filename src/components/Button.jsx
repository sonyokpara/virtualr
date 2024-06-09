const Button = ({ label, backgroundColor, borderColor }) => {
  return (
    <button
      className={`py-2 px-4 rounded-md border ${
        backgroundColor
          ? `${backgroundColor} ${borderColor}`
          : "border-slate-500/55"
      } text-slate-200`}
    >
      {label}
    </button>
  );
};

export default Button;
