import styles from "./Description.module.css"

import Image from "next/image"

import i1 from "@/public/football_event.jpg"
import i2 from "@/public/marathon_event.jpg"
import i3 from "@/public/kpop_event.jpg"
import i4 from "@/public/gaming_event.jpg"


export default function Description({ children}) {
    return <>
        <div className={styles.description}>
            {children}
            <div className={styles.carroussel}>
            <div className={styles.images}>
            <Image src={i1} alt="image de Football event" />
            <Image src={i2} alt="image du marathon" />
            <Image src={i3} alt="image du kpop" />
            <Image src={i4} alt="image de gaming" />
            </div>
            </div>
        </div>
        
    </>
}