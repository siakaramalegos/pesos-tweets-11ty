# PESOS Twitter Archive

Inspire by Zach Leatherman's ["I’M TAKING OWNERSHIP OF MY TWEETS"](https://www.zachleat.com/web/own-my-tweets/) blog post and ["OWN YOUR CONTENT ON SOCIAL MEDIA USING THE INDIEWEB"](https://www.zachleat.com/web/own-your-content/) talk, I'm attempting to create an MVP of a Twitter archive that you can fork and use for yourself just to get started.

Currently, it can take a downloaded Twitter archive and create pages for each Tweet plus a paginated list of them using Eleventy, the static site generator. In the future, I want to add the ability to pull in newer data without having to redownload my data archive. I also need to figure out whether to pull this from Mastodon instead.

If you're familiar with the Indie Web, POSSE, or publish own site syndicate elsewhere, is a fundamental concept. The idea of creating my own way to publish tweet-like notes seemed a bit much, so I'm opting for PESOS for this content, or publish elsewhere syndicate own site. It's a bit of a middle ground. I might change this in the future.

## Getting started

Fork this repo, clone your fork, and cd into the directory. Run `npm install` to install the dependencies.

For the next bit, you'll need to download your Twitter data. Go to [twitter.com/settings/download_your_data](https://twitter.com/settings/download_your_data) to begin a download. It might take a few days. Once you finally get the zip file, unzip it and grab the **/data/tweets.js** file. Put it in the **/src/_cache/** folder to replace the **tweets.js** file currently in there. Take a look at the first line of the file and replace the stuff to the left of the equal sign with `module.exports =`. If your file is huge, you may want to experiment with a smaller subset of that file first.

Now, go to **/src/_data/tweets.js** and replace "TheGreenGreek" with your Twitter handle. This file imports the cache tweets file and filters out replies to other people and retweets. You can play with that later if you want cool data analysis like Zach does on [his archive](https://www.zachleat.com/twitter/). This repo is only an MVP.

## Privacy

You probably don't want a public copy of your Twitter data file out on the interwebs, so make your repo private or figure out a way to only store it where you deploy. It can contain stuff you might not want shared. I looked through my sample data to make sure it wasn't too bad just so I could make a public repo for folks to start with.

## Ongoing development

This is a really rough MVP at the moment. I plan on attempting to pull in images and modify links to real ones not obscured by Twitter. And of course making it look cool. Feel free to follow this for updates or take what it currently is and run with it for yourself.

## License

MIT

I make no warranties on this code. Do what you like with it. The sample Twitter data is a sample of my real data so please replace it before publishing a version of this.
