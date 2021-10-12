import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import { changeThemeC, InitStateType } from "./bll/themeReducer";
import s from "./HW12.module.css";

const themes = ['dark', 'red', 'some', 'green'];

function HW12() {
    
    const state = useSelector<AppStoreType, InitStateType>(state => state.theme)
    const dispatch = useDispatch()

    const theme = state.theme

    const onChangeCallback = (value: string) => {
        dispatch(changeThemeC(value))
    }


    return (
        <div className={s[theme]}>
            <hr />
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperSelect options={themes}
                value={theme}
                onChangeOption={onChangeCallback} />

            <hr />
        </div>
    );
}

export default HW12;
