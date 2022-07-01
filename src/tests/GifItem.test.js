import React from "react";
import { render, screen } from "@testing-library/react";
import GifItem from "../components/gifGrid/gifItem/GifItem";
import {GridItem} from "@chakra-ui/react";
describe("Pruebas en <GifItem />", () => {
  const url = "https://jaime.com/";
  it("Debe Hacer Match con el Snapshot", () => {
    const { container } = render(<GifItem url={url} />);
    expect(container).toMatchSnapshot();
  });
  it("Debe Mostrar el Url Indicicado", () => {
    render(<GifItem url={url} />);
    expect(screen.getByRole("img").src).toBe(url);
  });
/*  it('Debe de Mostrar el Titulo en el Componente', () => {*/
	/*render( <GifItem url={url} /> );*/
	/*expect( screen.getByText( title ) ).toBeTruthy();*/
  /*})*/
});
