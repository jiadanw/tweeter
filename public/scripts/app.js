/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// Test / driver code (temporary). Eventually will get this from the server.
$(document).ready(function () {
  $(".container0").hide();
  const createTweetElement = function (tweet) {
    let $tweet = $('<article>').addClass('tweet');
    let $userinput = $('<div>').text(tweet.content.text).html();

    $tweet.html(`
            <div class="container1">
            <div class="tweet-header">
            <img class="avatar" src=${tweet.user.avatars} style="width: 35px">
            <h6 class="tweet-username">${tweet.user.name}</h6>
            <div class="tweet-handle">${tweet.user.handle}</div>
            </div>
            <h6 class="FirstT">${$userinput}
          </h6>
          <div class="footer">
          <div class="line"></div>
          <div class="tweet-date">${moment(new Date(tweet.created_at)).fromNow()}</div>
          <span id="icons">
          <img  class="flag" src="images/flag.png" style="height:20px">
          <img  class="retweet" src="images/retweet.png" style="height:20px">
          <img  class="heart" src="images/heart.png" style="height:20px">       
             </span>
          </div>
          </div>
          `)
    return $tweet;
  }

  const renderTweets = function (tweets) {
    tweets.forEach((tweet) => {
      const $tweet = createTweetElement(tweet);
      console.log($tweet)
      $('#tweets-container').prepend($tweet);
    })
  }


  const $form = $('#new-tweet');
  $form.on('submit', function (event) {
    event.preventDefault()
  })

  const loadTweets = function () {

    $.ajax(' /tweets', { method: 'GET' })
      .then(renderTweets);
  }

  loadTweets();

  const postTweets = function () {

    let a = $(".tweetForm").val().length;
    if (a > 140 || a === 0) {
      $(".container0").show();
      $('.container0').fadeOut(3000);
    } else {
      $.post('/tweets', $('#new-tweet').serialize(), (tweet) => {
        $('#tweets-container').empty();
        $(".container0").hide();
        loadTweets();
      })
    }

  }
  $('.tweetBotton').click(postTweets)

  $('.new-tweet').hide();
  $('.double-arrow').click(() => {
    $('.new-tweet').slideToggle();
  })
});


