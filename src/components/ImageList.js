import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard'; 

const ImageList = props => {
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;

// const ImageList = ({ images }) => {
//     return (
//       <div>
//         {images.map(image => {
//           return <img src={image.urls.regular} />;
//         })}
//       </div>
//     );
//   };

//   export default ImageList;
