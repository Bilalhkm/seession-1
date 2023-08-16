function Button(props) {
  return (
    <button onClick={props.fun} className="react-btn">
      {props.title}
    </button>
  );
}

export default Button;
