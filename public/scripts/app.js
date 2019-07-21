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
          <img  class="flag" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzQwNTZhMSI+PHBhdGggZD0iTTI4LjU1NDY5LDIxLjQwMjAyYy0zLjk1MjUzLDAuMDYxNzggLTcuMTA4ODEsMy4zMTIgLTcuMDU0NjksNy4yNjQ2NXY3MS42NjY2N3Y0M2MtMC4wMzY1NSwyLjU4NDU2IDEuMzIxMzYsNC45ODg1OCAzLjU1Mzc2LDYuMjkxNTNjMi4yMzI0LDEuMzAyOTUgNC45OTM0MiwxLjMwMjk1IDcuMjI1ODIsMGMyLjIzMjQsLTEuMzAyOTUgMy41OTAzMSwtMy43MDY5NyAzLjU1Mzc2LC02LjI5MTUzdi00M2g0OC40NzI5OGMyLjcxNjE3LDAgNS4xOTI0NywxLjUzMTc2IDYuNDEwODEsMy45NjEyNmwzLjIwNTQxLDYuNDEwODFjMS4yMTExNywyLjQyOTUgMy42OTQ2NCwzLjk2MTI2IDYuNDEwODEsMy45NjEyNmg0M2MzLjk1NiwwIDcuMTY2NjcsLTMuMjEwNjcgNy4xNjY2NywtNy4xNjY2N3YtNjQuNWMwLC0zLjk1NiAtMy4yMTA2NywtNy4xNjY2NyAtNy4xNjY2NywtNy4xNjY2N2gtMzQuMTM5NjVjLTIuNzE2MTcsMCAtNS4xOTI0NywtMS41MzE3NiAtNi40MTA4MSwtMy45NjEyNmwtMy4yMDU0MSwtNi40MTA4MWMtMS4yMTExNywtMi40Mjk1IC0zLjY5NDY0LC0zLjk2MTI2IC02LjQxMDgxLC0zLjk2MTI2aC02My4zOTQyMWMtMC40MDI0LC0wLjA2NzI2IC0wLjgwOTgsLTAuMTAwMDQgLTEuMjE3NzcsLTAuMDk3OTh6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=" style="height:20px">
          <img class="retweet" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTYiIGhlaWdodD0iMTYiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzQwNTZhMSI+PHBhdGggZD0iTTExOC4yNSw2OS44NzVsMjEuNSwtMjguNjcwMjVsMjEuNSwyOC42NzAyNXoiPjwvcGF0aD48cGF0aCBkPSJNMTM5Ljc1LDUwLjE3MDI1bDEwLjc1LDE0LjMyOTc1aC0yMS41bDEwLjc1LC0xNC4zMjk3NU0xMzkuNzUsMzIuMjVsLTMyLjI1LDQzaDY0LjVsLTMyLjI1LC00M3pNMTAuNzUsMTAyLjEyNWg0M2wtMjEuNSwyOC42NzAyNXoiPjwvcGF0aD48cGF0aCBkPSJNNDMsMTA3LjVsLTEwLjc1LDE0LjMyOTc1bC0xMC43NSwtMTQuMzI5NzVoMjEuNU02NC41LDk2Ljc1aC02NC41bDMyLjI1LDQzbDMyLjI1LC00M3oiPjwvcGF0aD48Zz48cGF0aCBkPSJNNjcuMTg3NSwxMzQuMzc1bDguMDYyNSwtMTAuNzVoNDNjOC44OTAyNSwwIDE2LjEyNSwtNy4yMzQ3NSAxNi4xMjUsLTE2LjEyNXYtNDguMzc1aDEwLjc1djQ4LjM3NWMwLDE0LjgyNDI1IC0xMi4wNTA3NSwyNi44NzUgLTI2Ljg3NSwyNi44NzV6Ij48L3BhdGg+PHBhdGggZD0iTTEzOS43NSw2NC41djQzdi00M00xNTAuNSw1My43NWgtMjEuNXY1My43NWMwLDUuOTM0IC00LjgxNiwxMC43NSAtMTAuNzUsMTAuNzVoLTQ1LjY4NzVsLTE2LjEyNSwyMS41aDYxLjgxMjVjMTcuNzgwNSwwIDMyLjI1LC0xNC40Njk1IDMyLjI1LC0zMi4yNXYtNTMuNzV6Ij48L3BhdGg+PC9nPjxnPjxwYXRoIGQ9Ik0yNi44NzUsMTEyLjg3NXYtNDguMzc1YzAsLTE0LjgyNDI1IDEyLjA1MDc1LC0yNi44NzUgMjYuODc1LC0yNi44NzVoNTEuMDYyNWwtOC4wNjI1LDEwLjc1aC00M2MtOC44OTAyNSwwIC0xNi4xMjUsNy4yMzQ3NSAtMTYuMTI1LDE2LjEyNXY0OC4zNzV6Ij48L3BhdGg+PHBhdGggZD0iTTMyLjI1LDY0LjV2NDN2LTQzTTExNS41NjI1LDMyLjI1aC02MS44MTI1Yy0xNy43ODA1LDAgLTMyLjI1LDE0LjQ2OTUgLTMyLjI1LDMyLjI1djUzLjc1aDIxLjV2LTUzLjc1YzAsLTUuOTM0IDQuODE2LC0xMC43NSAxMC43NSwtMTAuNzVoNDUuNjg3NWwxNi4xMjUsLTIxLjV6Ij48L3BhdGg+PC9nPjwvZz48L2c+PC9zdmc+" style="height:20px">
          <img class="heart" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjQiIGhlaWdodD0iNjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGc+PHBhdGggZD0iTTYxLjgxMjUsNDAuNzE1NjNjOS42NzUsMCAxOC4yNzUsNC4xNjU2MiAyNC4xODc1LDEwLjc1YzUuOTEyNSwtNi41ODQzNyAxNC41MTI1LC0xMC43NSAyNC4xODc1LC0xMC43NWMxNy44NzE4NywwIDMyLjI1LDE0LjEwOTM4IDMyLjI1LDMxLjU3ODEzYzAsOS45NDM3NSAtNC43MDMxMiwxOC42NzgxMiAtMTEuOTU5MzcsMjQuNTkwNjJ2MGwtNDQuNDc4MTMsMzQuNGwtNDMuNjcxODcsLTMzLjg2MjV2MGMtNy43OTM3NSwtNS43NzgxMyAtMTIuNzY1NjIsLTE0LjkxNTYzIC0xMi43NjU2MiwtMjUuMTI4MTJjMCwtMTcuNDY4NzUgMTQuMzc4MTMsLTMxLjU3ODEyIDMyLjI1LC0zMS41NzgxMnoiIGZpbGw9IiM0MDU2YTEiPjwvcGF0aD48cGF0aCBkPSJNODYsMTM1LjMxNTYzYy0wLjgwNjI1LDAgLTEuNzQ2ODgsLTAuMjY4NzUgLTIuNDE4NzUsLTAuODA2MjVsLTQzLjgwNjI1LC0zMy44NjI1Yy0wLjEzNDM3LC0wLjEzNDM3IC0wLjI2ODc1LC0wLjI2ODc1IC0wLjQwMzEyLC0wLjI2ODc1Yy04LjczNDM4LC02Ljg1MzEzIC0xMy44NDA2MywtMTcuMDY1NjIgLTEzLjg0MDYzLC0yOC4wODQzN2MwLC0xOS42MTg3NSAxNi4yNTkzNywtMzUuNjA5MzggMzYuMjgxMjUsLTM1LjYwOTM4YzkuMDAzMTIsMCAxNy42MDMxMywzLjIyNSAyNC4xODc1LDkuMTM3NWM2LjU4NDM4LC01Ljc3ODEzIDE1LjE4NDM4LC05LjEzNzUgMjQuMTg3NSwtOS4xMzc1YzIwLjAyMTg3LDAgMzYuMjgxMjUsMTUuOTkwNjMgMzYuMjgxMjUsMzUuNjA5MzhjMCwxMC43NSAtNC44Mzc1LDIwLjY5Mzc1IC0xMy4xNjg3NSwyNy41NDY4OGMtMC4xMzQzOCwwLjEzNDM3IC0wLjEzNDM4LDAuMTM0MzcgLTAuMjY4NzUsMC4yNjg3NWwtNDQuNjEyNSwzNC41MzQzOGMtMC42NzE4NywwLjQwMzEyIC0xLjYxMjUsMC42NzE4OCAtMi40MTg3NSwwLjY3MTg4ek00NS4xNSw5NC42bDQwLjg1LDMxLjcxMjVsNDEuOTI1LC0zMi41MTg3NWwwLjEzNDM3LC0wLjEzNDM4YzYuNTg0MzgsLTUuMjQwNjIgMTAuMzQ2ODgsLTEzLjAzNDM3IDEwLjM0Njg4LC0yMS4zNjU2MmMwLC0xNS4xODQzOCAtMTIuNjMxMjUsLTI3LjU0Njg3IC0yOC4yMTg3NSwtMjcuNTQ2ODdjLTguMDYyNSwwIC0xNS44NTYyNSwzLjQ5Mzc1IC0yMS4yMzEyNSw5LjQwNjI1Yy0xLjQ3ODEyLDEuNzQ2ODcgLTQuNDM0MzcsMS43NDY4NyAtNi4wNDY4NywwYy01LjM3NSwtNi4wNDY4NyAtMTMuMDM0MzcsLTkuNDA2MjUgLTIxLjIzMTI1LC05LjQwNjI1Yy0xNS41ODc1LDAgLTI4LjIxODc1LDEyLjM2MjUgLTI4LjIxODc1LDI3LjU0Njg4YzAsOC42IDQuMDMxMjUsMTYuNjYyNSAxMS4xNTMxMiwyMS45MDMxM2MwLjI2ODc1LDAuMTM0MzcgMC40MDMxMiwwLjI2ODc1IDAuNTM3NSwwLjQwMzEzeiIgZmlsbD0iIzQ1NGI1NCI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik0zOC44MzQzOCw3Ni4zMjVjLTIuMjg0MzgsMCAtNC4wMzEyNSwtMS43NDY4OCAtNC4wMzEyNSwtNC4wMzEyNWMwLC0xNC42NDY4OCAxMi4wOTM3NSwtMjYuNDcxODggMjcuMDA5MzgsLTI2LjQ3MTg4YzIuMjg0MzcsMCA0LjAzMTI1LDEuNzQ2ODcgNC4wMzEyNSw0LjAzMTI1YzAsMi4yODQzOCAtMS43NDY4OCw0LjAzMTI1IC00LjAzMTI1LDQuMDMxMjVjLTEwLjQ4MTI1LDAgLTE4Ljk0Njg3LDguMTk2ODggLTE4Ljk0Njg3LDE4LjQwOTM4YzAsMi4yODQzNyAtMS43NDY4OCw0LjAzMTI1IC00LjAzMTI1LDQuMDMxMjV6Ij48L3BhdGg+PC9nPjwvZz48L2c+PC9zdmc+" style="height:20px">
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


