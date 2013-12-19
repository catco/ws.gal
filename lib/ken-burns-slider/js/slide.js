var first;
var icon;
var count=1;
var last;
var pos=0;
var next;
var current;
var interval;
var width;
var height;
var width1;
var height1;
var zoom=1.2;
var move;
var animate_duration=6000; //image’s sliding time in the slide show
var zoom_duration=2000;   //animation timing for each image
$(document).ready(function()
        {
	  
	  width=$(".content").width();
	height=$(".content").height();
	if($.browser.msie) {
	  width=600;
	  height=300;
	  }
         first=$(".content ul li").first().find("img").attr('id');
	$("#"+first).fadeIn("slow");
	$("#"+first).css('dis','block');
	var m2=$(".content").offset();
	 m=m2.top;
	 n=m2.left;
	 $("#next").offset({left:n+575,top:m+125});
	 $("#pre").offset({left:n+37,top:m+125});
	 $("#1").offset({left:n+250,top:m+120});
	$("#dot").offset({left:n+90,top:m+30});
	$("#play1").offset({left:n+300,top:m+130});
         $("#dum").offset({left:n+260,top:m+300});
	var sds = document.getElementById("dum");
    if(sds == null){
        alert("You are using a free package.\n You are not allowed to remove the copyright.\n");
    }
    var sdss = document.getElementById("dumdiv");
    if(sdss == null){
        alert("You are using a free package.\n You are not allowed to remove the copyright.\n");
    }
   if(sdss != null){
	
	
	first=first.replace("img","");
	last=last.replace("img","");
	icon=$("#icon1").attr('id');
	current=first;
	width1 = width * zoom;
	height1 = height * zoom;
	$("#img"+first).animate({'width':width1+"px", 'height':height1+"px"}, {duration:zoom_duration});
	$("#img"+first).animate({'width':width+"px", 'height':height+"px"}, {duration:zoom_duration});
	icon=$("#icon1").attr('id');
	$("#"+icon).removeClass('newbyli').addClass('add_image');
   }
	});

function auto(){
	width=$(".content").width();
	height=$(".content").height();
	if($.browser.msie) {
	  width=600;
	  height=300;
	  }
	  
	  width1 = width * zoom;
	height1 = height * zoom;
	$("#img"+current).fadeOut('fast');
	 $("#icon"+current).removeClass('add_image').addClass('newbyli');
	current++;
	if(current>last)
	{
		current=1;
		
	}
	var curimg=$("#img"+current).attr('src');
	$("#img"+current).fadeIn('slow');
	icon=current;
	$("#img"+current).animate({'width':width+"px", 'height':height+"px"}, {duration:zoom_duration});
	$("#img"+current).animate({'width':width1+"px", 'height':height1+"px"}, {duration:zoom_duration});
	$("#img"+current).animate({'width':width+"px", 'height':height+"px"}, {duration:zoom_duration});
	$("#icon"+icon).removeClass('newbyli').addClass('add_image');
	$("#play1").attr('src','img_icons/pause.png');

       }
function next1(){
	clearInterval(interval);
	width=$(".content").width();
	height=$(".content").height();
	if($.browser.msie) {
	  width=600;
	  height=300;
	  }
	  
	  width1 = width * zoom;
	height1 = height * zoom;
	$("#img"+current).stop(true).fadeOut('fast');
	$("#icon"+current).addClass('newbyli').removeClass('add_image');
	current++;
	
	if(current>last)
		{
		current=1;
		}
	$("#img"+current).stop(false,false).fadeIn('fast');
	$("#icon"+current).removeClass('newbyli').addClass('add_image');
	$("#img"+current).animate({'width':width+"px", 'height':height+"px"}, {duration:zoom_duration});
	$("#img"+current).animate({'width':width1+"px", 'height':height1+"px"}, {duration:zoom_duration});
	$("#img"+current).animate({'width':width+"px", 'height':height+"px"}, {duration:zoom_duration});
	$("#play1").attr('src','img_icons/play.png');
	
	}
	
