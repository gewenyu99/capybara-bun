export function buildTemplate({ gifUrl }) {
    const template = `
    return <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Email Contact Form</title>
        <link rel="stylesheet" href="https://unpkg.com/@appwrite.io/pink" />
        <link rel="stylesheet" href="https://unpkg.com/@appwrite.io/pink-icons" />
      </head>
      <body>
        <main class="main-content">
        ${DisplayGif({gifUrl})}
        </main>
      </body>
    </html>
    `
    return;
}

function DisplayGif({ gifUrl }) {
    return <img src={gifUrl} alt="Random Gif" />;
}