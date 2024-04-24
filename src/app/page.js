// import Image from "next/image";
import { MainHero } from "@/sections/MainHero/MainHero";
import styles from "./page.module.scss";

export default function Home() {

  return (
    <main className={styles.main}>
      <MainHero/>
    </main>
  );
}
