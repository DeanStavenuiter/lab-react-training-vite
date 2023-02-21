const Greetings = (props) => {
  return (
    <div>
      <p>
        {props.lang === "de"
          ? "Hallo "
          : "" || props.lang === "fr"
          ? "Bonjour "
          : ""}
        {props.children}
      </p>
    </div>
  );
};

export default Greetings;
