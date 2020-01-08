import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import { Link } from "gatsby"
import styles from "./css-modules.module.css"
const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="avatar" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)
export default () => (
  <Container>
    <Link to="/">Home</Link>
    <Header headerText="CSS MODULES RULES" />
    <p>Css modules are ok I guess.</p>
    <User
      username="Jane Doe"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
      excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    <User
      username="Bob Smith"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
      excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
  </Container>
)
