

  // alert("1");// --- our code goes here ---
  $(document).ready(function() {
    // --- our code goes here ---


    // $(".tweetForm").click(function(){
    //   alert("The text has been changed.");
    // });

    

    $(".tweetForm").keyup(function(){
      // console.log("The text has been changed.");
      let a = $(this).val();
      $(".counter").text(140 - a.length);
  
      if (a.length > 140) {
        // $(".counter").style.color = "#D93600"
        $(".counter").css("color", "#D93600");
        
      } else {
        $(".counter").css("color", "#545149");
      }
    });

    // $(".tweetBotton").click( function(){
    //   let a = $(".tweetForm").val();
    //   if (a.length > 140) {
    //     console.log(a.length)
    //     alert("error:too much information");
    //   } else if (!a) {
    //     alert("error:empty")
    //   }
    // })
    
    // $(".tweetForm").on('blur', function() {
    //   console.log("this"); //The this keyword is a reference to the button
    // });
    // $(".tweetForm").blur( function() {
    //   console.log("blur"); //The this keyword is a reference to the button
    // });
    // $(".tweetForm").keypress( function() {
    //   console.log("blur"); //The this keyword is a reference to the button
    // });
    // $(".tweetBotton").keydown('click', function() {
    //   console.log(this); //The this keyword is a reference to the button
    // });
  

  });
