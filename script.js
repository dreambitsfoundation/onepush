/**
 * Created by Gaurav on 18-09-2016.
 */
$(document).ready(function(){
    $("#url").keyup(function(){
        var url=$(this).val();
        var final_url="http://www.google.com/s2/favicons?domain="+url;
        $("#demo_img").attr('src',final_url);
        $("#website_url").text(url);
    });
    $("#success_window_suspend").click(function(){
        $("#success_window").fadeOut();
    })
});
