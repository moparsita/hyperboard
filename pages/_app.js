import '../styles/globals.css'
import '../public/styles/styles.css'
import '../public/styles/plugins/react-slick.css'
import '../public/styles/plugins/react-slick-theme.css'
import { CookiesProvider } from "react-cookie"
import AppBar from "../components/Footer/AppBar";
import React from "react";

export default function App({ Component, pageProps }) {
  return (
      <>

      <CookiesProvider>
        <Component {...pageProps} />
          <AppBar />
      </CookiesProvider>
          </>
  )
}
