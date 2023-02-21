import Rating from "./Rating";

const DriverCard = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "blue",
          borderRadius: "3px",
          margin: "5px",
          padding: "15px",
          color: "white",
          width: "50vw",
        }}
      >
        <div className="image">
          <img
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
            }}
            src={props.img}
            alt="person"
          />
        </div>
        <div className="info" style={{textAlign: 'left'}}>
          <span>{props.name}</span>
          <Rating>{props.rating}</Rating>
          <span>
            {props.car.model} {props.car.licensePlate}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
