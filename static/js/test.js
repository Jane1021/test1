function Success(type, text) {
  Swal.fire({
    icon: 'success',
    title: type,
    text: text
  });
}




function CheckRegister(){
  let createname = document.getElementById('createname').value.length;
  let createaccount = document.getElementById('createaccount').value.length;
  let createpassword = document.getElementById('createpassword').value.length;
  let checkpassword = document.getElementById('checkpassword').value.length;
  if (createname == 0 && createaccount == 0 && createpassword == 0 && checkpassword == 0){
    alert('請輸入資料');
    return false
  } 
  else if (createname == 0){
    alert('請輸入使用者名稱');
    return false
  }
  else if (createaccount == 0){
    alert('請輸入帳號');
    return false
  }
  else if (createpassword == 0){
    alert('請輸入密碼');
    return false
  }
  else if (checkpassword == 0){
    alert('請再次輸入密碼');
    return false
  }
  else{
    return true
  }
  
}


function CheckSubmit(){
  let account = document.getElementById('account').value.length;
  let password = document.getElementById('password').value.length;
  if (account == 0 && password == 0){
    alert('請輸入資料');
    return false
  } 
  else if (account == 0){
    alert('請輸入帳號');
    return false
  }
  else if (password == 0){
    alert('請輸入密碼');
    return false
  }
  else{
    return true
  }
}

