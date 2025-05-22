"use client";
import React from "react";
import styles from "./Home.module.css";
import Profile from "../components/Profile";

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.Profile}>
                <Profile />
            </div>
        </div>
    );  
}
