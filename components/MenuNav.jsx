'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from "./MenuNav.module.css";
import MenuIcon from '@mui/icons-material/Menu';


export default function MenuNav() {
    const [windowWidth, setWindowWidth] = useState(0);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleResize);
        
        setWindowWidth(window.innerWidth);

        return () => {
            
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            {windowWidth > 900 ? (
                // Affichage de la barre de navigation si la largeur de la fenêtre est supérieure à 900px
                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <Link href="/">Accueil</Link>
                        </li>
                        <li>
                            <Link href={'/OneChampionship'}>ONE Championship</Link>
                        </li>
                        <li>
                            <Link href="/ufc">UFC</Link>
                        </li>
                    </ul>
                </nav>
            ) : (
                // Affichage du bouton mobile si la largeur de la fenêtre est inférieure ou égale à 900px
                <MenuIcon
                    fontSize="large"
                    className={styles.menuButton} // Utilisation de la classe CSS pour le style
                    onClick={() => setOpen(!open)}
                />
            )}

            {/* Affichage de la barre de navigation dans le menu mobile */}
            {open && windowWidth <= 900 && (
                <div className={styles.nav}>
                    <ul>
                        <li>
                            <Link href="/">Accueil</Link>
                        </li>
                        <li>
                            <Link href={'/OneChampionship'}>ONE Championship</Link>
                        </li>
                        <li>
                            <Link href="/ufc">UFC</Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}