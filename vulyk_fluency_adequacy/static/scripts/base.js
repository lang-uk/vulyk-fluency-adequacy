$(function () {
    var template = Handlebars.compile($('#judgeme_template').html()),
        output = $("#out"),
        fluency_given = false,
        adequacy_given = false;

    function serialize_form() {
        return{
            fluency: $('#fluency-slider').val(),
            adequacy: $('#adequacy-slider').val()
        };
    }


    $(document.body).on("vulyk.next", function (e, data) {
        fluency_given = false;
        adequacy_given = false;
        $("#current-fluency-score").text("");
        $("#current-adequacy-score").text("");
        $(".mark-errors strong").removeClass("text-danger");
        output.html(template(data.result.task.data));
        $('[data-toggle="tooltip"]').tooltip();

        // Hide adequacy stage until fluency is rated
        $("#adequacy-stage").hide();

        $("#fluency-slider").change(function () {
            fluency_given = true;
            $("#current-fluency-score").text($(this).val());
            // Reveal adequacy stage
            $("#adequacy-stage").slideDown();
        });

        $("#adequacy-slider").change(function () {
            adequacy_given = true;
            $("#current-adequacy-score").text($(this).val());
        });
    }).on("vulyk.save", function (e, callback) {
        if (fluency_given && adequacy_given) {
            callback(serialize_form());
        }
        else {
            $("a#save-button, a#skip-button").removeClass("disabled");
            $(".mark-errors strong").addClass("text-danger");
        }
    }).on("vulyk.skip", function (e, callback) {
        callback();
    });
});
