import classes from './Section.module.scss'

const Section = () => {
  return (
    <section>
        <div className={classes.title}>
            <h1>Be the fastest in delivering your food</h1>
            <p>Our job is to filling your tummy with delicous food and with fast and free delivery.</p>
        </div>
        <div className={classes.img}>
            <img src="../../../src/components/assets/images/first.png" alt="eating" />
        </div>
    </section>
  )
}

export default Section