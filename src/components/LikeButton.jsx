import { useState } from "react";

const LikeButton = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [color1, setColor1] = useState();
  const [color2, setColor2] = useState();

  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
  
  const randomColor = () => {
    const randomIndex1 = Math.floor(Math.random() * colors.length);
    return colors[randomIndex1];
  };

  return (
    <div>
      <button
        style={{ background: color1 }}
        onClick={() => {
          setCounter1((prevCount) => prevCount + 1);
          setColor1(randomColor());
        }}
      >
        {counter1} likes
      </button>
      <button
        style={{ background: color2 }}
        onClick={() => {
          setCounter2((prevCount) => prevCount + 1);
          setColor2(randomColor());
        }}
      >
        {counter2} likes
      </button>
    </div>
  );
};

export default LikeButton;
