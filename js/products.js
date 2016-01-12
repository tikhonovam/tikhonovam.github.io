$(function(){
		
	var prodList = [{
	name: "White table for kitchen",
	price: 100.56,
	img: "images/img11.jpg"
	}, {
	name: "Uno Waves Headboard King Bed Walnut",
	price: 1024,
	img: "images/img12.jpg"
	}, {
	name: "Uno Waves Headboard Queen Bed Walnut",
	price: 3000,
	img: "images/img13.jpg"
	}, {
	name: "Fab Home Lucas King Bed With Box Storage Walnut And Wenge",
	price: 600,
	img: "images/img14.jpg"
	}];
	
	
	function add(a,catalog,price){
		var newDiv = $("<div>").attr({"class":"main_col"});
		var back = $("<div>").attr({"class":"main_col_back"}).appendTo(newDiv);
		var img = $("<img>").attr("src", a).appendTo(back);
		var block = $("<div>").attr({"class":"main_col_block"}).appendTo(back);
		var title = $("<div>").attr({"class":"main_col_title"}).appendTo(block);
		var alink = $("<a>").appendTo(title);
		$(alink).text(catalog);
		var pr = $("<div>").attr({"class":"main_price"}).appendTo(block);
		$(pr).text("$" + price);
		
		var active = $("<div>").attr({"class":"main_col_active"}).appendTo(newDiv);
		var addlayer = $("<div>").attr({"class":"addlayer"}).appendTo(active);
		var add = $("<a>").attr({"class":"add"}).appendTo(active);
		var addwish = $("<a>").attr({"class":"addwish"}).appendTo(active);
						
		$(".main_row").append(newDiv);
	};
	
	$(".viewmore").click(function(){
	var i;		
	for(i=0; i< prodList.length; i++){
	add(prodList[i].img,prodList[i].name,prodList[i].price);
	};
	});
	
	$(".content").on("mouseenter", ".main_col", function(){
		$(this).find(".main_col_active").stop().fadeIn("fast");
	}).on("mouseleave", ".main_col", function(){
		$(this).find(".main_col_active").stop().fadeOut("fast");
	});
	
	
	
});
