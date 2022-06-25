import PropTypes from "prop-types";
import { Input } from "@chakra-ui/react";
const AddCategory = ({ onNewCategory, categoria, setCategoria, setImages }) => {
  const onInputChange = (e) => {
    setCategoria(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (categoria.trim().length <= 1) return; //si no cumple la condicion sale de la funcion.
    onNewCategory(categoria);
    setCategoria("");
    setImages([])
  };
  return (
    <form onSubmit={onSubmit}>
      <Input
        placeholder="Name"
        marginTop="20px"
        onChange={onInputChange}
        value={categoria}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};

export default AddCategory;
