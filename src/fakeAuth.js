const userData = { username: "prabesh", password: "admin" };

const checkCredentials = (data) => {
  // console.log(data);

  if (data.email === userData.username && data.password === userData.password) {
    var isAuth = true;
  } else {
    var isAuth = false;
  }
  return isAuth;
};

export default checkCredentials;
