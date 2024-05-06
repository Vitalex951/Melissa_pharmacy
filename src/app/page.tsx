import styles from "./page.module.scss";
import {Layout} from "@/components/layout/Layout";
import {Heading} from "@/components/ui/heading/Heading";
import {productsMock} from "@/constants/products";
import {CardItem} from "@/components/ui/cardItem/CardItem";

export default function Home() {
    return (
      <Layout title={'Аптека'}>
          <div className={styles.main}>
           <Heading text={'Новинки'}/>
              <div className={styles.productWrapper}>
                  {productsMock.map(el => <CardItem key={el.id} card={el}/>)}
              </div>
          </div>
      </Layout>

    );
}
