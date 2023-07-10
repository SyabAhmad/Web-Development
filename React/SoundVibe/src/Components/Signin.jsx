import "./Signin.css";
import linkedin from "../assets/linkedin.png";
function Signin() {
  return (
    <>
      <div className="panel">
        <div>
          <h2>Sign in</h2>
        </div>
        <div className="usingSocialMedia">
          <div className="justForBorder">
            <img width={"30px"} src={linkedin} alt="google" id="google" />
            <label htmlFor="google">Google</label>
          </div>
          <div className="justForBorder">
            <img width={"30px"} src={linkedin} alt="facebook" id="facebook" />
            <label htmlFor="facebook">Facebook</label>
          </div>
          <hr />
        </div>
        <div className="costumAuth">
          <legend>
            <input type="text" placeholder="Email address" />
            <input type="text" placeholder="password" />
          </legend>
          <a href="#">Forgot your password...</a>
          <button>Sign in</button>
          <a href="#">Already have an account</a>
        </div>
      </div>
    </>
  );
}

export default Signin;
