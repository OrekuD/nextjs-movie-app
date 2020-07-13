import { GoldStar, Star } from "../svg/Svg";

const starValue = (rating) => {
  if (rating > 9) {
    return 5;
  } else if (rating > 8) {
    return 4;
  } else if (rating > 6) {
    return 3;
  } else if (rating > 4) {
    return 2;
  } else {
    return 1;
  }
};

const StarRatings = ({ rating }) => {
  return (
    <div className="star_rating">
      {starValue(rating) === 5 && (
        <>
          <GoldStar size="24px" />
          <GoldStar size="24px" />
          <GoldStar size="24px" />
          <GoldStar size="24px" />
          <GoldStar size="24px" />
        </>
      )}
      {starValue(rating) === 4 && (
        <>
          <GoldStar size="24px" />
          <GoldStar size="24px" />
          <GoldStar size="24px" />
          <GoldStar size="24px" />
          <Star size="24px" />
        </>
      )}
      {starValue(rating) === 3 && (
        <>
          <GoldStar size="24px" />
          <GoldStar size="24px" />
          <GoldStar size="24px" />
          <Star size="24px" />
          <Star size="24px" />
        </>
      )}
      {starValue(rating) === 2 && (
        <>
          <GoldStar size="24px" />
          <GoldStar size="24px" />
          <Star size="24px" />
          <Star size="24px" />
          <Star size="24px" />
        </>
      )}
      {starValue(rating) === 1 && (
        <>
          <GoldStar size="24px" />
          <Star size="24px" />
          <Star size="24px" />
          <Star size="24px" />
          <Star size="24px" />
        </>
      )}
    </div>
  );
};

export default StarRatings;
