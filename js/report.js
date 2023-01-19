$(document).ready(function(){
    var second_name = localStorage.getItem("second_name");
    var name = localStorage.getItem("name");
    var father_name = localStorage.getItem("father_name");
    var phone_mask = localStorage.getItem("phone-mask");
    var email = localStorage.getItem("email");
    var date = localStorage.getItem("date");
    var s_s_slct = localStorage.getItem("s_s_slct");
    var checkbox_google_red = localStorage.getItem("checkbox_google_red");
    var themeofrep = localStorage.getItem("themeofrep");
    $("#second_name_span").text(second_name);
    $("#first_name_span").text(name);
    $("#father_name_span").text(father_name);
    $("#phone-mask_span").text(phone_mask);
    $("#email_span").text(email);
    $("#date_span").text(date);
    $("#s_s_slct_span").text(s_s_slct);
    $("#themeofrep_span").text(themeofrep);
   


    if ($("#date_span").text() == "") {
        $(".date_label").hide();
    }

    
    if (checkbox_google_red == "false") {
        $("#checkbox_google_red_span").text("Нет");
        $(".themeofrep_label").hide();
    } 
    else if (checkbox_google_red == "true"){
        $("#checkbox_google_red_span").text("Есть");
    }
});
