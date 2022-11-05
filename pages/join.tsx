import React from "react";
import Header from "./components/header";
import BasicTable from "./components/table";
import styles from '../styles/Home.module.scss'
import Head from 'next/head'
import { Button } from "react-bootstrap";
import { getDatabase, ref, set, get } from "firebase/database";
import Link from "next/link";

export default function Form() {
    const columns = React.useMemo(
        () => [
            {
                Header: "Session Name",
                accessor: "session" // accessor is the "key" in the data
            },
            {
                Header: "Genre",
                accessor: "genre"
            },
            {
                Header: "Date",
                accessor: "date"
            },
            {
                Header: "Time",
                accessor: "time"
            },
            {
                Header: "Location",
                accessor: "location"
            },
            {
                Header: "Roles",
                accessor: "roles"
            }
        ],
        []
        );
    const data = React.useMemo(
        () => [
            {
                session: "Friday Night Jams",
                genre: "Any",
                date: "11/11/22",
                time: "7:00 PM",
                location: "Parrish Hall, Swarthmore",
                roles: "Drummer, Bassist, Guitarist, Keyboardist..."
            },

        ],
        []
    );

    /*
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${userId}`)).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
    console.error(error);
    });*/

    return (
        <div className={styles.container}>
        <Head>
          <title>TriCoJams</title>
          <meta name="description" content="Jam session finder for the Swarthmore/Haverford/Bryn Mawr community" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
            <Header/>
            <Link href='/#home'>
                <Button className="m-4">
                    Back
                </Button>
            </Link>
            <BasicTable columns={columns} data={data}/>
        </main>
      </div>
    )
  }