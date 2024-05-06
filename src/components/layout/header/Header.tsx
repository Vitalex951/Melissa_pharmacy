import Link from "next/link";
import styles from './Header.module.scss'
import {useRouter} from "next/router";

export const Header = () => {
    const {pathname} = useRouter()

    console.log(pathname)
    return (
      <div className={styles.header}>
          <Link className={pathname === '/' ? styles.active: ''} href={'/'}>
              Home
          </Link>
          <Link  className={pathname === '/about' ? styles.active: ''} href={'/about'}>
              About
          </Link>
      </div>
    );
};
