import FoodList from '../FoodList/FoodList';
import classes from './Menu.module.scss';

const Menu = () => {
  return (
    <section className={classes.menu}>
      <h3>OUR MENU</h3>
      <h2>Menu that always <br/>make you fall in love</h2>
      <FoodList />
    </section>
  )
}

export default Menu