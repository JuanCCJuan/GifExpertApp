export const getGifs = async(search) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=YNx2aUzu8JSYT85bb8YAxkHLtiLMKV18&q=${ search }&limit=5`;
    const response = await fetch(url);
    const { data } = await response.json();

    const dataGifs = data.map(
        gif => ({
            id: gif.id, 
            url: gif.images.downsized_medium.url, 
            title: gif.title
        })
    );

    // console.log(dataGifs);

    return dataGifs;
}