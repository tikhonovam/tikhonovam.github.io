(function($){
	$.fn.simpleTabs = function(ind){
		return this.each(function(){
			var tabs = this, i = 0, index = ind;

			function showPage(i){
				$(tabs).find(".tab").hide();
				$(tabs).find(".tab").eq(i).show();
				$(tabs).children("ul").children("li").removeClass("active");
				$(tabs).children("ul").children("li").eq(i).addClass("active");
			};

			if(typeof index == "undefined"){
				index = 0;
			}

			showPage(index);

			$(tabs).children("ul").children("li").each(function(){
				$(this).attr("data-page", i);
				i++;                        
			});

			$(tabs).children("ul").children("li").click(function(){
				showPage(parseInt($(this).attr("data-page")));
			});	
		});
	};
}(jQuery));

$(function(){
	$(".main_col").on("mouseenter", function(){
		$(this).find(".main_col_active").stop(0).fadeIn("fast");		
	}).on("mouseleave", function(){
		$(this).find(".main_col_active").stop(0).fadeOut("fast");		
	});	

		
	//Табы
	$(".tabs").simpleTabs(0);
	
	//readmore
	$(".readmore").on("click", function(){
		$(".product_about").css({'height':'auto'} );
		$(".readmore").remove();
	});
	
	
	//выпадающие меню
	$(".mainmenu_list").on("mouseenter", function(){
		$(this).find(".slidemenu").stop(0).fadeIn("fast");
	}).on("mouseleave", function(){
		$(this).find(".slidemenu").stop(0).fadeOut("fast");		
	});	
	
	$(".header-center .center_item").on("mouseenter", function(){
		$(this).find(".center_language").stop(0).fadeIn("fast");
		$(this).find(".center_rate").stop(0).fadeIn("fast");
	}).on("mouseleave", function(){
		$(this).find(".center_language").stop(0).fadeOut("fast");
		$(this).find(".center_rate").stop(0).fadeOut("fast");
	});
	
	$(".color").on("mouseenter", function(){
		$(this).find(".drop").stop(0).fadeIn("fast");		
	}).on("mouseleave", function(){
		$(this).find(".drop").stop(0).fadeOut("fast");
	});
	
	
	//счетчики
	var addwishcount=0;
	var addcount=0;
	$(".main_row").on("click", ".addwish", function(){		
		if(addwishcount==0){$(".wish_count").css({'opacity':'1'} )};
		if(!$(this).hasClass("done")){
		addwishcount++;
		$(".wish_count").text(addwishcount);
		$(this).addClass("done");
		};
	});		
	$(".main_row").on("click", ".add", function(){
		if(addcount==0){$(".cart_count").css({'opacity':'1'})};
		if(!$(this).hasClass("done")){
		addcount++;
		$(".cart_count").text(addcount);
		$(this).addClass("done");
		};
	});
	
	
	//удаление/добавление товаров
	var rel = parseFloat($(".price").attr("rel"));
	$(".minus").click(function(){
		var inp = $(this).parent().find("input");
		if(!isNaN(inp.val())){
        var counter = parseInt(inp.val()) - 1;
        if( counter < 1){
			counter=1;
		}; 
        inp.val(counter);
        inp.change();
		
		calc(counter);
		};
        return false;
	});
	$(".plus").click(function () {
        var inp = $(this).parent().find("input");
		if(!isNaN(inp.val())){
		var counter = parseInt(inp.val()) + 1;
        inp.val(counter);		
        inp.change();
		
		calc(counter);
		};		
        return false;
    });
	
	function calc(count){
		$(".price").text("$" + (count*rel).toFixed(2));
	};
	
	var oldvalue;
	$("input.count").focusin(function(){
		oldvalue = $(this).val();
		console.log(oldvalue);
	});
	
	$("input.count").on("keyup change paste", function(){
		if(($(this).val()<0)||(isNaN($(this).val()))){
			$(this).val(oldvalue);
			calc($(this).val());
	} else if($(this).val()==0){
		$(this).val(1);
		calc($(this).val());
	} else{
		calc($(this).val());
	};
	});
	
	
//добавление товаров в корзину	
	$(".buybutton").click(function(){
		var inp = $(this).parent().find("input");
		if(parseInt(inp.val())!=0){
			if(addcount==0){$(".cart_count").css({'opacity':'1'})};
			addcount = addcount + parseInt(inp.val());
		};	
		$(".cart_count").text(addcount);
	});
	
//скролл меню	
	
	$(window).scroll(function(){		
		if($(this).scrollTop()>200){
			$(".header_double").fadeIn();			
		}else{
			$(".header_double").fadeOut();
		}		
	});

	
});








