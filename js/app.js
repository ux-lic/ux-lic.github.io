//show hide funtion buttons
$('table tbody tr').mouseover(function() {
    $(this).find('td .btn-group').removeClass('transparent');
});
$('table tbody tr').mouseout(function() {
    $(this).find('td .btn-group').addClass('transparent');
});

// Copy to clipboard
function copyKey($this) {
  var key = $($this).closest('td').prev('td').text();
    $('body').append("<input id='dummy' value="+key+">");

  var dummy = $('#dummy');
  dummy.select();
  document.execCommand("copy");
  dummy.remove();

  notifire({
  	msg: 'UID Copied to clipboard',
  	position: 'right',
    timeout: 2000
  });
}
