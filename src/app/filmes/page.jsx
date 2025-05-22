"use client";

import { useEffect, useState } from "react";
import axios from "axios"; 
import { Pagination, Modal, Card, Skeleton } from "antd";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import styles from "./Filmes.module.css";
import { headers } from "next/headers";

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

}