import Link from "next/link";
import {classNames} from "@/shared/classNames/classNames";
import {Routes} from "@/constants/routes";

interface LinksProps {
    className?: string
}

export const Links = (props: LinksProps) => {
const {className} = props

    return (
      <div className={classNames('', {}, [className])}>
          <Link href={Routes.About}>
              О нас
          </Link>
          <Link href={Routes.Contacts}>
              Контакты
          </Link>
          <Link href={Routes.Address}>
              Адрес
          </Link>
      </div>
    );
};
