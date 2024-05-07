import {Layout} from "@/components/layout/Layout";
import {Heading} from "@/components/ui/heading/Heading";
import addressIcon from '@/assets/images/contacts/address.svg'
import {Contact} from "@/components/ui/contact/Contact";
import {ContactsEnum} from "@/constants/contactsEnum";
import styles from "./Contacts.module.scss"
import mapsIcon from '@/assets/images/maps.jpg'
import Image from "next/image";


export default function Contacts() {
    return (
      <Layout title={'Контакты'}>
          <Heading text={'Наши контакты'}/>
          <div className={styles.wrapper}>
              <div>
                  <Contact image={addressIcon}>
                      <p>220006, Бобруйск<br/>
                          {ContactsEnum.Address}</p>
                  </Contact>

                  <Contact image={addressIcon}>
                      <p>{ContactsEnum.Phone1}<br/>
                          {ContactsEnum.Phone2}</p>
                  </Contact>

                  <Contact image={addressIcon}>
                      <p>{ContactsEnum.Email}</p>
                  </Contact>
              </div>

              <div className={styles.mapsWrapper}>
                  <Image src={mapsIcon} alt={'maps'}/>
              </div>

          </div>

      </Layout>
    );
}