export default async ({ req, res, log, error }: any) => {
  if (!('GIPHY_API_KEY' in Bun.env)) {
    res.json({
        capybara: null,
        message: 'No GiPHY API key found.',
    });
  }

  if (req.method === 'GET') {
    try {
        const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=${Bun.env["GIPHY_API_KEY"]}&tag=capybara');
        const data = await response.json();
        const gifUrl = data.data.image_original_url;
        res.setHeader('Content-Type', 'text/plain');
        res.json({
            capybara: gifUrl,
            message: 'Capybara of the day!'
        });
    } catch (err) {
        error(err);
        res.json({
            capybara: null,
            message: 'Could not find any Cappybaras :(',
        });
    }
  } else {
    res.json({
      capybara: null,
      message: 'Method not allowed.',
    });
  }

};