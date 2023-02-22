const NumbersTable = (props) => {
  const { limit } = props;
  const numbers = Array.from({ length: limit }, (_, i) => i + 1);
  return (
    <div style={{ width: "auto", height: "100px" }}>
      {numbers.map((number) => (
        <span
          key={number}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: number % 2 === 0 ? "red" : "white",
            width: "100px",
            height: "100px",
            border: 'solid 1px black'
          }}
        >
          {number}
        </span>
      ))}
    </div>
  );
};

export default NumbersTable;
