const dateFromWeirdTwitterDate = (string) => {
  return `${string.slice(8, 10)} ${string.slice(4, 7)} ${string.slice(26, 30)}`;
};

const replaceLinks = (full_text, entities) => {
  let text = full_text;

  // Replace links
  entities.urls.forEach((url) => {
    text = text.replace(
      url.url,
      `<a href="${url.expanded_url}">${url.display_url}</a>`
    );
  });

  // Replace images
  // TODO: point to images in archive download instead
  if (entities.media) {
    entities.media.forEach((medium) => {
      text = text.replace(medium.url, `<img src="${medium.media_url_https}">`);
    });
  }

  // Replace newline chars with breaks
  text = text.replace(/\n/g, "<br>");
  console.log({ text });
  return text;
};

const renderTweet = ({
  created_at,
  full_text,
  id_str,
  favorite_count,
  retweet_count,
  reply_count,
  entities,
}) => {
  return `
    <div class="tweet">
      <header>
        <small>${dateFromWeirdTwitterDate(created_at)}</small>
        <div>
          <a href="/tweet/${id_str}">Link</a>
          <a href="https://twitter.com/TheGreenGreek/status/${id_str}">
            Twitter
          </a>
        </div>
      </header>
      <div class="tweet-content">${replaceLinks(full_text, entities)}</div>
      <footer>
        ${
          reply_count
            ? `<div>
          <svg class="icon icon--message" role="img" aria-hidden="true" width="24" height="24">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-message"></use>
          </svg>
          ${reply_count}
        </div>`
            : ""
        }
        <div>
          <svg class="icon icon--repost" role="img" aria-hidden="true" width="24" height="24">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-repost"></use>
          </svg>
          ${retweet_count}
        </div>
        <div>
          <svg class="icon icon--heart" role="img" aria-hidden="true" width="24" height="24">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-heart"></use>
          </svg>
          ${favorite_count}
        </div>
      </footer>
    </div>
  `;
};

module.exports = {
  renderTweet,
};
