import React, { Component } from 'react'


export default class Contact extends Component {
  render() {
    return (
      <>
        <h1>Stay in Touch</h1>
        <p>
          I write about Programming, Cloud and my experiments with IOT.
        </p>

        <p>You can also contact me via email or find me around the web.</p>
        <ul>

          <li>
            <strong>GitHub</strong>:{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/nk-gears">
            nk-gears
            </a>
          </li>
          <li>
            <strong>Twitter</strong>:{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/nirmal_kumar">
            nirmal_kumar
            </a>
          </li>
          <li>
            <strong>LinkedIn</strong>:{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nirmalweb/">
              nirmalweb
            </a>
          </li>
          <li>
            <strong>Feed</strong>: <a href="https://blog.gyanmoti.in/rss.xml">RSS</a>
          </li>
        </ul>
      </>
    )
  }
}
