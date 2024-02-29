import { renderToReadableStream } from "react-dom/server";

const GIPHY_API = "https://api.giphy.com/v1/gifs/random";

export async function fetchGif(tag: string) {
  const response = await fetch(
    `${GIPHY_API}?api_key=${process.env.GIPHY_API_KEY}&tag=${tag}`
  );
  const { data } = (await response.json()) as any;
  return data.images.fixed_height.url;
}

export default async function handler({ req, res, log, error }: any) {
  if (!process.env.GIPHY_API_KEY) {
    throw new Error("GIPHY_API_KEY is not set.");
  }

  await Bun.sleep(1000);

  if (req.method !== "GET") {
    return res.json(
      {
        message: "Method not allowed.",
      },
      405
    );
  }

  const gifUrl = await fetchGif("capybara");

  const html = await renderToReadableStream(
    <div>
      <img src={gifUrl} alt="Random capybara" />
      <h1>Capybara of the day!</h1>
    </div>
  );

  return res.send(html, 200, {
    "Content-Type": "text/html; charset=utf-8",
  });
}
