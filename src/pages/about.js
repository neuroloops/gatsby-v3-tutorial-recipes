import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"

const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
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
        <section className="featured-recipes">
          <h5>Look at this Awesome sauce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default About
