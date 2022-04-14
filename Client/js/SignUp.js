(function ($) {
  "use strict";


  /*==================================================================
  [ Focus Contact2 ]*/
  $('.input100').each(function () {
    $(this).on('blur', function () {
      if ($(this).val().trim() != "") {
        $(this).addClass('has-val');
      }
      else {
        $(this).removeClass('has-val');
      }
    })
  })


  /*==================================================================
  [ Validate ]*/
  var input = $('.validate-input .input100');

  $('.validate-form').on('submit', function () {
    var check = true;

    for (var i = 0; i < input.length; i++) {
      if (validate(input[i]) == false) {
        showValidate(input[i]);
        check = false;
      }
    }
    return check;
  });
  $('.validate-form .input100').each(function () {
    $(this).focus(function () {
      hideValidate(this);
    });
  });
  function validate(input) {
    if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
      if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
        return false;
      }
    }
    else {
      if ($(input).val().trim() == '') {
        return false;
      }
    }
  }
  function showValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).addClass('alert-validate');
  }
  function hideValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).removeClass('alert-validate');
  }
})(jQuery);

function showSpeakerFields() {
  let ch = document.getElementById('ckb1');
  if (ch.checked) {
    document.getElementById('userNameFld').style.display = 'block';
    document.getElementById('addressFld').style.display = 'block';
  } else {
    document.getElementById('userNameFld').style.display = 'none';
    document.getElementById('addressFld').style.display = 'none';
  }
}

function signUserUp() {
  let mail = document.getElementById('mailFld').value;
  let mailVal = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
  if(mailVal.test(mail)) {
    let userName = document.getElementById('userNameFldTxt').value;
    let psw = document.getElementById('pswFld').value;
    let addrs = document.getElementById('addressFldTxt').value;
  } else {
    alert(`Invalid email address: ${mail}`);
  }
}