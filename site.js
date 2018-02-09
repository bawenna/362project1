$('#signup').on('submit',
  function(e) {
    var emailPattern = /^.+@.+$/;
    var emailVal = $('#email').val();
    var phonePattern = /\d{3}[\-]\d{3}[\-]\d{4}/;
    var phoneVal = $('#phone').val();
    var msg = '<p id="msg"> The form was submitted! </p>';
    e.preventDefault();
    if(!(emailVal.match(emailPattern)))
    {
      console.log("Trying to validate email");
      $('.false').remove();
      $('#emailsec').append('<p class="false">Please match the email format of "you@example.com"</p>');
      return false;
    }
    if(!(phoneVal.match(phonePattern)))
    {
      console.log("Trying");
      $('.false').remove();
      $('#phonesec').append('<p class="false">Please match the phone format of "xxx-xxx-xxxx"</p>');
      return false;
    }
    else
    {
    document.getElementById('submit').style.visibility = 'hidden';
    $('#signup').append(msg);
    }
  }
);
