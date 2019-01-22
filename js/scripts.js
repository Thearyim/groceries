// $(document).ready(function() {
//   $("#formOne").submit(function(event) {
//     event.preventDefault();
//     var items = ["item1","item2","item3","item4","item5","item6"];
//
//     items.forEach(function(item) {
//       var userInput = $("input#" + item).val();
//       $(".result").append.toUpperCase((userInput));
// });
//     $(".result").show();
//   });
// });

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var items = ["item1","item2","item3","item4","item5","item6"];
    var newItems = [];
    items.forEach(function(item) {
      var userInput = $("input#" + item).val();
      newItems.push(userInput);
});

var uppCase = newItems.map(function(item){
  return item.toUpperCase();
});

uppCase.forEach(function(item){
  $("ul#result").append("<li>" + item + "</li>");
});

    $(".result").show();

  });
});
