import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Preloader } from '../../common/Preloader/Preloader';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import { loadingAC, StatePropsType } from './bll/loadingReducer';
import { AppStoreType } from './bll/store';
import s from './HW10.module.css'

function HW10() {

    const state = useSelector<AppStoreType, StatePropsType>(state => state.loading)
    const dispatch = useDispatch()

    const loading = state.isLoading

    const setLoading = () => {
        dispatch(loadingAC())
        setTimeout(() => {
            dispatch(loadingAC())
        }, 5000)
    };

    return (
        <div>
            <hr />
            homeworks 10

            {/*should work (должно работать)*/}
            <div className={s.block}>
                {loading
                    ? (
                        // <div>крутилка...</div>
                        <div>
                            <Preloader />
                        </div>
                    ) : (
                        <div>
                            <SuperButton onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
                }
            </div>

            <hr />
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr />
        </div>
    )
}

export default HW10
