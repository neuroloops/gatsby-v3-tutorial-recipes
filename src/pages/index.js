import React from "react"
import Layout from "../components/Layout"
import { ExampleButton } from "../examples/button"
export default function Home() {
  return (
    <Layout>
      <div className="home-heading">
        <ExampleButton>click me</ExampleButton>
        <h1>Hello page</h1>
      </div>
    </Layout>
  )
}
