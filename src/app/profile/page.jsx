"use client";

import styles from "./Profile.module.css";
import { Button, Card, Flex, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function Profile() {
    return (
        <Card className={styles.card}>
            <Flex justify="space-between">
                <div className={styles.imageContainer}>
                    <Image 
                        src="/images/profile.jpg"
                        alt="Minha foto"
                        width={250}
                        height={400}
                        className={styles.image}
                    />
                </div>

                <div>
                    <Typography.Title level={3}>Carlos Eduardo Ferraz Augusto</Typography.Title>

                    <ul className={styles.list}>

                        <Typography.Title level={5}> Turma: </Typography.Title>
                        <li>2TDS1</li>

                        <Typography.Title level={5}>Instrutores:</Typography.Title>
                        <li>Marcelo Carboni e Thiago Ferreira</li>

                        <Typography.Title level={5}>Matéria-Atividade: </Typography.Title>
                        <li>Prova Prática da matéria de Front-End, com consumo de API Back-End</li>

                        <Typography.Title level={5}>Descrição:</Typography.Title>
                        <li>API com as entidades de Filmes e Gêneros</li>
                    </ul>
                        <Link href="/filmes" prefetch>
                            <Button type="primary" className={styles.button}>Acessar API Filmes</Button>
                        </Link>
                </div>
            </Flex>

            
        </Card>
    )
}