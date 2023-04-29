import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import SimpleSidebar from '@/component/Sidebar'
import { Box } from '@chakra-ui/react'
import Main from '@/component/Main'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Box maxW="1440px" margin="auto">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <SimpleSidebar children={<Main />} />
      </main>
    </Box>
  )
}
