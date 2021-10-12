import React, { useState } from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Clock.module.css'

function Clock() {
    const newTime = () => {
        const seconds = new Date().getSeconds() < 10 ? `0${new Date().getSeconds()}` : new Date().getSeconds()
        const minutes = new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes()
        const hours = new Date().getHours() < 10 ? `0${new Date().getHours()}` : new Date().getHours()
        const newDate = `${hours}:${minutes}:${seconds}`
        return newDate
    }

    const newDate = () => {
        const day = new Date().getDate() < 10 ? `0${new Date().getDate()}` : new Date().getDate()
        const month = new Date().getMonth() + 1 < 10 ? `0${new Date().getMonth() + 1}` : new Date().getMonth() + 1
        const year = new Date().getFullYear()
        const newDate = `${day}:${month}:${year}`
        return newDate
    }


    const [timerId, setTimerId] = useState<number>(0)
    const [time, setTime] = useState<string>(newTime())
    const [date, setDate] = useState<string>(newDate())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setTime(newTime())
            setDate(newDate())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    return (
        <div>
            <div className={s.block}>
                <div
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    {time}
                </div>

                {show && (
                    <div>
                        {date}
                    </div>
                )}
            </div>


            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
