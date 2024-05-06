import Link from "next/link";
import styles from './Phones.module.scss'
import {useParams} from "next/navigation";
import {PhoneFilled} from "@ant-design/icons";
import {Contacts} from "@/constants/contacts";


export const Phones = () => {
    const params = useParams()

    return (
      <ul className={styles.phones}>
          <li>
              <Link href={`tel:${Contacts.Phone1}`}>
                  <PhoneFilled style={{color: "white"}}/>
                  <span>{Contacts.Phone1}</span>
              </Link>
          </li>
          <li>
              <Link href={`tel:${Contacts.Phone2}`}>
                  <PhoneFilled style={{color: "white"}}/>
                  <span>{Contacts.Phone2}</span>
              </Link>
          </li>
      </ul>
    );
};


// <Link href={'/about'}>
//               About
//           </Link>