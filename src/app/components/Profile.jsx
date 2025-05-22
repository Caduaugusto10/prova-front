import React from 'react';
import Image from 'next/image';
import { Roboto } from 'next/font/google';
import styles from './Profile.module.css';

const roboto = Roboto({
  variable: '--font',
  subsets: ['latin'],
});
export const metadata = {
  title: 'Perfil',
  description: 'Perfil do usuário',
};

export default function Profile() {
    return (
        <div className={styles.container}>
        <div className={styles.profileCard}>
            <Image
            src="/images/profile.jpg"
            alt="Foto de perfil"
            width={150}
            height={150}
            className={styles.profileImage}
            />
            <div className={styles.pageProfile}>
                <h2 className={styles.profileName}>Carlos Eduardo Ferraz Augusto</h2>
                <div className={styles.description}>
                    <h2>Turma:</h2>
                    <p>2TDS1</p>
                    <h2>Instrutores:</h2>
                    <p>Thiago Rodrigues e Marcelo Carboni</p>
                    <h2>Matéria:</h2>
                    <p>Front-End, Prova Prática</p>
                </div>
            </div>
            

        </div>
        </div>
    );
}