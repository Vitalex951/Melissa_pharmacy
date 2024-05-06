'use client'

import styles from './Page.module.css'
import {useParams} from "next/navigation";


export default function Products(){
    const params  = useParams<{ id: string }>()

    console.log(params)
    return (
      <div>
        <h1>hi</h1>
      </div>
    );
}