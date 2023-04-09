

export const Validate = (userData) => {

  const error = {};
  const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{3})+$/;
  const validPassword = /^(?=.*\d).{6,10}$/;
  
  if (userData.userName.length > 35) {
    error.userName = "No puede superar los 35 caracteres";
  } else if(! validEmail.test(userData.userName)) {
    error.userName = "Email Inválido";
  } else {
    error.userName = "";
  }
 
  
  //password
  if (!validPassword.test(userData.password))
    error.password = "el password debe tener entre 6 y 10 caracteres";
  else {
    error.password = "";
  }
  
  
  return error;
}


