
$(document).ready(function(){
    // gotop
    $(".gotop").click(function(){
        $("html,body").animate({
            scrollTop:0
        },1200);
    });
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 300){
            $('.gotop').fadeIn("fast");
        } else {
            $('.gotop').stop().fadeOut("normal");
        }
    });
    
    //tooltip

    $("[rel='tooltip']").tooltip({title:" ヽ(ﾟ∀。)ノ ヽ(`Д´#)ﾉ",animation: true,placement: "right"}); 
   
});