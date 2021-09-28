import React from "react"
import { Link } from "gatsby"
import* as styles from './about.module.css';

const About = () => (
  <div>
    <h1> This is the About page! 🌱</h1>
    <div>
     <Link to="/">Home</Link> | <Link to="/about"> About me</Link>
    </div>
    <p className={styles.p}>
      Constantly trying to stay on track with the modern way of web Development
    </p>
  </div>

)

export default About;