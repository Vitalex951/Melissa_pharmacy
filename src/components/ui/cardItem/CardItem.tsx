
import styles from './CardItem.module.scss'
import {classNames} from "@/shared/classNames/classNames";
import {Product} from "@/shared/types/card.type";
import Link from "next/link";
import Image from "next/image";
import {Routes} from "@/constants/routes";

interface LinksProps {
    card: Product
}

export const CardItem = (props: LinksProps) => {
    const {card} = props
    const {manufacturer, category, article, title, image, id} = card

    return (
      <Link href={`${Routes.Product}${id}`} className={classNames(styles.wrapper, {}, [])}>
        <Image src={image} alt={'product'} />
          <div className={styles.productTitle}>
            <p>{title}</p>
          </div>
      </Link>
    );
};
