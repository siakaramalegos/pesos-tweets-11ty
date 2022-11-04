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
      eleventyComputed: data => {
        return {page: data.page}
      }
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
      <ol class="nav-pagination">
        ${data.pagination.pages
          .map(function (item, index) {
            const currentPage = data.page.url == data.pagination.hrefs[index]
            return `
              <li>
                <a href="${data.pagination.hrefs[index]}" ${currentPage ? 'aria-current="page" class="active"' : "" }>Page ${index + 1}</a>
              </li>`;
          })
          .join("")}
      </ol>`;
  }
}

module.exports = Tweet;
