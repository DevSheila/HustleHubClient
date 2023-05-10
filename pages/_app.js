import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>

        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
        </ChakraProvider>


  )
}

export default MyApp



