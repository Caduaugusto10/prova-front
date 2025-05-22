"use client";

import { useEffect, useState } from "react";
import axios from "axios"; 
import { Pagination, Modal, Card, Skeleton } from "antd";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import styles from "./Filmes.module.css";
import Header from "../components/Header";

const HEADERS = { "x-api-key": process.env.NEXT_PUBLIC_API_KEY };

export default function Filmes() {
    
    const [data, setData] = useState({
        filmes: [],
        loading: true,
        current: 1,
        pageSize: 0,
    });

    const [modalInfo, setModalInfo] = useState({
        visible: false,
        filmes: null,
        generos: null,
        loading: false,
    });

    useEffect(() => {
        const fetchFilmes = async () => {
            try {
                const { data: filmes } = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/filmes`,
                    { headers: HEADERS }
                    );
                setData({ filmes, loading: false, current: 1, pageSize: 5 });
            } catch (error) {
                toast.error("Erro ao carregar filmes");
                setData((d) => ({ ...d, loading: false }));
            }
        };

        fetchFilmes();
    }, []);

    const openModal = async (filmes) => {
        setModalInfo({ visible: true, filmes, generos: null, loading: true });

        try {
            const { data: generos } = await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL}/generos/${filmes.id}`,
                { headers: HEADERS}
            );
            setModalInfo((m) => ({ ...m, generos, loading: false }));
        } catch {
            toast.error("Erro ao carregar generos");
            setModalInfo((m) => ({ ...m, loading: false }));
        }
    };

    const paginatedFilmes = () => {
        const start = (data.current - 1) * data.pageSize;
        return data.filmes.slice(start, start + data.pageSize);
    };

    return (
        <div>
            <Header />
            <h1 className={styles.filmesTitle}>Lista de Filmes</h1>
            <Pagination
                current={data.current}
                pageSize={data.pageSize}
                total={data.filmes.lenght} 
                onChange={(page, size) =>
                    setData((d) => ({ ...d, current: page, pageSize: size }))
                }
                showSizeChanger
                pageSizeOptions={["5", "10", "50"]}
            />

            {data.loading ? (
                <Image 
                src="/images/loading.gif"
                width={300}
                height={300}
                alt="Loading"
                />
            ) : (
                <div className={styles.cardsContainer}>
                    {paginatedFilmes().map((filmes) => (
                        <Card 
                            key={filmes.id}
                            className={styles.card}
                            hoverable
                            onClick={() => openModal(filmes)}
                            cover={
                                <Image 
                                alt={filmes.name}
                                src={filmes.photo || "/public/images/200.svg"}
                                width={220}
                                height={220}
                                />
                            }
                        >
                            <Card.Meta 
                                title={filmes.name}
                                description={filmes.classificacaoIndicativa}
                            />
                        </Card>
                    ))}
                </div>
            )}

            <Modal
                title={`Gêneros de ${modalInfo.filmes?.name}`}
                open={modalInfo.visible}
                onCancel={() =>
                    setModalInfo({
                        visible: false,
                        filmes: null,
                        generos: null,
                        loading: false,
                    })
                }
                onOk={() =>
                    setModalInfo({
                        visible: false,
                        filmes: null,
                        generos: null,
                        loading: false,
                    })
                }
                width={600}
            >
                {modalInfo.loading ? (
                    <Skeleton active />
                ) : modalInfo.generos ? (
                    <div className={styles.generosInfo}>
                        <p>
                            <span className={styles.label}>Subgênero:</span>{" "}
                            {modalInfo.generos.subgenero}
                        </p>
                        <p>
                            <span className={styles.label}>Descrição:</span>{" "}
                            {modalInfo.generos.descricao}
                        </p>
                    </div>
                    ) : (
                    <p style={{ textAlign: "center" }}>Gêneros não encontrados</p>
                    )}
            </Modal>
            <ToastContainer position="top-right" autoClose={4500} />
        </div>
    );
}