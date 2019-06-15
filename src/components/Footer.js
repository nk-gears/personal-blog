import React, { Component } from 'react'
import { Link } from 'gatsby'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer container">

        <a href="https://twitter.com/nirmal_kumar" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://github.com/nk-gears" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://blog.gyanmoti.in/rss.xml" target="_blank" rel="noopener noreferrer">
          RSS
        </a>
        <a
          href="https://github.com/nk-gears/gyanmoti.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          View source
        </a>
      </footer>
    )
  }
}
