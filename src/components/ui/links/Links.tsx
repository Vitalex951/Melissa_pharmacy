'use client'

import Link from "next/link";
import {classNames} from "@/shared/classNames/classNames";
import {Routes} from "@/constants/routes";
import {usePathname} from "next/navigation";

interface LinksProps {
    className?: string
}

export const Links = (props: LinksProps) => {
    const {className} = props

const pathName = usePathname()

    return (
      <div className={classNames('', {}, [className])}>
          <Link href={Routes.About} className={Routes.About === pathName ? 'active' : ''}>
              О нас
          </Link>
          <Link href={Routes.Contacts} className={Routes.Contacts === pathName ? 'active' : ''}>
              Контакты
          </Link>
          <Link href={Routes.Address} className={Routes.Address === pathName ? 'active' : ''}>
              Адрес
          </Link>
      </div>
    );
};
