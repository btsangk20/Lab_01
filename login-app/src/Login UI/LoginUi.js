import "./LoginUi.css";
import profile from "./../image/logo.png";
import email from "./../image/email.jpg";
import pass from "./../image/pass.png";
import google from "./../image/google.png";
function LoginUi() {
  return (
    <div className="login-page">
      <div className="login-container">
        <div>
          <div className="login-imgs">
            <div className="container-image">
              <img
                src={profile}
                alt="profile"
                className="login-profile-image"
              />
            </div>
          </div>
          <div>
            <h1>Login</h1>
            <div>
              <img src={email} alt="email" className="login_email-image" />
              <input
                type="text"
                placeholder="Enter email"
                className="login_email-input"
              />
            </div>

            <div className="second-input">
              <img src={pass} alt="pass" className="login_password-image" />
              <input
                type="password"
                placeholder="Enter password"
                className="login_password-input"
              />
            </div>
            <div className="third-input">
              <img src={google} alt="google" className="login_google-image" />
              <input
                type="button"
                value="Login with google"
                className="login_google-input"
              />
            </div>

            <div className="login-button">
              <button>Login</button>
            </div>
            <p className="link">
              <a href="#" className="login__signup-link">
                Forgot password?
              </a>{" "}
              Or{" "}
              <a href="#" className="login__signup-link">
                Create a new account
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginUi;
