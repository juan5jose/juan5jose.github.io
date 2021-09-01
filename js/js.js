$(document).ready(function () {
    $("#envio").click(function (e) { 
        e.preventDefault();
        alert("Datos enviados")
        $("#datos").html("Pais: "+$("#pais").val()+"<br>");
        $("#datos").append("Nombre: "+$("#nombre").val()+"<br>");
        $("#datos").append("Apellidos: "+$("#apellido").val()+"<br>");
        $("#datos").append("Correo: "+$("#correo").val()+"<br>");
        $("#datos").append("Telefono: "+$("#telefono").val())+"<br>";
        $("#datos").append("Producto interesado: "+$("#producto").val()+"<br>");
        $("#datos").append("Inquietud: "+$("#textarea").val());
    });
    $("#form input, #form textarea, #form select").focus(function (e) { 
        e.preventDefault();
        $(this).addClass("focus");
    });
    $("#form input, #form textarea, #form select").blur(function (e) { 
        e.preventDefault();
        $(this).removeClass("focus");
    });
});