import Image from "next/image"
import MenuNav from "./MenuNav"

import styles from "./Header.module.css"

import logo from "@/public/logo2.jpg"

export default function Header() {
    return <header className={styles.header}>
        <div className={styles.title}>
            <Image src={logo} alt="Logo Crative App" />
            <h1>Brand</h1>
            
        </div>
        
        <MenuNav />
    </header>
}