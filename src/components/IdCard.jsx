const IdCard = (props) => {

  return (
    <div className="all-info">
      <div className="image">
        <img src={props.picture} alt="person" />
      </div>
      <div className="info">
        <p>firstName:{props.firstName}</p>
        <p>last name:{props.lastName}</p>
        <p>gender:{props.gender}</p>
        <p>height :{props.height}</p>
        <p>birth :{props.birth.toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default IdCard;
