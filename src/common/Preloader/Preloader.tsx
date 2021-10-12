import React from 'react'
import preloader from '../../assets/images/preloader.svg'
import s from './Preloader.module.css'

export const Preloader = () => {
  return <div className={s.block}>
    <img src={preloader}/>
  </div>
}