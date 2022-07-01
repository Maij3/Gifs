export const url = 'https://api.giphy.com/v1/gifs/search?api_key=Lx8iDcsb1vqBgRi8ZfQBybPZnqGbbfYq&q=';
export const getGifs = async (url) => {
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((item) => ({
    id: item.id,
    title: item.title,
    url: item.images.downsized_medium.url,
  }));

  return gifs;
};
