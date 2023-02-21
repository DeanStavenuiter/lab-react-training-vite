import React from "react";

const CreditCard = (props) => {

  return (
    <div
      className="card"
      style={{
        background: `${props.bgColor}`,
        borderRadius: "3px",
        margin: "5px",
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        width: "250px",
        height: "100px",
        color: `${props.color}`
      }}
    >
      <div
        className="image"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "5px",
        }}
      >
        <img
          style={{ width: "50px" }}
          src={
            props.type === "Visa"
              ? "src/assets/images/visa.png"
              : "src/assets/images/master-card.svg"
          }
          alt="logo"
        ></img>
      </div>
      <span>・・・・ ・・・・ ・・・・{props.number.slice(12)}</span>
      <div className="exp-and-bank">
        <span>
          Expires {props.expirationMonth}/
          {String(props.expirationYear).replace("20", "")}{" "}
        </span>
        <span>{props.bank}</span>
      </div>
      <span>{props.owner}</span>
    </div>
  );
};

export default CreditCard;
