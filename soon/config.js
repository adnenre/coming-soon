'use strict';



var background ={

       //  CHOOSE ON OF THIS OPTION      
       // OPTION : 'gradient' , 'image' , 'slideShow' 

       type   : 'gradient',



       //OPTION :'bg-color-one','bg-color-two','bg-color-three','bg-color-four'
      
       gradient  : 'bg-color-one',


       slideShow : { 

             slides :

                    [
                      { src: 'https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' },
                      { src: 'https://images.pexels.com/photos/147504/pexels-photo-147504.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' },
                      { src: 'https://images.pexels.com/photos/196666/pexels-photo-196666.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' },
                      { src: 'https://images.pexels.com/photos/196464/pexels-photo-196464.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' },
                      { src: 'https://images.pexels.com/photos/71104/utah-mountain-biking-bike-biking-71104.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' },
                      { src: 'https://images.pexels.com/photos/69731/pexels-photo-69731.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' }

                    ],

                    overlay:'assets/css/overlays/06.png'

                 },

       image : {
           
           // choose image for background
          image_url : ""

        },
       
       //Option : ture ,false "activate or deactivate particle"
       particle : true

      } ;




/**************************
 **		countDwon      **   
 **************************/

var counter = {
        

        // "counter-one", "counter-two","counter-three","counter-four"

		style : 'counter-four',

    launchDate : {


          // OPTIONS:"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
          
          Month: 'January',


          //  DAY : INTEGER[ 1 - 31 ]

          Day: 17,


           // YEAR : INTEGER

          Year: 2020
    }
		
	};

/**************************
 **		Ajax Chimp       **   
 **************************/

$("#subscribe_form").ajaxChimp({


	// Replace your mailchimp post url inside double quote "".
    
    url: "//novisdev.us15.list-manage.com/subscribe/post?u=202b79afea96f1d57561896f5&amp;id=02ba748be1"    
 
  });


















