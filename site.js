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
      alert('Please match the email format of "you@example.com"');
      return false;
    }
    if(!(phoneVal.match(phonePattern)))
    {
      console.log("Trying");
      alert('Please match the phone format of "xxx-xxx-xxxx"');
      return false;
    }
    else
    {
    document.getElementById('submit').style.visibility = 'hidden';
    $('#signup').append(msg);
    }
  }
);
