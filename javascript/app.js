$(function() {
  $('#sort').hide();

  $('#tenNumbers').on('click', function() {
    $('#tenNumbers').fadeOut('fast');
    $('#sort').slideDown('slow');
    generator(10);
  });

  $('#sort').on('click', function() {
    sort();
  });



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
    var toSort = $('.sortTable')
    var length = toSort.length;
  for(var i = 1; i < length; ++i) {
    var temp = $('.item:nth-child(' + i + ')').text();
    var j = $('.item:nth-child(' + i - 1 ')').text();
    for(; j >= 0 && $('.item:nth-child(' + j + ')').text() > temp; --j) {
      values[j+1] = values[j];
    }
    values[j+1] = temp;
  }
};

})

