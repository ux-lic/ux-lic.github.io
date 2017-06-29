//show hide funtion buttons on tables
$('table tbody tr').mouseover(function() {
    $(this).find('td .btn-group').removeClass('hover-button');
});
$('table tbody tr').mouseout(function() {
    $(this).find('td .btn-group').addClass('hover-button');
});

//toggle toggle-mask button on password input
$('.password input').bind("keyup change focusout", function(e) {
  if($(this).val().length) {
    $('.password > .toggle-mask').css('display','inline');
  } else {
    $('.password > .toggle-mask').css('display','none');
}
});

// Copy to clipboard
function copyKey($this) {
  var key = $($this).closest('td').prev('td').text();
    $('body').append("<input id='dummy' value="+key+">");

  var dummy = $('#dummy');
  dummy.select();
  document.execCommand("copy");
  dummy.remove();

  toastr.success(key,'UID Copied to clipboard')
}

//toggle password masking
function toggleMask($this) {
  var $this = $($this);
  if($this.text() == 'show') {
    $('.password input').attr('type','text');
    $this.text('hide');
  } else {
    $('.password input').attr('type','password');
    $this.text('show');
  }
}

//prototype example of requesing a key behaviour
$('#proto-request').click(function() {
  $(this).fadeOut(function() {
    $(this).text('Pending Approval');
    $(this).addClass('btn-default').removeClass('btn-dark-blue-stroke').attr('disabled','disabled');
  });

  $(this).fadeIn();
  toastr.success('Awaiting confirmation of approval','Key request made');
})

//Application name ID gen
$('.modal .app-name').bind("keyup change", function(e) {
  var str = $(this).val(),
  str = str.replace(/\s+/g, '-').toLowerCase(),
  str = str.replace(/'+/g,''),
  array = ["alpha", "bravo","charlie","delta","echo","foxtrot"];

  if($('.modal .app-id').val().length < 32) {
    $('.modal .app-id').val(array[Math.floor(Math.random() * array.length)]+'-'+str);
  } else {
    $('.modal .app-id').removeClass('app-id');
  }
})



$(function () {
  $('[data-toggle="popover"]').popover()
});
