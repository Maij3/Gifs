import { getGifs } from "../services";

describe("Pruebas en GifItem", () => {
  it("Debe de Retornar un Arreglo de Gifs", async () => {
    const data = await getGifs(
      "https://api.giphy.com/v1/gifs/search?api_key=Lx8iDcsb1vqBgRi8ZfQBybPZnqGbbfYq&q=Sexo"
    );
    expect(data.length).toBeGreaterThan(0);
    expect(data[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
