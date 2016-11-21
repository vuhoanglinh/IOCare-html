/*!
 * Stylesheet Iocare v1 (http://iocare.vn/)
 * Copyright 2015 Iocare, Inc.
 */

 $(document).ready(function(){
 	if($('.nice-selector').length > 0) {
 		$('.nice-selector .btn').on('click', function(e){
 			$(this).parent().children('select').click();
 			e.preventDefault();	
 		});
 	}
 });

 function showhidethis(me,element) {
 	$(element).show();
 	$(me).hide();
 }