// JST.js — Final working version using jQuery
// JST.js — Final Project Interactive Script

"use strict";

$(function () {

  // ----------------------------------------
  // 1. Header animation
  // ----------------------------------------
  $("header h1").hide().slideDown(1000);


  // ----------------------------------------
  // 2. Hide sections initially
  // ----------------------------------------
  $("#javascript ul, #games ul").hide();
  $(".sbutton .dropdown").hide();


  // ----------------------------------------
  // 3. JAVASCRIPT heading toggle
  // ----------------------------------------
  $("#javascript h3").css("cursor", "pointer").on("click", function () {
    $("#javascript ul").slideToggle(400);

    // Red flash cue
    const $h3 = $(this);
    $h3.css({
      boxShadow: "0 0 10px 3px rgba(255,0,0,0.6)",
      transition: "box-shadow 0.4s ease"
    }).delay(500).queue(function (next) {
      $h3.css("box-shadow", "none"); next();
    });
  });


  // ----------------------------------------
  // 4. NOW LET'S PLAY GAMES toggle
  // ----------------------------------------
  $("#games h3").css("cursor", "pointer").on("click", function () {
    $("#games ul").slideToggle(400);

    // Red flash cue
    const $h3 = $(this);
    $h3.css({
      boxShadow: "0 0 10px 3px rgba(255,0,0,0.6)",
      transition: "box-shadow 0.4s ease"
    }).delay(500).queue(function (next) {
      $h3.css("box-shadow", "none"); next();
    });
  });


  // ----------------------------------------
  // 5. Image zoom for all normal figures
  // ----------------------------------------
  $("figure img").not("#neuman").hover(
    function () {
      $(this).css({
        transform: "scale(1.1)",
        transition: "transform 0.3s ease-in-out"
      });
    },
    function () {
      $(this).css({
        transform: "scale(1)",
        transition: "transform 0.3s ease-in-out"
      });
    }
  );


  // ----------------------------------------
  // 6. Button Time → show Math Games button
  // ----------------------------------------
  $(".sbutton h3").on("click", function () {

    const $dropdownSection = $(".sbutton .dropdown");
    $dropdownSection.stop(true, true).slideToggle(300);

    // flash red highlight on "Math Games" button
    const $btn = $(".dropdown__toggle");
    $btn.css({
      boxShadow: "0 0 12px 4px rgba(255, 0, 0, 0.6)",
      transition: "box-shadow 0.5s ease, background-color 0.5s ease",
      backgroundColor: "hsl(0, 50%, 50%)",
      color: "white"
    }).delay(800).queue(function (next) {
      $btn.css({
        boxShadow: "none",
        backgroundColor: "hsl(180, 50%, 50%)",
        color: "white"
      });
      next();
    });

  });


  // ----------------------------------------
  // 7. Dropdown toggle for Math Games
  // ----------------------------------------
  $(".dropdown__toggle").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    const $drawer = $(this).closest(".dropdown").find(".dropdown__drawer");

    if ($drawer.is(":visible")) {
      $drawer.slideUp(200);
    } else {
      $drawer.slideDown(200);
    }
  });

  // Close dropdown when clicking outside
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".dropdown").length) {
      $(".dropdown__drawer").slideUp(200);
    }
  });


  // ----------------------------------------
  // 8. Choose your 1st game → facts toggle
  // ----------------------------------------
  $(".exam1").on("click", function () {
    const $this = $(this);

    if ($this.data("showingFact")) {
      // Return to normal text
      $this.fadeOut(200, function () {
        $this.text("Choose your 1st game")
             .css("animation", "glowPulse 4s infinite")
             .fadeIn(300);
        $this.data("showingFact", false);
      });
      return;
    }

    const facts = [
      "JavaScript was created in 10 days.",
      "JS first appeared in Netscape Navigator.",
      "JavaScript is not Java.",
      "JS runs in browsers and servers (Node).",
      "JavaScript’s original name was Mocha!"
    ];

    const fact = facts[Math.floor(Math.random() * facts.length)];
    $this.fadeOut(200, function () {
      $this.text("Did you know? " + fact).fadeIn(300);
      $this.data("showingFact", true);
    });
  });


  // ----------------------------------------
  // 9. Tooltips for all interactive items
  // ----------------------------------------
  $(".sbutton h3").attr("title", "Click to activate the Math Games button");
  $(".dropdown__toggle").attr("title", "Click to open Math Games");
  $(".exam1").attr("title", "Click to see a random JavaScript fact");
  $("#games h3").attr("title", "Click to show or hide the game instructions");
  $("#javascript h3").attr("title", "Click to expand or hide JavaScript info");
  $("header h1").attr("title", "Click to roll up the header!");


  // ----------------------------------------
  // 10. Alfred Neuman wiggle + zoom + tilt
  // ----------------------------------------
  // SIMPLE TEST: does Alfred respond to hover at all?
$("#neuman").hover(
  function () {
    $(this)
      .css({
        transform: "scale(1.1) rotate(5deg)"
      })
      .stop(true, true)
      .animate({ "margin-left": "30px" }, 200)
      .animate({ "margin-left": "-30px" }, 200)
      .animate({ "margin-left": "0px" }, 200);
  },
  function () {
    $(this)
      .stop(true, true)
      .css({ transform: "scale(1) rotate(0deg)" })
      .animate({ "margin-left": "0px" }, 200);
  }
);
// ALBERT EINSTEIN wiggle + zoom + tilt
$("#einstein").hover(
  function () {
    $(this)
      .css({
        transform: "scale(1.1) rotate(-5deg)"
      })
      .stop(true, true)
      .animate({ "margin-left": "20px" }, 200)
      .animate({ "margin-left": "-20px" }, 200)
      .animate({ "margin-left": "0px" }, 200);
  },
  function () {
    $(this)
      .stop(true, true)
      .css("transform", "scale(1) rotate(0deg)")
      .animate({ "margin-left": "0px" }, 200);
  }
);



});  // END $(function())
