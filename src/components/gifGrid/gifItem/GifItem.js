import { Box } from "@chakra-ui/react";
import './GifItem.css'
const GifItem = ({ url }) => {
  return (
    <Box width="33.333%" display='flex' alignItems='center' mt='20px'>
      <img
        className='flex-item'
        src={url}
        alt=""
      />
    </Box>
  );
};

export default GifItem;
