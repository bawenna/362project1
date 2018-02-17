$('#signup').on('submit',
  function(e) {
    var email = {
      val: $('#email').val(),
      pattern: /^.+@.+$/
    }
    var interest = {
      val: $('#interest').val()
    }
    var condition = {
      email: 0,
      interest: 0
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
    else {
      condition.email = 1;
    }
    if((interest.val) === "")
    {
      $('.false').remove();
      $('#deals').append(interest_fail);
      return false;
    }
    else {
      condition.interest = 1;
    }
    if(condition.email === 1 && condition.interest === 1)
    {
    $('.false').remove();
    $('#submit').hide();
    $('#signup').append(msg);
    }
  }
);
