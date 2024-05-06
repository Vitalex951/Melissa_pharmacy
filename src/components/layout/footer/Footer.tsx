'use client'

import styles from './Header.module.scss'
import {useParams} from "next/navigation";
import {Montserrat} from "next/font/google";
import {classNames} from "@/shared/classNames/classNames";
import {Phones} from "@/components/layout/header/contacts/Phones";
import Image from "next/image";
import logo from '@/assets/images/logo.jpg'
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
              <div className={styles.linksWraper}>
                  <Link href={'/'}>
                      О нас
                  </Link>
                  <Link href={'/'}>
                      Контакты
                  </Link>
                  <Link href={'/'}>
                     Адрес
                  </Link>

              </div>
          </div>
          <div className={styles.mainHeader}>
              <Image src={logo} alt={'logo'} width={100} height={100}/>
              <div className={styles.sloganWrapper}>
                  <span className={styles.slogan}>Счастье - быть здоровым. </span>
              </div>

          </div>

      </header>
    );
};
