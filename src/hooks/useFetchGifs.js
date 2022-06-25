import React, { useState, useEffect } from "react";
import { getGifs, url } from "../services";

const useFetchGifs = ({ categoria, images, setImages }) => {

  const [isLoading , setIsLoading] = useState(true);
  const urlCategoria = url + categoria;

  const getImages = async () => {
    const newImages = await getGifs(urlCategoria);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    GifsImage: images,
    isLoading
  };
};

export default useFetchGifs;