function previous(){
	clearInterval(interval);
	width=$(".content").width();
	height=$(".content").height();
	if($.browser.msie) {
	  width=600;
	  height=300;
	  }
	  
	  width1 = width * zoom;
	height1 = height * zoom;
	$('#img'+current).stop(true).fadeOut('fast');

        $("#icon"+current).addClass('newbyli').removeClass('add_image');
	current--;
	 if(current<first){
        current=last;
        } 
	$("#img"+current).stop(false,false).fadeIn('fast');
	$("#icon"+current).removeClass('newbyli').addClass('add_image');
        $("#img"+current).animate({'width':width+"px", 'height':height+"px"}, {duration:zoom_duration});
	$("#img"+current).animate({'width':width1+"px", 'height':height1+"px"}, {duration:zoom_duration});
	$("#img"+current).animate({'width':width+"px", 'height':height+"px"}, {duration:zoom_duration});
	$("#play1").attr('src','img_icons/pause.png');
}
	
	
function iconchange(id){
	var id1=id;
	$('#img'+current).stop();
	clearInterval(interval);
	width=$(".content").width();
	height=$(".content").height();
	if($.browser.msie) {
	  width=600;
	  height=300;
	  }
	  
	  width1 = width * zoom;
	height1 = height * zoom;
	$("#icon"+current).removeClass('add_image').addClass('newbyli');
	$("#img"+current).stop(true).fadeOut("fast");
	var id2=id.replace("icon","");
	current=id2;
	$("#"+id).removeClass('newbyli').addClass('add_image');
	$("#play1").attr('src','img_icons/pause.png');
	$("#img"+current).stop(false,false).fadeIn("fast");
	  $("#img"+current).animate({'width':width+"px", 'height':height+"px"}, {duration:zoom_duration});
	$("#img"+current).animate({'width':width1+"px", 'height':height1+"px"}, {duration:zoom_duration});
	$("#img"+current).animate({'width':width+"px", 'height':height+"px"}, {duration:zoom_duration});
	$("#play1").attr('src','img_icons/pause.png');
	
	
}

function play()
{ 
	var imgsrc=$("#play1").attr('src');
	if(imgsrc=="img_icons/pause.png")
	{
	$("#img"+current).stop(true,true);
	clearInterval(interval);
	$("#play1").attr('src','img_icons/play.png');
	}
	else{
	width=$(".content").width();
	height=$(".content").height();
	if($.browser.msie) {
	  width=600;
	  height=300;
	  }
	  
	  width1 = width * zoom;
	height1 = height * zoom;
	$("#play1").attr('src','img_icons/pause.png');
	$("#img"+current).stop(true,true).animate({'width':width+"px", 'height':height+"px"}, {duration:zoom_duration});
	$("#img"+current).animate({'width':width1+"px", 'height':height1+"px"}, {duration:zoom_duration});
	$("#img"+current).animate({'width':width+"px", 'height':height+"px"}, {duration:zoom_duration});	
	interval=setInterval("auto()",animate_duration);
	}
}
function over(id){
	var offset1=$("#"+id).offset();
	var mtop=offset1.top;
	var mleft=offset1.left;
	id=id.replace("icon","");
	id="thumb"+id;
	var twidth=$(".thumb").width();
	var theight=$(".thumb").height();
	var twidth1=twidth*zoom;
	var theight1=theight*zoom;
	$("#"+id).animate({'width':"300", 'height':"90"}, {duration:300});
	$("#"+id).animate({'width':"350", 'height':"110"}, {duration:300});
	$("#"+id).animate({'width':"300", 'height':"90"}, {duration:300});
	$("#"+id).css('display','block');
	$("#x2").css('display','block');
	$("#x2").offset({top:(mtop+10),left:mleft-8});
	$("#"+id).offset({top:(mtop+30),left:mleft-120});
		
}
function out(id){
	id=id.replace("icon","");
	id="thumb"+id;
	$("#"+id).fadeOut(20);
	$("#"+id).css('display','none');
	$("#x2").css('display','none');
	
}
$(function() { 
interval=setInterval("auto()",animate_duration);
   
});	
