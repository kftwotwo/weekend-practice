$(document).ready(function() {
  $("#input").submit(function(event) {
    var nameSpan = $("input#name").val();
    var phoneSpan = $("input#phone").val();
    var emailSpan = $("input#email").val();
    var subjectSpan = $("input#subject").val();
    var messageSpan = $("input#message").val();

    $(".name").text(nameSpan);
    $(".phone").text(phoneSpan);
    $(".email").text(emailSpan);
    $(".subject").text(subjectSpan);
    $(".message").text(messageSpan);

    $("#inputForm").hide();
    $("#outputForm").show();
  });
  event.preventDeafult();
});
