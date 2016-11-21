/*!
 * Stylesheet Iocare v1 (http://iocare.vn/)
 * Copyright 2015 Iocare, Inc.
 */
 
 // script carousel header begin 
// use owlcarousel ver2.0
// link: http://www.owlcarousel.owlgraphic.com
$(document).ready(function(){
	if($('.owl-slide').length > 0) {
		var owl = $('.owl-slide');
		owl.owlCarousel({
			loop:true,
			margin:0,
			autoplay:true,
			autoplayTimeout:4000,
			autoplayHoverPause:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				960:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});
	}
});
// script carousel header end 

// script carousel health facility highlights begin 
// use owlcarousel ver2.0
// link: http://www.owlcarousel.owlgraphic.com
$(document).ready(function(){
	if($('.owl-health-hightlight').length > 0) {
		var owl = $('.owl-health-hightlight');
		owl.owlCarousel({
			loop:true,
			margin:0,
			autoplay:true,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				960:{
					items:3
				},
				1200:{
					items:3
				}
			}
		});
		// owl.on('mousewheel', '.owl-stage', function (e) {
		// 	if (e.deltaY>0) {
		// 		owl.trigger('next.owl');
		// 	} else {
		// 		owl.trigger('prev.owl');
		// 	}
		// 	e.preventDefault();
		// });
		$('.owl-health-hightlight-left').on('click',function(e){
			owl.trigger('prev.owl');
			e.preventDefault();
		})
		$('.owl-health-hightlight-right').on('click',function(e){
			owl.trigger('next.owl');
			e.preventDefault();
		});
	}
});
// script carousel health facility highlights end 


// script health facility by locaion begin 
// use owlcarousel ver2.0
// link: http://www.owlcarousel.owlgraphic.com
$(document).ready(function(){
	if($('.owl-health-location').length > 0) {
		var owl = $('.owl-health-location');
		owl.owlCarousel({
			loop:true,
			margin:0,
			autoplay:true,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			responsive:{
				0:{
					items:2
				},
				600:{
					items:2
				},
				960:{
					items:4
				},
				1200:{
					items:4
				}
			}
		});
		// owl.on('mousewheel', '.owl-stage', function (e) {
		// 	if (e.deltaY>0) {
		// 		owl.trigger('next.owl');
		// 	} else {
		// 		owl.trigger('prev.owl');
		// 	}
		// 	e.preventDefault();
		// });
		$('.owl-health-location-left').on('click',function(e){
			owl.trigger('prev.owl');
			e.preventDefault();
		});
		$('.owl-health-location-right').on('click',function(e){
			owl.trigger('next.owl');
			e.preventDefault();
		});
	}
});
// script carousel health facility by locaion end


// script carousel health facility begin 
// use owlcarousel ver2.0
// link: http://www.owlcarousel.owlgraphic.com
$(document).ready(function(){
	if($('.owl-health-facility').length > 0) {
		var owl = $('.owl-health-facility');
		owl.owlCarousel({
			loop:true,
			margin:0,
			autoplay:true,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				960:{
					items:4
				},
				1200:{
					items:4
				}
			}
		});
		// owl.on('mousewheel', '.owl-stage', function (e) {
		// 	if (e.deltaY>0) {
		// 	owl.trigger('next.owl');
		// 	} else {
		// 		owl.trigger('prev.owl');
		// 	}
		// 	e.preventDefault();
		// });
		$('.owl-health-facility-left').on('click',function(e){
			owl.trigger('prev.owl');
			e.preventDefault();
		})
		$('.owl-health-facility-right').on('click',function(e){
			owl.trigger('next.owl');
			e.preventDefault();
		});
	}
});
// script carousel health facility end


// script carousel health facility begin 
// use owlcarousel ver2.0
// link: http://www.owlcarousel.owlgraphic.com
$(document).ready(function(){
	if($('.owl-doctors').length > 0) {
		var owl = $('.owl-doctors');
		owl.owlCarousel({
			loop:true,
			margin:0,
			autoplay:true,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				960:{
					items:4
				},
				1200:{
					items:4
				}
			}
		});
		// owl.on('mousewheel', '.owl-stage', function (e) {
		// 	if (e.deltaY>0) {
		// 	owl.trigger('next.owl');
		// 	} else {
		// 		owl.trigger('prev.owl');
		// 	}
		// 	e.preventDefault();
		// });
		$('.owl-doctors-left').on('click',function(e){
			owl.trigger('prev.owl');
			e.preventDefault();
		})
		$('.owl-doctors-right').on('click',function(e){
			owl.trigger('next.owl');
			e.preventDefault();
		});
	}
});
// script carousel health facility end


