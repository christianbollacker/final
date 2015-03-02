$(function() {
  $('#tenNumbers').hide();
  $('#sort').hide();

  $('#submit').on('click', function() {
    userBlocks = ($('input').val());
    $('#userNumber').fadeOut('fast');
    $('#tenNumbers').slideDown('slow');
  });

  $('#tenNumbers').on('click', function() {
    $('#tenNumbers').fadeOut('fast');
    $('#sort').slideDown('slow');
    generator(choice());
  });

  $('#sort').on('click', function() {
    sort();
  });



  var userBlocks = 10;




  function choice () {
    return (parseInt(userBlocks));
  }


  function Item() {
      this.value = (Math.floor(Math.random() * 100));
      this.toHTML = function() {
        return ("<div class='item'>" + this.value + "</div>");

      }
    }


  function generator(num) {
      for (var i = num; i > 0; i--) {
        var item = new Item();
        $('.sortTable').append(item.toHTML());
      }
  }

  function sort() {
    var toSort = $('.sortTable div');
    toSort.sort(function (a, b) {
      a = parseInt($(a).text());
      b = parseInt($(b).text());
      return b - a;
   });
   $('.sortTable').html(toSort);
  }

})

