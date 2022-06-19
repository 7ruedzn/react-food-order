import FoodItem from "../FoodItem/FoodItem";
import classes from "./FoodList.module.scss";

const FoodList = () => {
  const foods = [
    {
      id: 0,
      name: "Apple Crumble",
      price: "43.98",
      description: "A nice apple crumble with vanilla ice cream",
      icon: "https://images.unsplash.com/photo-1616537379876-3ecab2e2c8c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=714&q=80",
    },
    {
      id: 1,
      name: "Uramaki Sushi",
      price: "12.65",
      description: "A sushi with fine rice and salmon",
      icon: "https://images.unsplash.com/photo-1633478062482-790e3b5dd810?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHN1c2hpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      name: "Hamburguer",
      price: "7.31",
      description:
        "A meat hamburguer with bread, lettuce, cheddar cheesse and sliced tomatoes",
      icon: "https://images.unsplash.com/photo-1619250946878-4965964efe54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fGhhbWJ1cmd1ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      name: "Ceasar Salad",
      price: "10.50",
      description:
        "A fresh and clean Ceasar Salad with croutons, salad and sauce",
      icon: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    }
  ];

  if (foods.length > 0) {
    return (
      <div className={classes.foodList}>
        {foods.map((food: any) => {
          return (
            <FoodItem
              name={food.name}
              price={food.price}
              id={food.id}
              description={food.description}
              icon={food.icon}
              key={food.id}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div className={classes.foodList}>
      <p>No foods found! Please come back later.</p>
    </div>
  );
};

export default FoodList;
