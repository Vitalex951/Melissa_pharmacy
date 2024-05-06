import {PropsWithChildren} from "react";
import {IMeta} from "@/components/seo/meta.type";
import Head from "next/head";


export default function Meta({children, title, description}: PropsWithChildren<IMeta>) {
    return (
      <>
          <Head>
              <title>
                  {title}
              </title>
              <meta name={'description'} content={description}/>
              <meta name={'og:title'} content={title}/>
              <meta name={'og:description'} content={description}/>
          </Head>
          {children}
      </>
    );
}