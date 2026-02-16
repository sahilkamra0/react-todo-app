function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ padding: "8px 12px", background: "blue", color: "white" }}
    >. Hello button
      {text}
    </button>
  );
}

export default Button;
