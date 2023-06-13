import React from 'react'
import Layout from './layouts/MainLayout'
import { Body, Html, Head, Container, Tailwind } from '@react-email/components'
import { Text, Button, Img, Heading } from '@react-email/components'

const Email = ({ label }) => {
  return (
    <Layout>
      <Container>
        <Heading className="text-2xl pt-4">Hello Obi Wan here 🔥</Heading>
        <Text>Here you go</Text>
        <Button href="https://developedbyed.com">{label || 'Check out the courses'}</Button>
      </Container>
    </Layout>
  )
}

export default Email
