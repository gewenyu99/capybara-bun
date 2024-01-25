import { render } from "./form";
import { getGif } from "./getGif";
import { setTimeout } from "timers/promises";

export default async ({ req, res, log, error }: any) => {
  if (!('GIPHY_API_KEY' in process.env)) {
    return res.json({
        capybara: null,
        message: 'No GiPHY API key found.',
    });
  }

  await setTimeout(10000);
  
  if (req.method === 'GET') {
    let capyUrl = await getGif(process.env['GIPHY_API_KEY']);
    const html = await render(capyUrl);

    return res.send(html, 200, {
      'Content-Type': 'text/html; charset=utf-8',
    });
  }

  return res.json({
    capybara: null,
    message: 'Method not allowed.',
  });
};
