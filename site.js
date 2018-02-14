$('#signup').on('submit',
  function(e) {
    var email = {
      val: $('#email').val(),
      pattern: /^.+@.+$/
    }
    var interest = {
      val: $('#interest').val()
    }
    var msg = '<p id="msg"> The form was submitted! </p>';
    var email_fail = '<p class="false">Please match the email format of "you@example.com"</p>';
    var interest_fail = '<p class="false">Please select one from the drop down menu</p>'
    e.preventDefault();
    if(!(email.pattern).test(email.val))
    {
      console.log("Trying to validate email");
      $('.false').remove();
      $('#emailsec').append(email_fail);
      return false;
    }
    if((interest.val) === "0")
    {
      $('.false').remove();
      $('#deals').append(interest_fail);
      return false;
    }
    else
    {
    $('.false').remove();
    $('#submit').hide();
    $('#signup').append(msg);
    }
  }
);
