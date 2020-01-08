import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"

export default () => (
  <div style={{ color: `red`, fontSize: `22px` }}>
    <Link to="/">Home</Link>
    <Header headerText="Contact Page" />
    <ul>
      <li>Contact Mee!!!</li>
      <li>Contact Mee!!!</li>
      <li>Contact Mee!!!</li>
      <li>Contact Mee!!!</li>
      <li>Contact Mee!!!</li>
    </ul>
  </div>
)
