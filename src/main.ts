import { DisplayGif } from "./form";
import { getGif } from "./getGif";

export default async ({ req, res, log, error }: any) => {
  if (!('GIPHY_API_KEY' in process.env)) {
    return res.json({
        capybara: null,
        message: 'No GiPHY API key found.',
    });
  }

  if (req.method === 'GET') {
    let capyUrl = await getGif(process.env['GIPHY_API_KEY']);

    return res.send(<DisplayGif gifUrl={gifUrl} >, 200, {
      'Content-Type': 'text/html; charset=utf-8',
    });
  }

  return res.json({
    capybara: null,
    message: 'Method not allowed.',
  });
};