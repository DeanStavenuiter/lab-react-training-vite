import { useState } from "react"

const ClickablePicture = (props) => {

    const [image, setImage] = useState(props.img)

 const toggleImage = () => {
    if (image === props.img) {
        setImage(props.imgClicked)
    } else {
        setImage(props.img)
    }
}

  return (
    <div>
        <img onClick={toggleImage} src={image} alt="person" />
    </div>
  )
}

export default ClickablePicture