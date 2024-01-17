import { renderToReadableStream } from "react-dom/server";

function DisplayGif({ gifUrl }) {
    return <img src={gifUrl} alt="Random Gif" />;
}

export async function render(gifUrl){
    const stream = await renderToReadableStream(<DisplayGif gifUrl={gifUrl} />);
    return stream;
}