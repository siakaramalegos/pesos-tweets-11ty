const dateFromWeirdTwitterDate = (string) => {
  return `${string.slice(8, 10)} ${string.slice(4, 7)} ${string.slice(26, 30)}`;
};

const renderTweet = ({ created_at, full_text, id_str }) => {
  return `
    <div class="tweet">
      <header><small>${dateFromWeirdTwitterDate(created_at)}</small></header>
      <div class="tweet-content">${full_text}</div>
      <footer>
        <a href="/tweet/${id_str}">Permalink</a>
        <a href="https://twitter.com/TheGreenGreek/status/${id_str}">Twitter</a>

      </footer>
    </div>
  `;
};

module.exports = {
  renderTweet,
};
