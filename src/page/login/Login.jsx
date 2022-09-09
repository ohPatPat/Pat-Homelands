import { useForm } from "react-hook-form";
import { useAuth } from "./Auth.js";
import { Meta } from "../../comp/Meta.jsx";
import axios from "axios";

export const Login = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { loginData, setLoginData } = useAuth();

  const sendLoginRequest = async (data, e) => {
    e.target.reset();
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);
    const url = "https://api.mediehuset.net/token";
    const result = await axios.post(url, formData);
    handleSessionData(result);
  };

  const handleSessionData = (res) => {
    console.log(res);
    if (!res.message) {
      setLoginData(res.data);
      sessionStorage.setItem("token", JSON.stringify(res.data));
    }
  };

  const logOut = () => {
    sessionStorage.removeItem("token");
    setLoginData("");
  };
  // tola Tordis
  console.log(loginData.username);

  if (loginData) {
    if (loginData.username === "pada" || loginData.username === "Patrik") {
      loginData.username = "Patrik";
      console.log(loginData.username);
    } else {
      loginData.username = "Lærer";
      console.log(loginData.username);
    }
  }

  return (
    <Meta title={props.title}>
      <p>Indtast dit brugernavn og adgangskode for at logge ind</p>
      {!loginData && !loginData.username ? (
        // Closures funtion here - I end a imported funktion (handleSubmit) via a new funktion (sendLoginRequest)
        <form onSubmit={handleSubmit(sendLoginRequest)}>
          <div className="InputWrapper">
            <input
              onFocus={(e) => (e.target.value = "")}
              type="text"
              id="username"
              // className={e.target.value ? "Correct" : "NotCorrect"}

              placeholder="Brugernavn"
              {...register("username", { required: true })}
            />
            {errors.username && <span>Du skal udfylde dit brugernavn!</span>}
          </div>
          <div className="InputWrapper">
            <input
              onFocus={(e) => (e.target.value = "")}
              type="password"
              id="password"
              placeholder="Adgangskode"
              {...register("password", { required: true })}
            />
            {errors.password && <span>Du skal udfylde din adgangskode!</span>}
          </div>
          <div>
            <button type="submit">Login</button>
            <button type="reset">Annuller</button>
          </div>
        </form>
      ) : (
        <div>
          <p>
            Du er logget ind som <i>{loginData.username}</i>
          </p>
          <button id="LogoutButton" onClick={logOut}>
            Log ud
          </button>
        </div>
      )}
    </Meta>
  );
};
