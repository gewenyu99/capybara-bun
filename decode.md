---
title: Displaying random Capybaras with Appwrite Functions and Bun
date: 2022-04-01
files: ['src/main.tsx', 'package.json', 'test/capy.test.ts']
---

Appwrite Functions + Bun can be a fun combination to build simple websites.
This Appwrite Function [displays a random capybara](https://65a6fc2c08488a5e7b0d.appwrite.global/), built with Bun.

If you're reading this on Decode, [visit the repo on GitHub](https://github.com/gewenyu99/capybara-bun).

{% step file="package.json" lines="11-13" %}
## Dependencies
Appwrite Functions use `package.json` to install dependencies needed. In this case, React to render JSX and node-appwrite to interact with appwrite.
{% /step %}

{% step file="src/main.tsx" lines="1-58" %}
## The function
The function is written as a `.tsx` file. Bun both natively parses JSX and TS without the need of a transpiler.
{% /step %}

{% step file="src/main.tsx" lines="3-15" %}
The style of the function is defined right at the top of the file because I'm chill like a Capybara.
{% /step %}

{% step file="src/main.tsx" lines="19-25" %}
The `fetchGif` function uses Bun's natively implemented `fetch()` method to get a preview URL from GIPHY.
This random GIF preview is height fixed.
{% /step %}

{% step file="src/main.tsx" lines="27" %}
The `export default async function handler({ req, res, log, error }: any)` method marks the entry point for Appwrite Function's handlers.
{% /step %}

{% step file="src/main.tsx" lines="45-53" %}
The Bun function returns a webpage using `renderToReadableStream` to parse JSX.

The templates in the GIF's URL from `fetchGif` and a image preview. 
{% /step %}

{% step file="src/main.tsx" lines="55-57" %}
The readable stream is then returned as a response object, which Appwrite Functions will rethrow as a response to the viewer.
{% /step %}

{% step file="test/capy.test.ts" lines="4-14" %}
## Testing with Bun
Bun comes with its own test runner. We use this test running to run some sanity checks during the build phase of the function.
If these tests fail, the deployment is cancelled.
{% /step %}

{% step file="test/capy.test.ts" lines="5-8" %}
The first test checks if an API key is exported in the configs of the Appwrite Function.
{% /step %}

{% step file="test/capy.test.ts" lines="5-8" %}
The second test checks if the getGifs utility function returns a valid URL.
{% /step %}
