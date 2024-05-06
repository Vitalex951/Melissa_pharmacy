import styles from './Heading.module.scss';
import {classNames} from "@/shared/classNames/classNames";
import dividerSvg from '@/assets/images/divider2.svg'
import Image from "next/image";

interface HeadingProps {
  className?: string
    text: string
}

export const Heading = ({ className, text }: HeadingProps) => {

    return (
        <div className={classNames(styles.heading, {}, [className])}>
        <h2>
            {text}
        </h2>
           <Image src={dividerSvg} alt={'Divider'}/>
        </div>
    );
};
