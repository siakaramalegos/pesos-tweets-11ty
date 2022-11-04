class Tweet {
  // or `async data() {`
  // or `get data() {`
  data() {
    return {
      layout: "layouts/index.njk",
      pagination: {
        data: "tweets",
        size: 10
      },
    };
  }

  render(data) {
    return `
      <ol>
        ${data.pagination.items.map(function(item) {
            return `<li>${item["tweet"]["full_text"]} <a href="/tweet/${item.tweet.id_str}">tweet page</a></li>`;
          }).join("")
        }
      </ol>
      <ol>
        ${data.pagination.pages.map(function(item, index) {
          return `<li><a href="${data.pagination.hrefs[index]}">Page ${index + 1}</a></li>`;
        }).join("")}
      </ol>`;
  }
}

module.exports = Tweet;
