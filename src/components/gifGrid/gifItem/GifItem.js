import PropTypes from 'prop-types';
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

GifItem.propTypes = {
    url : PropTypes.string.isRequired,
};

export default GifItem;
