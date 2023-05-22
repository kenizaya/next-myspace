import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About us',
  description: 'We are a social media company',
}

const About = () => {
  return (
    <main>
      <h1>About</h1>
      <p>We are a social media company!</p>
    </main>
  )
}

export default About
