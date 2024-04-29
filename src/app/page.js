// import Image from "next/image";
import { MainHero } from "@/sections/MainHero/MainHero";
import styles from "./page.module.scss";
import { Navbar, Footer } from "@/shared/components";

export default function Home() {

  return (
    <main className={styles.main}>
      <Navbar/>
      <MainHero />
      <Footer/>
    </main>
  );
}
