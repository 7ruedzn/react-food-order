import { FaArrowRight } from "react-icons/fa";
import classes from "./FoodItem.module.scss";

interface PropTypes {
  id: number;
  name: string;
  price: number;
  description: string;
  icon: string;
}

const FoodItem = (props: PropTypes) => {
  return (
    <div className={classes.foodCard}>
      <div className="">
        <h1>{props.name}</h1>
        <h2>${props.price}</h2>
        <a href=''>
          Order Now
          <FaArrowRight /> 
        </a>
      </div>
    </div>
  );
};

export default FoodItem;
