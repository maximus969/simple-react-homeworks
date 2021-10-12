import React, { useState } from 'react'
import SuperButton from '../../h4/common/c2-SuperButton/SuperButton'
import SuperCheckbox from '../../h4/common/c3-SuperCheckbox/SuperCheckbox'
import { RequestAPI } from './RequestAPI'

export const Request = () => {

  const [state, setState] = useState<any>('begining')
  const [checked, setChecked] = useState<boolean>(false)
  const [disabled, setDisabled] = useState<boolean>(false)

  const postSomething = () => {
      setDisabled(true)
      RequestAPI.postTest(checked)
        .then((res) => {
          setState(res.data)
          setDisabled(false)
        })
  }

  const onChangeHandler = () => {
    setChecked(!checked)
  }

  return (
    <div>
      {JSON.stringify(state)}
      <button onClick={postSomething} disabled={disabled}>post</button>
      <input type={'checkbox'} checked={checked} onChange={onChangeHandler} />
    </div>
  )
}