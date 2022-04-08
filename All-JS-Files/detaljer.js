$(function(){
    $("img").mouseover(function(){
        $(this).css("width","220px" );
        $(this).css("height","220px")
    })
    
    $("img").mouseout(function(){
        $(this).css("width","200px" );
        $(this).css("height","200px")
    }) 
})

