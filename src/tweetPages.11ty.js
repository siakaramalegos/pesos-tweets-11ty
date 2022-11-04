const { renderTweet } = require("./_11ty/helpers");

class Test {
  // or `async data() {`
  // or `get data() {`
  data() {
    return {
      layout: "layouts/index.njk",
      pagination: {
        data: "tweets",
        size: 1,
        alias: "tweet",
      },
      permalink: (data) => `/tweet/${data.tweet.tweet.id_str}/`,
    };
  }

  render(data) {
    return renderTweet(data.tweet.tweet);
  }
}

module.exports = Test;
