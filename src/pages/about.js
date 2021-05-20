import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
const about = () => {
  return (
    <Layout>
      <Wrapper>
        <h1>hello from about page</h1>

        <p className="text">
          {/*  spell-checker: disable   */}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit,
          repellendus. Reprehenderit maxime quae similique, tempora quasi, porro
          in recusandae eos voluptatibus dolorum qui eligendi laborum ea
          blanditiis earum, praesentium consequatur?
          {/* spell-checker: enable  */}
        </p>
      </Wrapper>
    </Layout>
  )
}
const Wrapper = styled.section`
  color: blueviolet;
  h1 {
    color: yellowgreen;
  }
  .text {
    text-transform: uppercase;
  }
`
export default about
