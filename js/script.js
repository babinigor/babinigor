$(document).ready(function(){
    $('.checkbox_google_red').click(function(){
        if($(this).is(":checked")) {
            $(".themeofrep_div").addClass("checked");
        } else {
            $(".themeofrep_div").removeClass("checked");
        }
    }); 
    var phoneMask = IMask(
        document.getElementById('phone-mask'), {
          mask: '+{7}(000)000-00-00'
    });

    $("#submitBtn").click(function(e){
        e.preventDefault();
        var second_name = $("#second_name").val();
        var first_name = $("#first_name").val();
        var father_name = $("#father_name").val();
        var phone_mask = $("#phone-mask").val();
        var email = $("#email").val();
        var date = $("#date").val();
        var s_s_slct = $("#s_s_slct").val();
        var checkbox_google_red = $("#checkbox_google_red").is(':checked');
        var themeofrep = $("#themeofrep").val();

        if(!second_name){
            alert("Пожалуйста, введите вашу фамилию");
            return;
        }
        if(!first_name){
            alert("Пожалуйста, введите ваше имя");
            return;
        }
        if(!father_name){
            alert("Пожалуйста, введите ваше отчество");
            return;
        }
        if(!phone_mask){
            alert("Пожалуйста, введите ваш номер телефона");
            return;
        }
        if(!email){
            alert("Пожалуйста, введите ваш Email");
            return;
        }

        if(phone_mask.length != 16) {
            alert("Вы ввели неправильный номер телефона");
            return;
        }

        if (checkbox_google_red && themeofrep == "") {
            alert("Вы не ввели название доклада");
            return;
        }

        localStorage.setItem("second_name", second_name);
        localStorage.setItem("first_name", first_name);
        localStorage.setItem("father_name", father_name);
        localStorage.setItem("phone-mask", phone_mask);
        localStorage.setItem("email", email);
        localStorage.setItem("date", date);
        localStorage.setItem("s_s_slct", s_s_slct);
        localStorage.setItem("checkbox_google_red", checkbox_google_red);
        localStorage.setItem("themeofrep", themeofrep);
        window.location.href = "report.html";
      });
});