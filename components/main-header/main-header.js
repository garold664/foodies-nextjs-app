import Link from 'next/link';
import Image from 'next/image';

import MainHeaderBackground from './main-header-background';

import styles from './main-header.module.css';
import logoImg from '@/assets/logo.png';

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/meals/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
