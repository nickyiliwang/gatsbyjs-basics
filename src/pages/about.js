import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default () => (
  <div className='wrapper'>
    <Link to="/">Home</Link>
    <Header headerText="About Gatsby" />
    <Header headerText="IT's aight" />
    <h2>HEHEHEH</h2>
    <p>What do you meannnnnn</p>
  </div>
)
