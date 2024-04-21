import React, { useEffect, useState } from "react";
import ImgCard from "./imgcard";

function App() {
  const [images, setImages] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [term, setTerm] = useState("");
  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=43418878-f40eb271e4d886f86148b7f9b&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsloading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);
  return (
    <>
      <div className="w-screen flex items-center justify-center h-40 bg-rose-600 fixed inset-0 z-50">
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search..."
          className="w-1/4 outline-none border border-r-0 border-slate-300 h-10 p-4 bg-white rounded-lg rounded-r-none"
          onChange={(e) => setTerm(e.target.value)}
        />
        <i className="fa-search fa border border-l-0 border-slate-300 h-10 leading-10 pr-4 bg-white rounded-lg rounded-l-none dark:text-white"></i>
      </div>
      {!isloading && images.length === 0 && (
        <h1 className="text-center text-4xl mt-44">No Result Found :(</h1>
      )}
      {isloading ? (
        <h1 className="text-center text-2xl mt-44 dark:text-white">
          Loading...
        </h1>
      ) : (
        <main className="mt-44 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-10 dark:text-white">
          {images?.map((image) => (
            <ImgCard key={image.id} images={image} />
          ))}
        </main>
      )}
    </>
  );
}

export default App;
