import styles from "./page.module.scss";
import {client} from '@sanity/client';
import { ContactUs } from "@sections/contact-us/ContactUs";
import { MainHero } from "@sections/index";
import { Footer, Navbar } from "@shared/components";

const mainPages = await client.fetch(`*[_type == "MainPage"]{title, description, buttons}`)
const page = mainPages[0] 

export const metadata = {
  title: page.title,
  description: page.description,
}

const Home = () => {
  return (
    
    <main className={styles.main}>
      <Navbar />
      <MainHero /> 
      <ContactUs />
      <Footer/>
    </main>
  )
}

export default Home;
