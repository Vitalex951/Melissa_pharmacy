'use client'

import styles from './Header.module.scss'
import {useParams} from "next/navigation";
import {Montserrat} from "next/font/google";
import {classNames} from "@/shared/classNames/classNames";
import {Phones} from "@/components/ui/contacts/Phones";
import Image from "next/image";
import logo from '@/assets/images/logo.jpg'
import {Links} from "@/components/ui/links/Links";
import Link from "next/link";

const montserrat = Montserrat({
    weight: ['500'],
    subsets: ['latin-ext', 'latin']
})


export const Header = () => {
    const params = useParams()

    return (
      <header className={classNames(styles.header, {}, [montserrat.className])}>
          <div className={styles.miniHeader}>
              <Phones/>
              <Links className={styles.linksWrapper}/>
          </div>
          <div className={styles.mainHeader}>
              <Link href={'/'}>
                  <Image src={logo} alt={'logo'} width={100} height={100}/>
              </Link>
              <div className={styles.sloganWrapper}>
                  <h1 className={styles.slogan}>Счастье - быть здоровым. </h1>
              </div>
          </div>

      </header>
    );
};
