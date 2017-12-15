  // Question One
  let plus = $("#plus"); let minus = $("#minus"); let points = $("#points"); let num = 0;
  plus.on("click", function() { let points = $("#points"); num += 1; points.html("points:" + num);})
  minus.on("click", function() {let points = $("#points");num -= 1; points.html("points:" + num);})


//Question 2
let submit = $("#submit");
submit.on("click", function() {
  let input = $("#input").val();
  let x = $("<button> delete </button>");
  let text = $("<section> </section>");
  text.append(input).append(x);
  $("#input").val(" ");
  $("#add").append(text);
  x.on("click", function() {
    text.html(" ");
  })


})


//Question 3
let page1ps = $(".page1");
let page2ps = $(".page2");
console.log("sdafsad");
$("#page2").on("click", function(){

 // .toggle();
})
