"use strict";

var background = {
  // 'gradient' , 'image' , 'slideShow'
  type: "slideShow",

  //'bg-color-one','bg-color-two','bg-color-three','bg-color-four'

  gradient: "bg-color-one",

  // choose ture to activate background image with the url image_url

  //  or let it to false to have gradient color
  slideShow: {
    slides: [
      { src: "../img/img-1.webp" },
      { src: "../img/img-2.webp" },
      { src: "../img/img-3.webp" },
      { src: "../img/img-4.webp" },
      { src: "../img/img-5.webp" },
      { src: "../img/img-6.webp" },
    ],
    overlay: "assets/css/overlays/06.png",
  },

  image: {
    image_url: "../img/img-1.webp",
  },

  particule: true,
};

/**************************
 **		countDwon      **
 **************************/

let counter = {
  // "counter-one", "counter-two","counter-three","counter-four"

  style: "counter-four",

  launchDate: {
    // OPTIONS:"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    Month: "January",

    //  DAY : INTEGER[ 1 - 31 ]

    Day: 1,

    // SET YEAR : INTEGER

    Year: 2027,
  },
};

/**************************
 **		Ajax Chimp       **
 **************************/

$("#subscribe_form").ajaxChimp({
  // Replace your mailchimp post url inside double quote "".

  url: "//novisdev.us15.list-manage.com/subscribe/post?u=202b79afea96f1d57561896f5&amp;id=02ba748be1",
});
