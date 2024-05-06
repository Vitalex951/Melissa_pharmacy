import styles from './Footer.module.scss'
import {Links} from "@/components/ui/links/Links";
import Image from "next/image";
import logo from "@/assets/images/logo.jpg";

export const Footer = () => {
    return (
      <footer className={styles.container}>
          <div className={styles.wrapper}>
              <Links className={styles.links}/>
              <div className={styles.logoWrapper}>
                  <Image src={logo} alt={'logo'} width={100} height={100}/>
                  <div className={styles.text}>
                      Счастье - быть здоровым.
                  </div>
              </div>
              <div className={styles.contactsWrapper}>
                  <div className={styles.address}>
                      ООО «Здоровое решение», юр. адрес: 220006,<br/>
                      Бобруйск, Ул. Пролетарская, д. 17<br/>
                      Режим работы: 8.00 - 20.00<br/>
                      <br/>
                      В торговом реестре с 13.04.2020 № 479296<br/>
                      Регистрация № 22 от 12.01.2006 г., Мингорисполком. <br/>
                      Свидетельство (ЕГР) № 190682403 <br/>
                      Лицензия на фармацевтическую деятельность Ф-788 от 29.06.2007 г.
                  </div>
              </div>
          </div>
      </footer>
    );
};
