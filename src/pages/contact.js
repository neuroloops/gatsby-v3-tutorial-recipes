import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

const Contact = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <SEO title="Contact" />
      <main className="page">
        <h1>contact page</h1>
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              Tacos tumeric hashtag letterpress succulents man braid PBR&B woke
              messenger bag affogato polaroid. IPhone drinking vinegar edison
              bulb microdosing kinfolk hoodie. Kombucha jean shorts trust fund
              letterpress waistcoat. Blue bottle wayfarers godard austin disrupt
              pug neutra retro. Banh mi activated charcoal four loko affogato
              yuccie hot chicken helvetica kickstarter cronut migas schlitz
              microdosing occupy normcore cred.
            </p>
            <p>
              Migas fixie kale chips tofu, live-edge distillery disrupt meggings
              mixtape wayfarers enamel pin polaroid twee locavore.
            </p>
            <p>
              Put a bird on it heirloom semiotics microdosing flexitarian blog
              selvage vice post-ironic intelligentsia master cleanse fixie.
            </p>
            <p>
              Palo santo trust fund blue bottle cronut. Brunch messenger bag
              disrupt flexitarian drinking vinegar keffiyeh leggings adaptogen
              shoreditch tote bag fashion axe gastropub. Gluten-free synth
              hashtag, ethical pug pinterest affogato farm-to-table lo-fi YOLO.
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/mayaoeqg"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <button className="btn block" type="submit">
                Submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesouce!</h5>
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
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`
export default Contact
