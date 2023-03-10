import "./styles.css";
import { useState } from "react";

function Login() {
  const [english, setEnglish] = useState(true);
  const [loginBox, setLoginBox] = useState(true);

  let alternateBoxes = () => {
    if (loginBox) {
      document.getElementById("centerBox").style.height = "90vh";
      document.getElementById("centerBox").style.marginTop = "5vh";
      setLoginBox(false);

      document.getElementById("loginBox").style.height = "0px";
      document.getElementById("loginBox").style.padding = "0px";
      document.getElementById("signupBox").style.height = "fit-content";
      document.getElementById("signupBox").style.padding = "20px";
    } else {
      document.getElementById("centerBox").style.height = "74vh";
      document.getElementById("centerBox").style.marginTop = "13vh";
      setLoginBox(true);

      document.getElementById("loginBox").style.height = "fit-content";
      document.getElementById("loginBox").style.padding = "20px";
      document.getElementById("signupBox").style.height = "0px";
      document.getElementById("signupBox").style.padding = "0px";
    }
  };

  let storeUser = () => {
    var name = document.getElementById("nameSignup").value;
    var email = document.getElementById("emailSignup").value;
    var password = document.getElementById("passwordSignup").value;
    console.log(password.length);

    var usersList = JSON.parse(localStorage.getItem("usersList")) || [];

    var doAble = true;

    if (password.length < 8) {
      document.getElementById("passwordWarning").style.display = "block";
      doAble = false;
    }

    var emailBool = true;

    for (let a = 0; a < usersList.length; a++) {
      let ele = usersList[a];
      if (ele.email === email) {
        emailBool = false;
        break;
      }
    }

    if (emailBool) {
    } else {
      document.getElementById("emailWarning").style.display = "block";
      doAble = false;
    }

    if (name.length < 4) {
      document.getElementById("nameWarning").style.display = "block";
      doAble = false;
    }

    if (doAble) {
      usersList.push({ name: name, email: email, password: password });

      localStorage.setItem("usersList", JSON.stringify(usersList));

      document.getElementById("centerBox").style.height = "74vh";
      document.getElementById("centerBox").style.marginTop = "13vh";
      setLoginBox(true);

      document.getElementById("loginBox").style.height = "fit-content";
      document.getElementById("loginBox").style.padding = "20px";
      document.getElementById("signupBox").style.height = "0px";
      document.getElementById("signupBox").style.padding = "0px";
    }
  };

  let loginUser = () => {
    var email = document.getElementById("emailLogin").value;
    var password = document.getElementById("passwordLogin").value;

    var usersList = JSON.parse(localStorage.getItem("usersList")) || [];

    for (let a = 0; a < usersList.length; a++) {
      var ele = usersList[a];
      if (ele.email === email && ele.password === password) {
        localStorage.setItem("isUserLoggedIn", true);
        localStorage.setItem(
          "loggedInUserDetails",
          JSON.stringify({ name: ele.name, password: password, email: email })
        );
        break;
      }
    }
  };

  let hideEmailWarning = () => {
    document.getElementById("emailWarning").style.display = "none";
  };

  let hideNameWarning = () => {
    document.getElementById("nameWarning").style.display = "none";
  };

  let hidePasswordWarning = () => {
    document.getElementById("passwordWarning").style.display = "none";
  };

  let changeLanguage = () => {
    if (english) {
      setEnglish(false);
    } else {
      setEnglish(true);
    }
  };

  return (
    <div>
      <img
        id="backgroundImage"
        src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.home_page_bg_desktop.png-26-4770753d59b970e1.png"
      />

      <div id="centerBox">
        <div>
          <img
            id="logoImage"
            src="https://download.logo.wine/logo/Quora/Quora-Logo.wine.png"
          />

          <p id="sloganPTag">
            {english
              ? "A place to share knowledge and better understand the world"
              : "??????????????? ?????????????????? ?????? ?????????????????? ?????? ??????????????? ????????? ?????? ??????????????? ?????? ?????? ??????????????? ?????????"}
          </p>
          <div id="loginBox">
            <p className="aboveInputBoxPTag">{english ? "Email" : "????????????"}</p>

            <input
              id="emailLogin"
              className="loginInputBox"
              type="email"
              placeholder={english ? "Your email" : "???????????? ????????????"}
            />

            <p className="aboveInputBoxPTag">
              {english ? "Password" : "?????????????????????"}
            </p>

            <input
              id="passwordLogin"
              className="loginInputBox"
              type="password"
              placeholder={english ? "Your password" : "???????????? ?????????????????????"}
            />

            <button onClick={loginUser} id="logInButton">
              {english ? "Log In" : "????????? ?????? ????????????"}
            </button>

            <p onClick={alternateBoxes} id="createNewAccountPTag">
              {english ? "create new account" : "????????? ???????????? ???????????????"}
            </p>
          </div>

          <div id="signupBox">
            <p className="aboveInputBoxPTag">{english ? "Name" : "?????????"}</p>

            <input
              onClick={hideNameWarning}
              id="nameSignup"
              className="loginInputBox"
              placeholder={english ? "Your name" : "???????????? ?????????"}
            />
            <p id="nameWarning" className="signupWarning">
              {english ? "*name is too small" : "*????????? ???????????? ???????????? ??????"}
            </p>

            <p className="aboveInputBoxPTag">{english ? "Email" : "????????????"}</p>

            <input
              onClick={hideEmailWarning}
              id="emailSignup"
              className="loginInputBox"
              type="email"
              placeholder={english ? "Your email" : "???????????? ????????????"}
            />
            <p id="emailWarning" className="signupWarning">
              {english
                ? "*this email is already registered"
                : "*?????? ???????????? ???????????? ?????? ?????? ????????????????????? ??????"}
            </p>

            <p className="aboveInputBoxPTag">
              {english ? "Create Password" : "????????????????????? ???????????????"}
            </p>

            <input
              onClick={hidePasswordWarning}
              id="passwordSignup"
              className="loginInputBox"
              type="password"
              placeholder={
                english ? "Create your password" : "???????????? ????????????????????? ???????????????"
              }
            />
            <p id="passwordWarning" className="signupWarning">
              {english
                ? "*this email is already registered"
                : "*????????????????????? ????????? ?????? ?????? ?????? ?????? ??????????????? ???????????? ???????????????"}
            </p>

            <button onClick={storeUser} id="signupButton">
              {english ? "Sign Up" : "???????????? ?????? ????????????"}
            </button>

            <p onClick={alternateBoxes} id="alreadyHaveAnAccountPTag">
              {english ? "already have an account? Sign in" : "??????????????? ????????????"}
            </p>
          </div>
        </div>

        <div>
          <p onClick={changeLanguage} id="languagePTag">
            {english ? "??????????????????" : "English"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
