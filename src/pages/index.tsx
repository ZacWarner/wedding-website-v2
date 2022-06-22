import { trpc } from '@/utils/trpc'
import type { NextPage } from 'next'
import Head from 'next/head'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Image from 'next/image'
import styles from '../styles/frontpage.module.css';

const Home: NextPage = () => {

  return (
    <div>
      <div className="h-screen w-screen flex flex-col">
        <div className=''>
          <AppBar position="static" color='transparent'>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Z & L
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </div>
        <div className={styles.heroImage}>
          <Typography align='center' className={styles.heroText} variant='h1'>Zac And Lisa </Typography>
          <Typography align='center' className={styles.heroText} variant='h2'>Are Getting Married! </Typography>
          <hr className={styles.break} />
          <Typography align='center' className={styles.heroText} variant='h4'>10-29-2022</Typography>
          <Typography align='center' className={styles.heroText} variant='h4'>Sterling Hotel</Typography>
          <Typography align='center' className={styles.heroText} variant='h4'>Sacramento California</Typography>
        </div>
      </div>
    </div>
  )
}

export default Home
