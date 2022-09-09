import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../page/login/Auth.js";
import { Login } from "../../page/login/Login.jsx";
import Arrow from "../../assets/icons/Homelands_ArrowLeftIcon.svg";

export const Comments = () => {
  const [isOpen, setOpen] = useState(false);
  const { loginData } = useAuth(Login);
  const handleToggle = () => {
    setOpen(!isOpen);
  };

  const [isFetchComments, setFetchComments] = useState();

  useEffect(() => {
    const getFetchComments = async () => {
      try {
        const result = await axios.get(
          `https://api.mediehuset.net/homelands/reviews`
        );
        setFetchComments(result.data.items);
        console.log(result.data.items);
      } catch (err) {
        console.error(err);
      }
    };
    getFetchComments();
  }, []);

  return (
    <section id="Comments">
      <h2 class="Titles">Det siger kunderne:</h2>
      <section id="CommentsBody">
        {isFetchComments &&
          isFetchComments.slice(0, 1).map((apiRoute, i) => {
            return (
              <React.Fragment key={i}>
                <strong>{apiRoute.title}</strong>
                <p>{apiRoute.content}</p>
                <small>
                  {apiRoute.user.firstname} {apiRoute.user.lastname},{" "}
                  {apiRoute.created_friendly}
                </small>
              </React.Fragment>
            );
          })}

        <section
          id={loginData.access_token ? "Visable" : "notVisable"}
          className={isOpen ? "Active" : "notActive"}
        >
          <img src={Arrow} alt="ArrowLeft" onClick={handleToggle} />
          <form>
            <div>
              <input placeholder="Titel" onFocus={(e) => (e.target.value = "")} type="text" />
            </div>
            <div>
              <input placeholder="Anmeldelse" onFocus={(e) => (e.target.value = "")} type="text" />
            </div>
            <div>
            <button type="submit">Send</button>
            <button type="reset">Annuller</button>
          </div>
          </form>
        </section>
      </section>
    </section>
  );
};
