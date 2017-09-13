$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var phraseInput = $("input#phrase").val();
    $(".phrase").text(phraseInput);
    // $("#phrase").addClass();
    //
    // var capitalize = function(input){
    //   var capPhrase = input.toUpperCase()
    // };

    $("#shout").show();

    event.preventDefault();
  });
});
