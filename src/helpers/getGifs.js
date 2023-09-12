export const getGifs = async(category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=ROCPg1RNQvpFZD0tAkPTtQJTxUeVZNIX`;
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();
    const gifs = data.map(
          ({id,title,images})=>{
              return {
                  id,title,
                  url: images?.downsized.url
              }
          }
    )
return gifs;
}
