import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Staff = () => {
  const [isFetchStaff, setFetchStaff] = useState();

  useEffect(() => {
    const getFetchStaff = async () => {
      try {
        const result = await axios.get(
          `https://api.mediehuset.net/homelands/staff`
        );
        setFetchStaff(result.data.items);
      } catch (err) {
        console.error(err);
      }
    };
    getFetchStaff();
  }, []);

  return (
    <section id="Staff">
            <h2 class="Titles">Mød vores ansatte</h2>
      <section id="StaffBody">
      {isFetchStaff &&
        isFetchStaff.map((apiRoute, i) => {
          return (
            <figure key={i}>
              <img src={apiRoute.image} alt="" />
              <figcaption>
              <h3>{apiRoute.firstname} {apiRoute.lastname}</h3>
              <p>Partner, {apiRoute.position}</p>
              <p>Email: {apiRoute.email}</p>
              <p>Mobile: {apiRoute.phone}</p>
              </figcaption>
            </figure>
          );
        })}
    </section>
    </section>
  );
};
