import React from 'react'
import styled from 'styled-components'

import styles from '../styles'

const Container = styled.div`
  color: ${styles.color.grey};
  margin-bottom: 16px;

  &:hover {
    --title-size: 1.2;
  }

  @media only screen and (min-width: ${styles.width.medium}) {
    margin-bottom: 24px;
  }
`

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 3.2rem;
  margin-bottom: 8px;

  transition: transform 180ms cubic-bezier(0.16, 0.79, 0.71, 1.99);
  transform: scale(var(--title-size));
  transform-origin: 0 50%;
`

const Description = styled.p`
  font-size: 1.6rem;
  line-height: 2.8rem;
`

const Highlight = styled.span`
  background-color: ${styles.color.greybase};
  padding: 2px 4px;
  color: white;
  border-radius: 4px;
  font-size: 1.4rem;
  white-space: nowrap;
`

const Bio = () => (
  <Container>
    <Title>Hi, I'm Nirmal </Title>
    <Description>
      I love to design and build Applications for Cloud. <Highlight>Linux Enthusiast</Highlight>{' '}
   
    </Description>
  </Container>
)

export default Bio
