import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Cards = () => {
  const [isFetchHomes, setFetchHomes] = useState();

  useEffect(() => {
    const getFetchHomes = async () => {
      try {
        const result = await axios.get(
          `https://api.mediehuset.net/homelands/homes`
        );
        setFetchHomes(result.data.items);
      } catch (err) {
        console.error(err);
      }
    };
    getFetchHomes();
  }, []);

  if (isFetchHomes) {
    if (isFetchHomes && isFetchHomes) {
      const numItems = isFetchHomes.length;
      const RN = Math.floor(Math.random() * numItems);
    } else {
      console.log("error");
    }
  }
  return (
    <section id="Cards">
      {isFetchHomes &&
        isFetchHomes.slice(0, 3).map((apiRoute, i) => {
          return (
            <figure key={i}>
              {apiRoute.images &&
                apiRoute.images.slice(0, 1).map((apiImages, i) => {
                  return (
                    <img
                      key={i}
                      src={apiImages.filename.medium}
                      alt={apiImages.file}
                    />
                  );
                })}
              <figcaption>
                <h2>{apiRoute.address}</h2>
                <p className="Adress">
                  {apiRoute.zipcode} {apiRoute.city}
                </p>
                <small>{apiRoute.type}</small>
                <section>
                  <p className={apiRoute.energy_label_name}>
                    {apiRoute.energy_label_name}
                  </p>
                  <p className="Space">{apiRoute.num_rooms} værelser, m2</p>
                  <p className="Price">{apiRoute.price} DKK</p>
                </section>
              </figcaption>
            </figure>
          );
        })}
    </section>
  );
};

export const CardsList = () => {
  const [isFetchHomes, setFetchHomes] = useState();

  useEffect(() => {
    const getFetchHomes = async () => {
      try {
        const result = await axios.get(
          `https://api.mediehuset.net/homelands/homes`
        );
        setFetchHomes(result.data.items);
      } catch (err) {
        console.error(err);
      }
    };
    getFetchHomes();
  }, []);

  const [sortState, setSortState] = useState("none");
  const sortMethods = {
    none: { method: (a, b) => null },
    ascending: { method: undefined },
    descending: { method: (a, b) => (a > b ? -1 : 1) },
  };

  return (
    <section id="Cards">
      <select
        defaultValue={"DEFAULT"}
        onChange={(e) => setSortState(e.target.value)}
      >
        <option value="DEFAULT" disabled>
          Sorter efter type
        </option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
      <section id="CardsBody">
        {isFetchHomes &&
          isFetchHomes
            .sort(sortMethods[sortState].method)
            .map((apiRoute, i) => {
              return (
                <figure key={i}>
                  {apiRoute.images &&
                    apiRoute.images.slice(0, 1).map((apiImages, i) => {
                      return (
                        <img
                          key={i}
                          src={apiImages.filename.medium}
                          alt={apiImages.file}
                        />
                      );
                    })}
                  <figcaption>
                    <h2>{apiRoute.address}</h2>
                    <p className="Adress">
                      {apiRoute.zipcode} {apiRoute.city}
                    </p>
                    <small>{apiRoute.type}</small>
                    <section>
                      <p className={apiRoute.energy_label_name}>
                        {apiRoute.energy_label_name}
                      </p>
                      <p className="Space">{apiRoute.num_rooms} værelser, m2</p>
                      <p className="Price">{apiRoute.price} DKK</p>
                    </section>
                  </figcaption>
                </figure>
              );
            })}
      </section>
    </section>
  );
};
