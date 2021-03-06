/*
 • jQuery fancyBlend
 • http://christopherhein.com
 •
 • Copyright 2010, Christopher Hein
 • Free to use and abuse under the GPL license.
 • http://www.gnu.org/copyleft/gpl.html
 • 
 • March 2010
*/

(function($) 
{

  $.fn.fancyBlend = function(options)
  {
      // Settings
    settings = jQuery.extend(
    {
      effect: 'fade',
      speed: 150,
      opacity: 0,
    }, options);
      
      // Varibles
    var elem = $(this);
    var href = $(this).attr('href');
    var title = $(this).attr('title');
    var rel = $(this).attr('rel');
    
    
      // Setting it up
    elem.addClass('jsfb').addClass('link');
    elem.parent().append('<a href="'+href+'" title="'+title+'" rel="'+rel+'" class="jsfb hover" style=" position:absolute; top: 0px; left: 0px; "></a>');
    elem.next('.jsfb.hover').fadeTo( 1, 0 );
    
      // Making it work
    elem.parent().hover( function()
    {
      elem.next('.jsfb.hover').stop().fadeTo(1000, 1);
    },
    function()
    {
      elem.next('.jsfb.hover').stop().fadeTo(1000, 0);
    });
    
    // Active
    elem.click(function()
    {
      elem.parent().append('<a href="'+href+'" title="'+title+'" rel="'+rel+'" class="jsfb active" style=" position:absolute; top: 0px; left: 0px; "></a>');
    },
    function()
    {
      $('.jsfb.active').remove();
    });
  
    
    
  }
	
})(jQuery);