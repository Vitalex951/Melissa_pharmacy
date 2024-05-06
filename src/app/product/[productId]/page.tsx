'use client'

import styles from './ProductInfo.module.scss'
import {useParams} from "next/navigation";
import {productsMock} from "@/constants/products";
import {Layout} from "@/components/layout/Layout";
import {useRouter} from "next/navigation";
import Image from "next/image";
import {Rubik} from "next/font/google";
import {classNames} from "@/shared/classNames/classNames";

const rubik = Rubik({subsets: ["latin", "latin-ext"]});


export default function ProductInfo() {
    const {productId} = useParams<{ productId: string }>()
    const {replace} = useRouter()
    const productData = productsMock.find(el => el.id.toString() === productId)
    const {
        image,
        title,
        id,
        article,
        category,
        manufacturer,
        description
    } = productData || {}
    if (!productData) {
        replace('/404')
    }
    return (
      <Layout title={'Product'}>
          <div className={classNames(styles.container, {}, [])}>
              <div className={styles.wrapper}>
                  {image && <Image src={image} alt={'product'}/>}
              </div>
              <div className={styles.wrapper}>
                  <div className={styles.infoWrapper}>
                      <h1 className={styles.title}>
                          {title}
                      </h1>
                      <div className={classNames(rubik.className, {}, [styles.description])}>
                          <p>{description}</p>
                      </div>
                      <div className={classNames('', {}, [styles.info])}>
                    <span>Артикул: {article}</span>
                      </div>
                      <div className={classNames('', {}, [styles.info])}>
                          <span>Категории: {category}</span>
                      </div>
                      <div className={classNames('', {}, [styles.info])}>
                          <span>Производитель:  {manufacturer}</span>
                      </div>
                  </div>
              </div>
          </div>
      </Layout>
    );
}