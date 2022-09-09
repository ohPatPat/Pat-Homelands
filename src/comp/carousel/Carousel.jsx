import React from "react";
import Carousel from "react-material-ui-carousel";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CarouselBanner = () => {
  const [isFetchImg, setFetchImg] = useState();

  useEffect(() => {
    const getFetchImg = async () => {
      try {
        const result = await axios.get(
          `https://api.mediehuset.net/homelands/images`
        );
        setFetchImg(result.data.items);
      } catch (err) {
        console.error(err);
      }
    };
    getFetchImg();
  }, []);
  return (
    <Carousel navButtonsAlwaysVisible="true" animation="slide" swipe="true" stopAutoPlayOnHover="true" className="Carousel">
      {isFetchImg &&
        isFetchImg.map((apiRoute, i) => {
          return (
              <div className="CarouselImg" key={i}>
                <img src={apiRoute.image[1]} alt="apiRoute.filename" />
              </div>
          );
        })}
    </Carousel>
  );
};