// script carousel newest comment begin 
// use owlcarousel ver2.0
// link: http://www.owlcarousel.owlgraphic.com
$(document).ready(function(){
	if($('.owl-newest-comment').length > 0) {
		var owl = $('.owl-newest-comment');
		owl.owlCarousel({
			loop:true,
			margin:0,
			autoplay:true,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				960:{
					items:2
				},
				1200:{
					items:2
				}
			}
		});
		// owl.on('mousewheel', '.owl-stage', function (e) {
		// 	if (e.deltaY>0) {
		// 	owl.trigger('next.owl');
		// 	} else {
		// 		owl.trigger('prev.owl');
		// 	}
		// 	e.preventDefault();
		// });
		$('.owl-newest-comment-left').on('click',function(e){
			owl.trigger('prev.owl');
			e.preventDefault();
		})
		$('.owl-newest-comment-right').on('click',function(e){
			owl.trigger('next.owl');
			e.preventDefault();
		});
	}
});
// script carousel newest comment end


// script carousel health event begin 
// use owlcarousel ver2.0
// link: http://www.owlcarousel.owlgraphic.com
$(document).ready(function(){
	if($('.owl-health-event').length > 0) {
		var owl = $('.owl-health-event');
		owl.owlCarousel({
			loop:true,
			margin:0,
			autoplay:true,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				960:{
					items:3
				},
				1200:{
					items:3
				}
			}
		});
		// owl.on('mousewheel', '.owl-stage', function (e) {
		// 	if (e.deltaY>0) {
		// 	owl.trigger('next.owl');
		// 	} else {
		// 		owl.trigger('prev.owl');
		// 	}
		// 	e.preventDefault();
		// });
		$('.owl-health-event-left').on('click',function(e){
			owl.trigger('prev.owl');
			e.preventDefault();
		})
		$('.owl-health-event-right').on('click',function(e){
			owl.trigger('next.owl');
			e.preventDefault();
		});
	}
});
// script carousel health event end


// script carousel health care begin 
// use owlcarousel ver2.0
// link: http://www.owlcarousel.owlgraphic.com
$(document).ready(function(){
	if($('.owl-health-care').length > 0) {
		var owl = $('.owl-health-care');
		owl.owlCarousel({
			loop:true,
			margin:0,
			autoplay:true,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				960:{
					items:3
				},
				1200:{
					items:3
				}
			}
		});
		$('.owl-health-care-left').on('click',function(e){
			owl.trigger('prev.owl');
			e.preventDefault();
		})
		$('.owl-health-care-right').on('click',function(e){
			owl.trigger('next.owl');
			e.preventDefault();
		});
	}
});
// script carousel health care end


// script gallery begin 
// use owlcarousel ver2.0
// link: http://www.owlcarousel.owlgraphic.com
$(document).ready(function(){
	if($('.owl-box-gallery-carousel').length > 0) {
		var owl = $('.owl-box-gallery-carousel');
		owl.owlCarousel({
			loop:true,
			margin:5,
			autoplay:true,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:3
				},
				768: {
					items:6
				},
				960:{
					items:6
				},
				1200:{
					items:6
				}
			}
		});
		$('.owl-box-gallery-carousel-left').on('click',function(e){
			owl.trigger('prev.owl');
			e.preventDefault();
		})
		$('.owl-box-gallery-carousel-right').on('click',function(e){
			owl.trigger('next.owl');
			e.preventDefault();
		});
	}
});
// script gallery end

$(document).ready(function(){
	function init(){
		$("a.tab").each(function( index ) {
			var div = $( this ).attr('href');
			$(div).addClass('hide');		
		});
	}
	function slide_hide(){
		if($('.slide').hasClass('slide-hide')) {
			$('.owl-slide').hide();
			var tab_active = $('a.tab-active').attr('href');
			$(tab_active).addClass('hide');
			$('a.tab').removeClass('tab-active');
		}
	}

	slide_hide();
	var media = $( window ).width();	
	if(media < 768){
		init();
	}

	if($('a.tab').length > 0) {
		$('a.tab').click(function(e){
			$('.owl-slide').show();
			$('a.tab').removeClass('tab-active');
			$(this).addClass('tab-active');
			media = $( window ).width();
			var div = $(this).attr('href');
			if(media >= 768){
				init();
				$(div).removeClass('hide');
			} else {
				if($(div).hasClass('hide')) {
					$(div).removeClass('hide');
				} else {
					$(div).addClass('hide');
				} 
			}			
			e.preventDefault();
		});
	}
});


