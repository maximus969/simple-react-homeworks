import React from 'react'
import { AffairType } from './HW2'
import s from './Affair.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    const priorityClass = s.priority + ' ' + s[props.affair.priority]

    return (
        <div className={s.content}> 
            <div className={s.name}>{props.affair.name}</div>
            <div className={priorityClass}>{props.affair.priority}</div>

            <button className={s.button} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
