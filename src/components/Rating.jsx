
const Rating = (props) => {
  return (
    <div>
      <span>
        {
                    Number(props.children) >= 0 && Number(props.children) < 1
          ? "☆☆☆☆☆"
          : "" || (Number(props.children) >= 1 && Number(props.children) < 1.5)
          ? "★☆☆☆☆"
          : "" || (Number(props.children) >= 1.5 && Number(props.children) < 2.5)
          ? "★★☆☆☆"
          : "" || (Number(props.children) >= 2.5 && Number(props.children) < 3.5)
          ? "★★★☆☆"
          : "" || (Number(props.children) >= 3.5 && Number(props.children) < 4.5)
          ? "★★★★☆"
          : "" || (Number(props.children) >= 4.5 && Number(props.children) <= 5 )
          ? "★★★★★"
          : ""}
      </span>
    </div>
  );
};

export default Rating;
