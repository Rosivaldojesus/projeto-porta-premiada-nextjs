import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Presente from '../components/presente'
import Porta from '../components/Porta'

export default function Home() {
  


  return (
   <div style={{display: 'flex'}}>
     <Porta selecionada={true} />
     <Porta />
     <Porta selecionada={false} />
   </div>
  )
}
