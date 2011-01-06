//You need an anonymous function to wrap around your function to avoid conflict  
(function($){  

    //Attach this new method to jQuery  
    $.fn.extend({   
          
          //This is where you write your plugin's name  
          slideMenu: function(options) {
  
            // Default settings that can be overridden
            var defaults = {
            	slideDownSpeed: 350,
				slideUpSpeed:	300,
				evenColour:		'#ccc',
				oddColour:		'#eee',
				newHeight:		'50px'
            }
            
            var options = $.extend(defaults, options);
            
            //Iterate over the current set of matched elements  
            return this.each(function() {  
              	var obj = $(this);
				var defaultHeight = $("li", obj).height();

				$("li:even", obj).css('background-color', options.evenColour);
   			 	$("li:odd", obj).css('background-color', options.oddColour);
				
	   			$("li", obj).hover(function() {
        			$(this).stop().animate({'height':options.newHeight},options.slideDownSpeed);
   				 }, function() {
        			$(this).stop().animate({'height':defaultHeight+'px'},options.slideUpSpeed);
    			})
              
            }); // close the return
        }  // close the panelGroup function
    }); // close the plugin funciton 
      
//pass jQuery to the function,   
//So that we will able to use any valid Javascript variable name   
//to replace "$" SIGN. But, we'll stick to $ (I like dollar sign: ) )         
})(jQuery); // close the function wrapper
