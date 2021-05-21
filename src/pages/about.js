import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm a baby coloring book poke taxidermy</h2>
            <p>
              Copper mug vaporware marfa kickstarter iceland. Listicle tacos
              humblebrag polaroid typewriter kale chips viral activated charcoal
              air plant forage 8-bit pabst.
            </p>
            <p>
              Cloud bread blue bottle shabby chic 90's deep v jean shorts edison
              bulb tumeric vaporware pour-over retro PBR&B quinoa.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person Pouring salt in Bowl"
            className="about-img"
            placeholder="blurred"
          />
        </section>
      </main>
    </Layout>
  )
}

export default About
