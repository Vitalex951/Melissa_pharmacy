import styles from './Advantages.module.scss'
import Image, {StaticImageData} from "next/image";
import {classNames} from "@/shared/classNames/classNames";
import {PropsWithChildren} from "react";

interface AdvantagesProps extends PropsWithChildren {
    image: StaticImageData
    className?: string
}

export const Advantages = (props: AdvantagesProps) => {
    const {image, children, className} = props

    return (
      <div className={classNames(styles.wrapper, {}, [className])}>
          <Image src={image} alt={'advantages'} width={80} height={80}/>
          <div className={styles.productTitle}>
              {children}
          </div>
      </div>
    );
};
