$(function () {
    $(".btn.btn-success").click(
        function () {
            // $("input[value=usa]").val();
            $.ajax({
                url: 'https://restcountries.eu/rest/v2/name/' + $("input[value=usa]").val(),
                success: function (data, statuts, response) {
                    $("#country").html(data[0].name);
                    $("#capital").html(data[0].capital);
                }
            });
        })
});