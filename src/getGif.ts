export async function getGif(apiKey){
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=capybara`);
    const data = await response.json();
    const gifUrl = data.data.image.fixed_height;
    return gifUrl
}