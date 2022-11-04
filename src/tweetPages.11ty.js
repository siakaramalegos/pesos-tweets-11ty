class Test {
  // or `async data() {`
  // or `get data() {`
  data() {
    return {
      layout: "layouts/index.njk",
      pagination: {
        data: "tweets",
        size: 1,
        alias: "tweet"
      },
      permalink: data => `/tweet/${data.tweet.tweet.id_str}/`
    };
  }

  render(data) {
    return `
       <p>${data.tweet.tweet.full_text}</p>`;
  }
}

module.exports = Test;
