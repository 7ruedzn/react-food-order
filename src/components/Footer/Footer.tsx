import classes from './Footer.module.scss'

const Footer = () => {
  return (
    <footer>
      {/* <div>

      </div> */}
      <div className={classes.column}>
        <h1>About</h1>
        <a href="">About us</a>
        <a href="">News</a>
        <a href="">Menu</a>
        <a href="">Features</a>
      </div>
      <div className={classes.column}>
        <h1>Support</h1>
        <a href="">Account</a>
        <a href="">Support Center</a>
        <a href="">Contact Us</a>
        <a href="">Accesibility</a>
      </div>
      <div className={classes.column}>
        <h1>Company</h1>
        <a href="">Partner With Us</a>
        <a href="">FAQ</a>
        <a href="">Blog</a>
      </div>
      {/* <div className={classes.column}>
        <h1>About</h1>
        <a href="">About us</a>
        <a href="">News</a>
        <a href="">Menu</a>
        <a href="">Features</a>
      </div> */}
    </footer>
  )
}

export default Footer