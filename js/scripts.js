$(document).ready(function(){
  $("#numberForm").submit(function(event){
    event.preventDefault();
    let countBy = parseInt($("input#countBy").val());
    let countTo = parseInt($("input#countTo").val());
    console.log("Count By Number: ", countBy);
    console.log("Count To Number: ", countTo);

    alert("Connected!");
    for (var i = 0; i <= countTo; i += countBy){
      console.log(i);
      $('ul').append('<li>' + i + '</li>');
    }

  });
});
