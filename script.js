var Work = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];
var date = moment().format("MMMM Do YYYY, h:mm:ss a");
var entry = "";
$("#currentDay").text(date);

var time = setInterval(time, 1000);

renderSchedule();
Init();

function time() {
  date = moment().format("MMMM Do YYYY, h:mm:ss a");
  $("#currentDay").text(date);
}

$("#0").on("click", function (event) {
  event.preventDefault();

  var entry = $("#Time9").val();

  localStorage.setItem("9", entry);
});

$("#1").on("click", function (event) {
  event.preventDefault();

  var entry = $("#Time10").val();

  localStorage.setItem("10", entry);
});

$("#2").on("click", function (event) {
  event.preventDefault();

  var entry = $("#Time11").val();

  localStorage.setItem("11", entry);
});

$("#3").on("click", function (event) {
  event.preventDefault();

  var entry = $("#Time12").val();

  localStorage.setItem("12", entry);
});

$("#4").on("click", function (event) {
  event.preventDefault();

  var entry = $("#Time1").val();

  localStorage.setItem("1", entry);
});

$("#5").on("click", function (event) {
  event.preventDefault();

  var entry = $("#Time2").val();

  localStorage.setItem("2", entry);
});

$("#6").on("click", function (event) {
  event.preventDefault();

  var entry = $("#Time3").val();

  localStorage.setItem("3", entry);
});

$("#7").on("click", function (event) {
  event.preventDefault();

  var entry = $("#Time4").val();

  localStorage.setItem("4", entry);
});

$("#8").on("click", function (event) {
  event.preventDefault();

  var entry = $("#Time5").val();

  localStorage.setItem("5", entry);
});

function renderSchedule() {
  for (var i = 0; i < Work.length; i++) {
    var row = $("<div>").addClass("row time-block");
    $("<div>").addClass("col-1 hour").text(Work[i]).appendTo(row);
    $("<textarea>")
      .addClass("col-10")
      .attr("id", "Time" + Work[i])
      .appendTo(row);
    $("<button>")
      .addClass("col-1 saveBtn far fa-save")
      .attr("id", i)
      .appendTo(row);
    row.appendTo($(".container"));
  }
}

function Init() {
  for (var i = 0; i < Work.length; i++) {
    entry = localStorage.getItem(Work[i], 0) || "";

    $("#Time" + Work[i]).text(entry);
  }
  var x = 0;
  for (var i = 9; i < 18; i++) {
    var hour = moment().hour();
    console.log(x);
    console.log(hour);
    if (hour > i) {
      $("#Time" + Work[x]).addClass("past");
    } else if (hour === i) {
      $("#Time" + Work[x]).addClass("present");
    } else {
      $("#Time" + Work[x]).addClass("future");
    }
    x++;
  }
}
