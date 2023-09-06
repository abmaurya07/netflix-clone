import React from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';
import styles from '../Components/header.module.css'
import Banner from '../Components/Banner';

const DefaultLayout = ({children}) => {
  return (
    <>
      <Grid
        container
        item
        lg={12}
        direction={"row"}
        alignItems="center"
        justifyContent={"space-between"}
        className={styles.header}
        pr={5}
        pl={7}
      >
        <Header />
      </Grid>
    <main >
    <Banner />

    </main>
    </>
  )
}

export default DefaultLayout