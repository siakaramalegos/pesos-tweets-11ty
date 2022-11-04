const { renderTweet } = require("./_11ty/helpers");

// const {rende}
class Tweet {
  // or `async data() {`
  // or `get data() {`
  data() {
    return {
      layout: "layouts/index.njk",
      pagination: {
        data: "tweets",
        size: 10,
      },
    };
  }

  render(data) {
    return `
      <div class="tweet-list">
        ${data.pagination.items
          .map(function (item) {
            return renderTweet(item.tweet);
          })
          .join("")}
      </div>
      <ol>
        ${data.pagination.pages
          .map(function (item, index) {
            return `<li><a href="${
              data.pagination.hrefs[index]
            }">Page ${index + 1}</a></li>`;
          })
          .join("")}
      </ol>`;
  }
}

module.exports = Tweet;
