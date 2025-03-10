import "./navbar.css";
import "./medianavbar.css"
import img1src from "./assets/logo.png";
import parachute from "./assets/parachute.png";
import bg from "./assets/bg.png";
import conatctlogo from "./assets/contact.png";
import camping from "./assets/camping.png";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { GoogleLogin } from '@react-oauth/google';
function Navbar() {
  let [loginbutton, setLoginbutton] = useState(true);
  const onChange = () => {
    console.log("not robot");
    setLoginbutton(() => false);
  };
  let [visibletiylogin, setVisibletiylogin] = useState("hidden");
  let [scrollicon, setScrollicon] = useState("hidden");
  let [login, setLogin] = useState("Login");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    if (scrollY > 100) {
      setScrollicon("inherit");
    } else {
      setScrollicon("hidden");
    }
  });
  function visibleloginpage() {
    setVisibletiylogin(visibletiylogin == "hidden" ? "inherit" : "hidden");
  } 
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setVisibletiylogin(visibletiylogin == "hidden" ? "inherit" : "hidden");
    }
  });
  function exitloginpage(){
    setVisibletiylogin("hidden");
  }
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "95e4827c-30df-4f20-8224-282a2dce00b9");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.success) {
      setResult("Logged in ");
      event.target.reset();
      setLogin(<i class="usericon fa-solid fa-user"></i>);

    } else {
      console.log("Error", data);
      setResult("Error");
    }
    success();
    setLoginbutton(() => true);
  };
  let [visibletiysuccess, setVisibletiysuccess] = useState("hidden");
  function success() {
    setResult("Logged in ");
    displaysucess();
    exitloginpage();
  }
  function displaysucess() {
    setVisibletiysuccess("inherit");
    setTimeout(closesucess, 3000);
  }
  function closesucess() {
    setVisibletiysuccess("hidden");
  }
  const [vsidebar,setVsidebar]=useState("hidden");
  function sidebar(){
    setVsidebar(vsidebar == "hidden" ? "inherit" : "hidden");
  }
  return (
    <>
      <div className="Home">
        <div className="navbar">
          <div className="sucess" style={{ visibility: visibletiysuccess }}>
            Success
          </div>
          <div className="logo">
            <img src={img1src} className="logoimg" alt="logo" />
            <p>Beyond The Horizon</p>
          </div>
          <div className="bars"onClick={sidebar}><i class="fa-solid fa-bars"></i></div>
          <ul className="navbarr">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#headerdetinations">Destination</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#packages">Packages</a>
            </li>
            <li>
              <button onClick={visibleloginpage} className="Login">
                {login}
              </button>
            </li>
          </ul>
        </div>
        <div className="sidebar"  style={{visibility:vsidebar}}></div>
        <img src={camping} className="campingimg" alt="" />
        <div className="loginpage" style={{ visibility: visibletiylogin }}>
          <div className="loginheading">
            <span className="loginname">LOGIN</span>
            <i class="fa-solid fa-xmark" onClick={exitloginpage}></i>{" "}
          </div>
          <div className="input">
            <form className="loginform" onSubmit={onSubmit}>
              <input
                type="email"
                className="email"
                name="email"
                placeholder="Email"
                required
              />
              <span className="user">
                <i class="fa-solid fa-user"></i>
              </span>
              <br></br>
              <input
                type="password"
                className="password"
                name="name"
                placeholder="Password"
                required
              />
              <span className="passwordicon">
                <i class="fa-solid fa-lock"></i>
              </span>

              <div className="loginbwn">
                <button type="submit" disabled={loginbutton}>
                  Login
                </button>
              </div>
            </form >
            <div className="captcha">
              <ReCAPTCHA
                sitekey="6LcyvJsqAAAAABUlNSGx9Nu3rhd-X8yFd6HtsHnf"
                onChange={onChange}
              />
            </div>
            <span className="result">{result}</span>
          </div>
          <div className="or">
            <div className="horizondallineright"></div>or
            <div className="horizondallineleft"></div>
          </div>
          <div className="singndiv">
          <div className="googlesign">
        <GoogleLogin 
            onSuccess={credentialResponse => {
              success();
              setLoginbutton(() => true);
            console.log(credentialResponse);
          }}
            onError={() => {
            console.log('Login Failed');
            }}
          />
          </div>
          </div>
        </div>
        <div className="center">
          <div className="contact" >
            <a href="#contact" className="acontact">Contact Us</a><img src={conatctlogo} className="conatctlogo" alt="" />
          </div>
          <div className="photos">
            <div className="dot"></div>
            <div className="dot1"></div>
            <div className="dot2"></div>
            <img src={parachute} className="parachute" alt=""/>
            <img src={bg} className="bg" alt="" />
          </div>
          <div className="content">
            <p className="save">FIND YOUR PATH</p>
            <p className="Make">
              Make Your <span className="holiday">Holiday</span>
              <br />
              Memorable
            </p>
            <p className="Thinking">
              Thinking of taking a break time every day's busy life. Planning to
              go
              <br />
              out of the country with your loved ones to have some fun and
              quality <br /> time in a cost-effective way.
            </p>
            <div className="moredetail">
              Explore More <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="scroototop" style={{ visibility: scrollicon }}>
            <a href="#">
              <i class="fa-solid fa-arrow-up"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
