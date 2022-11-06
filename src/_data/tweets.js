const originalTweetData = require("../_cache/tweets.js");
const MY_SCREEN_NAME = "TheGreenGreek";

function filterRetweetsAndNotOwnReplies(tweets) {
  return tweets.filter((tweet) => {
    const isNotReply = !tweet["tweet"]["in_reply_to_status_id"];
    const isReplyToSelf =
      tweet["tweet"]["in_reply_to_screen_name"] === MY_SCREEN_NAME;
    const isNotRetweet = tweet.tweet.full_text.slice(0, 3) !== "RT ";

    return (isNotReply || isReplyToSelf) && isNotRetweet;
  });
}

function embedSelfReplies(tweets) {
  const firstPosts = tweets.filter(
    (tweet) => !tweet["tweet"]["in_reply_to_screen_name"]
  );

  tweets.forEach(({ tweet }) => {
    if (tweet.in_reply_to_status_id_str) {
      const inReplyToTweet = firstPosts.find(
        (element) => element.tweet.id_str === tweet.in_reply_to_status_id_str
      );
      if (inReplyToTweet) {
        if (inReplyToTweet.tweet.replies) {
          inReplyToTweet.tweet.replies = [
            ...inReplyToTweet.tweet.replies,
            tweet,
          ];
        } else {
          inReplyToTweet.tweet.replies = [tweet];
        }
      }
    }
  });

  return firstPosts;
}

const filteredTweets = filterRetweetsAndNotOwnReplies(originalTweetData);
const embeddedReplies = embedSelfReplies(filteredTweets);

// Filter out replies to other people
module.exports = embeddedReplies;