$(document).ready(function(){
	/**
	 * @license wysihtml5 v0.3.0
	 * https://github.com/xing/wysihtml5
	 */
	if($('.wysihtml5').length > 0) {
		$('.wysihtml5').wysihtml5();
	}

	if($('.summernote').length > 0) {
		$('.summernote').summernote({
	        height: 200,  
	        minHeight: null,             // set minimum height of editor
	        maxHeight: null, 
	        focus: false                 // set focus to editable area after initializing summernote
	    });
	}

});


//jquery raty
//http://wbotelhos.com/raty
$(document).ready(function() {
	if($('.raty').length > 0) {
		$('.raty').raty({
		  starOff : 'images/icons/rating/star_off.png',
		  starOn  : 'images/icons/rating/star_on.png'
		});
	}
	if($('.raty-small').length > 0) {
		$('.raty-small').raty({
		  starOff : 'images/icons/rating/icon_03.png',
		  starOn  : 'images/icons/rating/icon_01.png'
		});
	}
});



//fancybox
//http://fancyapps.com/fancybox/
$(document).ready(function() {
	if($(".fancybox").length > 0) {
		$(".fancybox").fancybox();
	}
});

//readmore
$(document).ready(function() {
    // Configure/customize these variables.
    if($('.readmore').length > 0) {
    	var showChar = 400;  // How many characters are shown by default
	    var ellipsestext = "...";
	    var moretext = '<i class="fa fa-plus-square">';
	    var lesstext = '<i class="fa fa-minus-square">';
	    

	    $('.readmore').each(function() {
	        var content = $(this).html();
	 
	        if(content.length > showChar) {
	 
	            var c = content.substr(0, showChar);
	            var h = content.substr(showChar, content.length - showChar);
	 
	            var html = c + '<span class="moreellipses">' + ellipsestext+ '</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
	 
	            $(this).html(html);
	        }
	 
	    });
	 
	    $(".morelink").click(function(){
	        if($(this).hasClass("less")) {
	            $(this).removeClass("less");
	            $(this).html(moretext);
	        } else {
	            $(this).addClass("less");
	            $(this).html(lesstext);
	        }
	        $(this).parent().prev().toggle();
	        $(this).prev().toggle();
	        return false;
	    });
    }
    
});

//jquery chosen
//https://github.com/harvesthq/chosen
$(document).ready(function() {	
	if($(".chosen-select").length > 0) {
		var config = {
	      '.chosen-select'           : {},
	      '.chosen-select-deselect'  : {allow_single_deselect:true},
	      '.chosen-select-no-single' : {disable_search_threshold:10},
	      '.chosen-select-no-results': {no_results_text:'Oops, nothing found!'},
	      '.chosen-select-width'     : {width:"95%"}
	    }
	    for (var selector in config) {
	      $(selector).chosen(config[selector]);
	    }
		$(".chosen-select").chosen({disable_search_threshold: 10});
	}
});

//jquery niceScroll
//https://github.com/inuyaksa/jquery.nicescroll
$(document).ready(function() {	
	$("html").niceScroll({styler:"fb",cursorcolor:"#2eb0d0", cursorwidth: '6', cursorborderradius: '10px', background: '#404040', spacebarenabled:false,  cursorborder: '', zindex: '1000'});
});

//jquery datepicker
//http://www.eyecon.ro/bootstrap-datepicker/
$(document).ready(function() {	
	if($(".input-date").length > 0) {
		$('.input-date').datepicker();
	}	
});

$(document).ready(function() {
	//function filter
	$('[datafilter="filter"]').on('click', function(){
		var show = new Array();
		var hide = new Array();
		$('[datafilter="filter"]').each(function() {
			var $class = $(this).attr('data');
			if($(this).is(':checked')) {
				hide.push($class);
			} else {
				show.push($class);
			}
		});
		$.each( hide, function( key, value ) {
			$(value).show();
		});
		$.each( show, function( key, value ) {
			$(value).hide();
		});
		if(hide.length == 0) {
			$('[datafilter="filter"]').each(function() {
				var $class = $(this).attr('data');
				$($class).show();
			});
		}
	});
});