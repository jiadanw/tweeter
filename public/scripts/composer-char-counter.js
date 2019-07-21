

// alert("1");// --- our code goes here ---
$(document).ready(function () {
  // --- our code goes here ---
  $(".tweetForm").keyup(function () {
    let a = $(this).val();
    $(".counter").text(140 - a.length);

    if (a.length > 140) {
      $(".counter").css("color", "#D93600");

    } else {
      $(".counter").css("color", "#545149");
    }
  });
});
