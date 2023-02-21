const BoxColor = (props) => {

  return (
    <div>
        <div className="box-color" style={{background: `rgb(${props.r},${props.g},${props.b})`}} >
            rgb({props.r},{props.g},{props.b})
        </div>
    </div>
  )
}

export default BoxColor