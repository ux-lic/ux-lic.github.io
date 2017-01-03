//show hide funtion buttons
$('table tbody tr').mouseover(function() {
    $(this).find('td .btn-group').removeClass('hover-button');
});
$('table tbody tr').mouseout(function() {
    $(this).find('td .btn-group').addClass('hover-button');
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
  // notifire({
  // 	msg: 'UID Copied to clipboard',
  // 	position: 'right',
  //   timeout: 2000,
  //   callback: function() {
  //     notifire({
  //     	msg: key,
  //     	position: 'right',
  //       timeout: 5000
  //     })
  //   }
  // });
}
