import Image, {StaticImageData} from "next/image";
import styles from './Contact.module.scss'
import {ReactNode} from "react";

interface ContactProps {
    image: StaticImageData
    children: ReactNode
}

export const Contact = ({children, image}: ContactProps) => {

    return (
      <div className={styles.container}>
          <Image src={image} alt={'contact'} width={55} height={55}/>
          <div>
              {children}
          </div>
      </div>
    );
};


// <Link href={'/about'}>
//               About
//           </Link>