import React, { useState } from "react";
import { Box, Heading, Flex } from "@chakra-ui/react";
import { AddCategory , GifGrid } from "./components";

const GifExpertApp = () => {
  const [categorias, setCategorias] = useState([]);
  const [images, setImages] = useState([]);
  const [categoria, setCategoria] = useState("");
  const onAddCategory = (newCategory) => {
    if (categorias.includes(newCategory)) return;
    setCategorias([...categorias, newCategory]);
  };

  return (
    <Box>
      <Heading as="h1" margin="5px 5px 15px 0px" noOfLines={1}>
        GifExpertApp
      </Heading>
      <hr />
      <AddCategory
        onNewCategory={(event) => onAddCategory(event)}
        categoria={categoria}
        setCategoria={setCategoria}
        setImages={setImages}
      />
      <Box paddingLeft="10px" marginTop="10px">
        {categorias.map((item, index) => (
          <GifGrid
            images={images}
            setImages={setImages}
            categoria={item}
            key={index}
          />
        ))}
      </Box>
    </Box>
  );
};

export default GifExpertApp;
