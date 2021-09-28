import React from "react"
import { Link } from "gatsby"

const About = () => (
  <div>
    <h1> This is the About page! 🌱</h1>
    <div>
     <Link to="/">Home</Link> | <Link to="/about"> About me</Link>
    </div>
    <p>
      Constantly trying to stay on track with the modern way of web Development
    </p>
  </div>

)

export default About;