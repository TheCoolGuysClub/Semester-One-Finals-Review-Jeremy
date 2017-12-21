  // Question One
  let plus = $("#plus"); 
  let minus = $("#minus"); 
  let points = $("#points"); 
  let num = 0;
  plus.on("click", function() { 
    let points = $("#points"); 
    num += 1;
    points.html("points:" + num);
  })
  minus.on("click", function() {
    let points = $("#points");
    num -= 1; 
    points.html("points:" + num);
  })


//Question 2
let submit = $("#submit");
submit.on("click", function() {
  let input = $("#input").val();
  let delbut = $("<button> delete </button>");
  let text = $("<section > </section>");
  text.append(input).append(delbut);
  $("#input").val(" ");
  $("#add").append(text);
  delbut.on("click", function() {
    text.html(" ");
  })


})


//Question 3

let open = $("#open");
let dropdown = $("#dropdown");
open.on("click", function() {

  dropdown.toggleClass("moveright");
})


let boxes = $(".box");
$("#page2").on("click", function(){

    boxes.addClass("boxpage2");
    boxes.html("page 2");

})

$("#page1").on("click", function(){
  boxes.removeClass("boxpage2");
  boxes.html("page 1");
})

 // .toggle();

//Question 4
let box1 = $(".one");
let box2 = $(".two");
let box3 = $(".three");
let box4 = $(".four");



box1.on("click", function() {
  box1.toggleClass("firstani");
})

box2.on("click", function() {
  box2.toggleClass("secondani");
})

box3.on("mouseover", function() {
  box3.addClass("secondani");
})

box3.mouseout(function(){
  box3.removeClass("secondani");
})


box4.on("click", function() {

  box4.toggleClass("fourthani");
})
