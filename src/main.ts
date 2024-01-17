export default async ({ req, res, log, error }: any) => {
  if (!('GIPHY_API_KEY' in process.env)) {
    return res.json({
        capybara: null,
        message: 'No GiPHY API key found.',
    });
  }

  if (req.method === 'GET') {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${process.env["GIPHY_API_KEY"]}&tag=capybara`);
        const data = await response.json();
        log(JSON.stringify(data));
        const gifUrl = data.data.embed_url;
        return res.json({
            capybara: gifUrl,
            message: 'Capybara of the day!'
        });
    } catch (err) {
        error(JSON.stringify(err));
        return res.json({
            capybara: null,
            message: 'Could not find any Cappybaras :(',
        });
    }
  } else {
    return res.json({
      capybara: null,
      message: 'Method not allowed.',
    });
  }

};