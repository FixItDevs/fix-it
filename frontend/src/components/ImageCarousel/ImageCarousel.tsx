import React, { useState } from "react";
import { Image } from "../../types/post.types";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
interface ImageCarouselProps {
  images: Image[]
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [showNextImage, setShowNextImage] = useState<boolean>(false);

  const toggleNextImage = () => {
    setShowNextImage((prevShowNextImage) => !prevShowNextImage);
  };

  return (
    <div className="image-carousel">
      <div className="carousel-images">
        {showNextImage ? (
          <div className="slide active">
            <img src={images[1].url} alt={images[1].caption} style={{ width: "200px" }}/>
          </div>
        ) : (
          <div className="slide active">
            <img src={images[0].url} alt={images[0].caption} style={{ width: "200px" }}/>
          </div>
        )}
      </div>
      <NavigateNextIcon className="next-btn" onClick={toggleNextImage}/>
    </div>
  );
};

export default ImageCarousel;
