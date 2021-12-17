import Head from "next/head"
import { Container } from "@mui/material"
import { Header, Footer } from "."
import styles from '../styles/Layout.module.scss'
const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Manzil</title>
                <meta name="description" content="Manzil, Best real estate app. Rent and buy a property much easier" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header><Header /></header>
            <Container maxWidth="md">
                <main>
                    {children}
                </main>
            </Container>
            <footer><Footer /></footer>
        </div>
    )
}

export default Layout
