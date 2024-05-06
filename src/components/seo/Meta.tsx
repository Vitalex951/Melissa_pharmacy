import {PropsWithChildren} from "react";
import {IMeta} from "@/components/seo/meta.type";
import Head from "next/head";

const getTitle = (title: string) => `${title} cars}`

export default function Meta({children, title, description}: PropsWithChildren<IMeta>) {
    return (
      <>
          <Head>
              <title>
                  {getTitle(title)}
              </title>
              {description ? <>
                  <meta name={'description'} content={description}/>
                  <meta name={'og:title'} content={getTitle(title)}/>
                  <meta name={'og:description'} content={description}/>
              </> : <>
                  <meta name={'robots'} content={'noindex, nofollow'}/>
              </>}
          </Head>
          {children}
      </>
    );
}