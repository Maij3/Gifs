import GifItem from "../gifGrid/gifItem/GifItem";
import useFetchGifs from "../../hooks/useFetchGifs";
import { CircularProgress, Flex} from "@chakra-ui/react";

const GifGrid = ({ categoria, images, setImages }) => {
  const { GifsImage, isLoading } = useFetchGifs({
    categoria,
    images,
    setImages,
  });

  return (
    <Flex wrap='wrap'>
      {isLoading && <CircularProgress display='block' m='auto' isIndeterminate color="green.300" />}
      {GifsImage.map((img, index) => (
        <GifItem {...img} key={index} />
      ))}
    </Flex>
  );

  //return GifsImage.map((img, index) => <GifItem {...img} key={index} />);
};

export default GifGrid;
