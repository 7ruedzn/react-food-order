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
    <div className={classes.foodCard} 
    style={
      {backgroundImage: `url(${props.icon})`,
       backgroundSize: 'cover',
       backdropFilter: 'blur(5px)'
       }}>
      <div className="">
        <h1>{props.name}</h1>
        <h2><span>$</span>{props.price}</h2>
        <a href=''>
          <p>Order Now</p>
          <FaArrowRight/> 
        </a>
      </div>
    </div>
  );
};

export default FoodItem;
