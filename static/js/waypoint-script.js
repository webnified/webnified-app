var currentButton = "";
var navBarOffset = $(".navbar").offset().top;
var currentPosition = $(window).scrollTop();

/*$(".navbar").waypoint(function (direction){			
	if(bool){
		if(direction == "down"){
			$(this).addClass("navbar-fixed-top");
		}
		if(direction == "up"){
			$(this).removeClass("navbar-fixed-top");
		}
	}else{					
		offset();
	}	
	if(!bool){
		offset();
	}
}, { offset: 20 });*/


/*what we do Waypoint*/
waypoints("#what-we-do" , "#s1");
/*pocess Waypoint*/
waypoints("#process" , "#s2");
/*projects Waypoint*/
waypoints("#projects" , "#s3");
/*team Waypoint*/
waypoints("#team" , "#s4");
/*contact Waypoint*/
waypoints("#contact" , "#s5");

if(currentPosition > 50){
	offset();
}

function offset(){	
	var currentPosition = $(window).scrollTop();
	setOffset = navBarOffset;
	if(currentPosition >= navBarOffset){
		$(".navbar").addClass("navbar-fixed-top");
	}
}

$(window).scroll(function (){
	if(($(window).scrollTop() + 20) <= navBarOffset)		
		$(".navbar").removeClass("navbar-fixed-top");
	else
		$(".navbar").addClass("navbar-fixed-top");
	// console.log($(window).scrollTop());
});

$(".smintlink ").click(function ( event ){
	event.preventDefault();
	var id = event.target.href.match(/(\#.+)$/)[1];	
	if(!$("#navigate").hasClass("navbar-fixed-top")){
		$(".navbar").animatescroll();
		setTimeout(function (){
			$(id).animatescroll();
		} , 700);
	}else{
		$(id).animatescroll();	
	}
});

function waypoints( div , link ){
	$(div).waypoint(function (direction){	
		if(direction == "down")
			attacher(link);
	}, { offset: 80 });

	$(div).waypoint(function (direction){			
		if(direction == "up")
			attacher(link);
	}, { offset: offsetDirection($(this)) });
}

function attacher( id ){
	buttonDetach(currentButton);
	currentButton = id;
	buttonAttach(currentButton);
}

function buttonAttach( id ){
	$(id).addClass("btn business hidden-xs assign-color");
}

function buttonDetach( id ){
	$(id).removeClass("btn business hidden-xs assign-color");
}

function offsetDirection( element ) {
	return -(element.height() + 50);
}