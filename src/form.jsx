import { renderToReadableStream } from "react-dom/server";

function DisplayGif({ gifUrl }) {
    return (
        <img src={gifUrl} alt="Random Gif" />
    );
}

export async function render(gifUrl){
    const stream = await renderToReadableStream(
    <div>
        <DisplayGif gifUrl={gifUrl} />
        <h2>Capybara of the day!</h2>
    </div>);
    return stream;
}