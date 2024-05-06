import {Header} from "@/components/layout/header/Header";
import Meta from "@/components/seo/Meta";
import {PropsWithChildren} from "react";
import {IMeta} from "@/components/seo/meta.type";
import {Titillium_Web} from 'next/font/google';
import {Footer} from "@/components/layout/footer/Footer";
import styles from './Layout.module.scss'
import {classNames} from "@/shared/classNames/classNames";

const titillate = Titillium_Web({
    weight: ['300', "400", "600", "700"],
    subsets: ['latin-ext', 'latin']
})

export const Layout = ({children, description, title}: PropsWithChildren<IMeta>) => {
    return (
      <Meta title={title} description={description}>
          <div className={styles.wrapper}>
              <Header/>
              <main className={classNames(titillate.className, {}, [styles.main])}>
                  {children}
              </main>
              <Footer/>
          </div>
      </Meta>
    );
}