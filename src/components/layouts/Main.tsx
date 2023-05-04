import { Inter } from "next/font/google"
import Head from "next/head"
import styles from './Main.module.css'
import { Navbar } from "../Navbar"
import { FC, ReactNode } from "react";

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: ReactNode
}

export const Main: FC<Props> = ({children}) => {
    return (
        <>
          <Head>
            <title>Home - Next App</title>
            <meta name="description" content="Home Page" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar />
          <main className={`${styles.main} ${inter.className}`}>
            {children}
          </main>
        </>
      )
}
