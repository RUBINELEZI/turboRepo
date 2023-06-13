import React from 'react'
import { Body, Html, Head, Container, Tailwind } from '@react-email/components'
import { Text, Button, Img, Heading } from '@react-email/components'

const MainLayout = ({ children }) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white my-12 mx-auto font-sans">
          <Container className="p-8 rounded-lg shadow-lg">
            <Img
              className="rounded-full block mx-auto"
              src="https://gogetdigitalmenu.com/wp-content/uploads/2023/05/New-Project-1-1.png"
              width="256"
              alt="Logo"
            />
            {children}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default MainLayout
