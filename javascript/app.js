$(function() {
  $('#tenNumbers').hide();
  $('#sortup').hide();
  $('#sortdown').hide();
  $('#sort').hide(); 

  $('#submit').on('click', function() {
    userBlocks = parseInt ($('#userChoice').val());
    $('#userNumber').fadeOut('fast');
    $('#tenNumbers').slideDown('slow');
  });  

  $('#tenNumbers').on('click', function() {
    $('#tenNumbers').fadeOut('fast');
    $('#sortup').show('slow');
    $('#sortdown').show('slow'); 
    generator(userBlocks);
  });

  $('#sortup').on('click', function() {
    ascending = false;
    sort();
    $('#sortup').hide();
    $('#sortdown').hide();
    $('#sort').show();
  });

  $('#sortdown').on('click', function() {
    ascending = true;
    sort();
    $('#sortup').hide();
    $('#sortdown').hide();
    $('#sort').show();
  });

  $('#sort').on('click', function() {
    sort();
  });

  var userBlocks = 10;

  var ascending = true;

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

    ascending = !ascending

    toSort.sort(function (a, b) {
      a = parseInt($(a).text());
      b = parseInt($(b).text());
      return (ascending) ? a - b : b - a;
   });
   $('.sortTable').html(toSort);
  }

})

