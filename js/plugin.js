$( document ).ready( function () {


// Preloading 
        jQuery(window).on('load',function(){
            
                    jQuery("#loading .loading-center").fadeOut(3000,function(){
                    jQuery(this).parent().fadeOut(2000,function()
                            {
                                jQuery("body").css("overflow-y","auto");
                                jQuery(this).remove();
                            
                    
                    });
            
            
            });
            });

    //sticky navbar : 
    
                 var navbar = document.getElementById("navbar");
                 var sticky = navbar.offsetTop;
                $( window ).scroll(function(){
                    if (window.pageYOffset >sticky) {
                                    navbar.classList.add("sticky")
                                } else {
                                    navbar.classList.remove("sticky");
                                }
                } );
//animation
               var wow = new WOW(
                    {
                         animateClass: 'animated',
                      offset:       50
                    }
                  );
                  wow.init();


//add active class to navtogglebtn

      
            $('.navbar-toggle').on('click', function ()
            {
                var btn = $(this);
            

                if (!btn.hasClass('active'))
                {
                    btn.addClass('active');  
                }
                else
                {
                    btn.removeClass('active');
                

            
                }
            });
     
    //home-slider
    
           $('.exa-slider').slick({
            autoplay:true,
            speed: 1000,
            pauseOnFocus:true,
            pauseOnHover:true,
            dots: true,
            prevArrow: '<i class="fa fa-angle-right"></i>',
            nextArrow: '<i class="fa fa-angle-left"></i>',
            centerMode: true,
            focusOnSelect: true,
      


            responsive: [
        
                {
                breakpoint: 768,
                settings: {
                    
                    slidesToShow: 1,
                    slidesToScroll: 1,
                   
               
                }
        },
        
        {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows:false,
        
                }
        },
    
    ]
          }); 
              
          



            });
     

