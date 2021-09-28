import React from "react"
import { Link } from "gatsby"

const Home = () => (
  <div>
    <h1> This is the index page! ⚗️🧪</h1>

    <div>
      <Link to="/">Home</Link> | <Link to="/about"> About me</Link>
    </div>

    <p>
      Hi there, i am a junior software Developer, who fiddles around with 
      different projects using JavaScript, Html, Css and LIP.
    </p>
  </div>

)

export default Home;