import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

const Heading = styled.h1`
  letter-spacing: ${props => `${props.letterSpacing}px`};
  color: ${props => `rgba(${props.r},${props.g},${props.b}, ${props.a})`};
`

export default function Home(props) {
  return (
    <div>
      <Heading
        letterSpacing={props.data.txt.edges[1].node.style.letterSpacing}
        r={props.data.txt.edges[1].node.fills[0].color.r}
        g={props.data.txt.edges[1].node.fills[0].color.g}
        b={props.data.txt.edges[1].node.fills[0].color.b}
        a={props.data.txt.edges[1].node.fills[0].color.a}
      >
        {props.data.txt.edges[1].node.characters}
      </Heading>
      <p>{props.data.txt.edges[0].node.characters}</p>
    </div>
  )
}

export const pageQuery = graphql`
  query {
    txt: allText {
      edges {
        node {
          characters
          style {
            letterSpacing
          }
          fills {
            color {
              a
              b
              g
              r
            }
          }
        }
      }
    }
  }
`
