const dateFromWeirdTwitterDate = (string) => {
  return `${string.slice(8, 10)} ${string.slice(4, 7)} ${string.slice(26, 30)}`;
};

const renderTweet = ({ created_at, full_text, id_str, favorite_count, retweet_count, reply_count }) => {
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
      <div class="tweet-content">${full_text}</div>
      <footer>
        ${ reply_count ? `<div>
          <svg class="icon icon--message" role="img" aria-hidden="true" width="24" height="24">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-message"></use>
          </svg>
          ${reply_count}
        </div>` : ''}
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
