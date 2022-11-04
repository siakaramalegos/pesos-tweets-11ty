const originalTweetData = require("../_cache/tweets.js");
const MY_SCREEN_NAME = "TheGreenGreek";

// Filter out replies to other people
module.exports = originalTweetData.filter((tweet) => {
  const isNotReply = !tweet["tweet"]["in_reply_to_screen_name"];
  const isReplyToSelf =
    tweet["tweet"]["in_reply_to_screen_name"] === MY_SCREEN_NAME;
  const isNotRetweet = tweet.tweet.full_text.slice(0, 3) !== "RT ";

  return (isNotReply || isReplyToSelf) && isNotRetweet;
});
