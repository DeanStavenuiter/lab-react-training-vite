import { useState } from "react"

const Carousel = (props) => {

    const [currentImage, setCurrentImage] = useState(0);

    const handleRightClick = () => {
        if (currentImage === props.images.length - 1) {
            setCurrentImage(0);
          } else {
            setCurrentImage(currentImage + 1);
          }
    }

    const handleLeftClick = () => {
        if (currentImage === 0) {
            setCurrentImage(props.images.length - 1);
          } else {
            setCurrentImage(currentImage - 1);
          }
    }

  return (
    <div>
        <img src={props.images[currentImage]} alt="portrait" />
        <button onClick={handleLeftClick}> left </button>
        <button onClick={handleRightClick}> right </button>
    </div>
  )
}

export default Carousel