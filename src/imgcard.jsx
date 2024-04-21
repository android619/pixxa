import React from "react";
function ImgCard({ images }) {
  return (
    <>
      <div className="w-full  bg-red-700 dark:text-white">
        <a href={images.largeImageURL} target="new">
          <img
            src={images.largeImageURL}
            alt={images.name}
            className="w-full h-auto"
          />
        </a>
        <p className="m-4 text-lg dark:text-white">
          image by: <strong>{images.user}</strong>
        </p>
        <p className="m-4  dark:text-white">
          Tag: <strong>{images.tags}</strong>
        </p>
        <p className="m-4  dark:text-white">
          Resolution : <strong>{images.imageWidth}</strong> X{" "}
          <strong>{images.imageHeight}</strong>
        </p>
      </div>
    </>
  );
}

export default ImgCard;
