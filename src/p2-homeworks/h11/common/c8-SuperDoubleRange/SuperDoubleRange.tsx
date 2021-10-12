import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { ValuePropsType } from '../../HW11';
import s from './SuperDoubleRange.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChangeRange?: (value: [number, number]) => void
    onChangeDoubleRange?: (value: number | number[]) => void
    value?: [number, number]
    value1?: number
    value2?: number
    values: ValuePropsType
    // min, max, step, disable, ...
}

const minDistance = 0;

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, type, 
        onChangeDoubleRange, value1, value2, values,
        // value,
        // min, max, step, disable, ...
    }
) => {

    const handleChange = (event: any, newValue: number | number[], activeThumb: any) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            onChangeDoubleRange && onChangeDoubleRange([Math.min(newValue[0], values.value2 - minDistance), values.value2])
        } else {
            onChangeDoubleRange && onChangeDoubleRange([values.value1, Math.max(newValue[1], values.value1 + minDistance)]);
        }
    };

    return (
        <div className={s.slider}>
            <Box sx={{ width: 150 }}>
                <Slider
                    getAriaLabel={() => 'Minimum distance'}
                    value={[values.value1, values.value2]}
                    onChange={handleChange}
                    valueLabelDisplay="off"
                    disableSwap
                />
            </Box>
        </div>
    )
}

export default SuperDoubleRange
