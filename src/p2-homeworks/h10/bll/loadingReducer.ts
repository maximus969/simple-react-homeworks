export type StatePropsType = {
    isLoading: boolean
}

const initState: StatePropsType = {
    isLoading: false
}

export const loadingReducer = (state: StatePropsType = initState, action: any): StatePropsType => { 
    switch (action.type) {
        case 'IS_LOADING': {
            return {
                ...state,
                isLoading: !state.isLoading
            }
        }
        default: return state
    }
}

export const loadingAC = (): LoadingActionType => ({ type: 'IS_LOADING' })
type LoadingActionType = {
    type: 'IS_LOADING'
}