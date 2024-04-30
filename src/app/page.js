// import Image from "next/image";
import { MainHero } from "@/sections/MainHero/MainHero";
import styles from "./page.module.scss";
import { Navbar, Footer } from "@/shared/components";
import {client} from '@/utils/sanity';

const mainPages = await client.fetch(`*[_type == "MainPage"]{title, description, buttons}`)
const page = mainPages[0]

export const metadata = {
  title: page.title,
  description: page.description,
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
      <MainHero />
      <Footer/>
    </main>
  );
}
