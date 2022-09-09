import { Meta } from "../comp/Meta.jsx";
import { CarouselBanner } from "../comp/carousel/Carousel.jsx";
import { Cards } from "../comp/cards/Cards.jsx";
import { Comments } from "../comp/comments/Comments.jsx";
import { Staff } from "../comp/staff/Staff.jsx";

export const Forside = (props) => {
  return (
    <Meta title={props.title}>
      <CarouselBanner />
      <Cards />
      <Comments />
      <Staff />

    </Meta>
  );
};
