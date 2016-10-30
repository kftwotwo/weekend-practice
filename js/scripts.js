$(document).ready(function() {
  $("#outputForm").hide();
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    var nameSpan = $("#name").val();
    var phoneSpan = $("#phone").val();
    var emailSpan = $("#email").val();
    var subjectSpan = $("#subject").val();
    var messageSpan = $("#message").val();

    $("#nameOut").text(nameSpan);
    $("#phoneOut").text(phoneSpan);
    $("#emailOut").text(emailSpan);
    $("#subjectOut").text(subjectSpan);
    $("#messageOut").text(messageSpan);
    $("#inputForm").hide();
    $("#outputForm").show();
  });
});
// write a function 
