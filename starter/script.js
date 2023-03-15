var currentTime = moment().format("H");
var currentDate = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDate);
var eachRow = $("textarea");

$(".saveBtn").on("click", function(){
  var textInput = $(this).siblings(".description").val();
  var timeStamp = $(this).parent().attr("id");
  localStorage.setItem(timeStamp, textInput);
});
//cant figure out why class add is not functioning correctly so removed function whilst debugging
var realTime = function() {
      if (currentTime < currentHour){
        $(eachRow).addClass("past");
        $(eachRow).removeClass("present");
        $(eachRow).removeClass("future");
        } 
        else if (currentTime === currentHour){
          $(eachRow).removeClass("past");
          $(eachRow).removeClass("future");
          $(eachRow).addClass("present");
        } 
        else {
          $(eachRow).removeClass("past");
          $(eachRow).removeClass("present");
          $(eachRow).addClass("future");
}
};
realTime()

var savedItems = 
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#1 .description").val(localStorage.getItem("1"));
$("#2 .description").val(localStorage.getItem("2"));
$("#3 .description").val(localStorage.getItem("3"));
$("#4 .description").val(localStorage.getItem("4"));
$("#5 .description").val(localStorage.getItem("5"));