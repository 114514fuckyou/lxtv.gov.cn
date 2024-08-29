var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function ($, root, undefined) {
	

	$(document).ready(function(){
				
		$('.hamburger').on('click', function () {
			$(this).toggleClass('is-active');
		});

		showReadMore();

		$(document)
			.on('click', '.content-read-more', function () {
				$(".info-content").toggleClass("active");
				$(".content-read-more").toggleClass("active");

				if($(this).text() == "Leia Mais")
					$(this).text("Leia Menos");
				else
					$(this).text("Leia Mais");
			});
	});
	
	$(window).on('resize',function() {
		showReadMore();
	}).trigger('resize');


	function showReadMore(){
		if($(".info-content").height() >= 82 ){
			$(".info-content").css("margin-bottom", "20px");
			$(".content-read-more").show();
		}else{
			$(".content-read-more").hide();
			$(".info-content").css("margin-bottom", "0px");
		}
	}

})(jQuery, this);




}
/*
     FILE ARCHIVED ON 10:48:41 May 05, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 01:38:49 Jul 02, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 589.175
  exclusion.robots: 184.425
  exclusion.robots.policy: 184.418
  xauthn.identify: 75.887
  xauthn.chkprivs: 108.312
  RedisCDXSource: 13.963
  esindex: 0.008
  LoadShardBlock: 375.38 (3)
  PetaboxLoader3.datanode: 337.419 (4)
  CDXLines.iter: 13.164 (3)
  load_resource: 110.089
  PetaboxLoader3.resolve: 61.119
*/