
/******************************
******** Table of content *****
*******************************

1- loader 
2- Background
3- Counter
4- Subscribe


 ******************************
  **      1- loader          **
 *****************************/

$(window).on('load', function() { 
    
        $("#loader").fadeOut("slow");
        $("#preloader").delay(500).fadeOut("slow");
       
      });

/******************************
  **     2- background       **
 *****************************/
if(background.particle == false){
  $('#particles-js').css('display','none');
 }
if(background.type == 'gradient'){

 $('#background-template').attr('class',background.gradient);
 $('#filter').css('display','none');
 }
  else if(background.type == 'image'){
  $('#background-template').attr('class','bg-img');
  $('#background-template').append("<img src="+background.image.image_url+" alt='background image'>");
  $('#filter').css('display','block');

  }
  else if (background.type=='slideShow'){
    $('#background-template').attr('class','');
    $('body').vegas({
      overlay: false,
      transition: 'fade', 
      transitionDuration: 5000,
      delay: 15000,
      animation: 'random',
      animationDuration: 25000,
      slides:background.slideShow.slides,

      overlay:background.slideShow.overlay
    });
}else{
  console.log('background type is empty');
  
}

/******************************
  **     3-  Counter         **
 *****************************/


  var M = counter.launchDate.Month;
  var D = counter.launchDate.Day;
  var Y = counter.launchDate.Year;

  var target_date = new Date(M +','+ D +','+ Y).getTime();
  var ref_date = new Date().getTime();

  var  time_todate = (target_date - ref_date) / 1000;
  var  days_number = parseInt(time_todate / 86400);

  var days, hours, minutes, seconds;
   
  var countdownDays = $(".days");
  var countdownHours = $(".hours");
  var countdownMinutes = $(".minutes");
  var countdownSeconds = $(".seconds");

  setInterval(function () {
   
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;

    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;

    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);

    seconds = seconds < 0 ? 0 : seconds;
    minutes = minutes < 0 ? 0 : minutes;
    hours   = hours < 0 ? 0 : hours;
    days    = days < 0 ? 0 : days;
    

    countdownDays.text(days.toString().length >1 ? days : '0'+days) ;
    countdownHours.text(hours.toString().length >1 ? hours : '0'+hours) ;
    countdownMinutes.text(minutes.toString().length >1 ? minutes : '0' + minutes);
    countdownSeconds.text(seconds.toString().length >1 ? seconds : '0'+ seconds);
        


        /********************************************
         **      counter one & four animation      **
         ********************************************/
        var top = $('.time-content').height();
        
        

       
       $('#counter').find('.anim').css({  
                                          height       : top*2+'px' ,
                                          width        : top*2+'px' ,
                                          borderRadius : '40%'
                                       });

       $('#counter').find('.anim-2').css({  
                                          height       : top*2+'px' ,
                                          width        : top*2+'px' ,
                                          borderRadius : '40%'
                                       });

       var seconds_anim   = seconds*(top/60);
       var minutes_anim   = minutes*(top/60);
       var hours_anim     = hours*(top/60);
       var days_anim      = days>365 ? days*(top/days_number) : days*(top/365);

       var seconds_anim_2 = seconds*(top/60)-top*1.8;
       var minutes_anim_2 = minutes*(top/60)-top*1.8;
       var hours_anim_2   = hours*(top/60)-top*1.8;
       var days_anim_2    = days>365 ? days*(top/days_number)-top*1.8 : days*(top/365)-top*1.8;

       $('.counter-one,.counter-four').find('#seconds > .anim').css('bottom',seconds_anim+'px'); 
       $('.counter-one,.counter-four').find('#minutes > .anim').css('bottom',minutes_anim+'px'); 
       $('.counter-one,.counter-four').find('#hours > .anim').css('bottom',hours_anim+'px'); 
       $('.counter-one,.counter-four').find('#days  > .anim').css('bottom',days_anim+'px'); 

       $('.counter-one').find('#seconds > .anim-2').css('bottom',seconds_anim_2+'px'); 
       $('.counter-one').find('#minutes > .anim-2').css('bottom',minutes_anim_2+'px'); 
       $('.counter-one').find('#hours > .anim-2').css('bottom',hours_anim_2+'px'); 
       $('.counter-one').find('#days  > .anim-2').css('bottom',days_anim_2+'px'); 

       if(seconds==0){
        $('.counter-one').find('#seconds > .anim-2').css('display','none'); 
       }else{
         $('.counter-one').find('#seconds > .anim-2').css('display','block'); 
       }
       if(minutes==0){
        $('.counter-one').find('#minutes > .anim-2').css('display','none'); 
       }else{
         $('.counter-one').find('#minutes > .anim-2').css('display','block'); 
       }
       if(hours==0){
        $('.counter-one').find('#hours > .anim-2').css('display','none'); 
       }else{
         $('.counter-one').find('#hours > .anim-2').css('display','block'); 
       }
       if(days==0){
        $('.counter-one').find('#days > .anim-2').css('display','none'); 
       }else{
         $('.counter-one').find('#days > .anim-2').css('display','block'); 
       }
   
  }, 1000);

    /* display  anim in counter one and four */
    if (counter.style === 'counter-two' || counter.style === 'counter-three'){
      $('.time-counter').wrapAll("<div id='time'></div>");
      $('.anim').css('display','none');
      $('.anim-2').css('display','none');
      
      /* dont display  anim-2 in counter four */
    }else if(counter.style === 'counter-four') {
      $('.anim-2').css('display','none');

    }

    $('#counter').attr('class',counter.style);


/****************************
**      4- Subscribe       **
*****************************/


  
    $(document).ready(function() {
      
      var email_val =  $('#input_email').val();
      $('#input_email').focusin(function () {
          $(this).attr('placeholder','');
          $(this).css('background','transparent');
          $(this).val('');

      });
      $('#input_email').focusout(function () {
        $(this).attr('placeholder','Enter your email adress...'); 

      });
      
});








