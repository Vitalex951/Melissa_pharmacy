import styles from './About.module.scss'
import {Layout} from "@/components/layout/Layout";
import {Heading} from "@/components/ui/heading/Heading";
import {Advantages} from "@/components/ui/advantages/Advantages";
import decoding from '@/assets/images/about/decoding.svg'
import laz from '@/assets/images/about/laz.svg'
import prof from '@/assets/images/about/prof.svg'
import reg from '@/assets/images/about/reg.svg'
import {classNames} from "@/shared/classNames/classNames";
import {Rubik} from "next/font/google";


export default function About() {
    return (
      <Layout title={'О нас'}>

          <Heading text={'О СЕТИ  аптек «мелисса»'}/>
          <div className={styles.container}>
              <div className={classNames(styles.wrapper, {}, [styles.textWrapper])}>
                  <p>«Мелисса» — популярная в Беларуси
                      аптечная сеть, специализирующаяся на натуральных товарах для здоровья и
                      красоты.</p>
                  <p>У нас широкий выбор высококачественных товаров по доступным ценам:
                      натуральная и лечебная косметика, витамины, эфирные масла, диетическое и
                      спортивное питание, медицинские изделия, биологически активные добавки,
                      фиточаи и сборы и мн. другое. Все товары имеют документы подтверждающие
                      качество и проходят строгий контроль.</p>
                  <p>Более 140 аптек и магазинов по всей Беларуси. Позвоните — и мы подскажем
                      ближайшую аптеку к вашему дому или работе.</p>
                  <p>Так же жители Бобруйска могут заказать товары с доставкой на дом через наш
                      интернет-магазин. А жители других городов — доставку почтой с оплатой
                      наложенным платежом.</p>
              </div>
              <div className={classNames(styles.wrapper, {}, [styles.infoContainer])}>
                  <div className={styles.infoWrapper}>
                      <Advantages image={laz} className={styles.advantagesWrapper}>
                          <h4>Более 50 000 постоянных<br/>
                              покупателей</h4>
                      </Advantages>
                      <Advantages image={decoding} className={styles.advantagesWrapper}>
                          <h4>Индивидульный подход<br/>
                              к каждому покупателю</h4>
                      </Advantages>
                  </div>
                  <div className={styles.infoWrapper}>
                      <Advantages image={prof} className={styles.advantagesWrapper}>
                          <>
                              <h4>Профессиональная</h4>
                              <p>консультация фармацевтов</p>
                          </>
                      </Advantages>
                      <Advantages image={reg} className={styles.advantagesWrapper}>
                          <h4>Регулярные акции,<br/>
                              приятные подарки</h4>
                      </Advantages>
                  </div>
              </div>
          </div>
      </Layout>
    );
}