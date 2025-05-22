import React from "react";
import styles from "./Loading.module.css";
import Image from "next/image";

export default function Loading() {
    return (
        <div className={styles.loading}>
            <Image
                src="/images/loading.gif"
                alt="Loading"
                width={400}
                height={300}
                priority={true}
            />

            <p>Carregando Filmes...</p>
        </div>
    )
}