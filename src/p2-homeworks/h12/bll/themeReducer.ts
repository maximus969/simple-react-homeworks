export type InitStateType = {
    theme: string
}

const initState: InitStateType = {
    theme: 'some'
};

export const themeReducer = (state = initState, action: ChangeThemeActionType): InitStateType => { // fix any
    switch (action.type) {
        case "SET_THEME": {
            return {
                ...state,
                theme: action.theme
            };
        }
        default: return state;
    }
};

export const changeThemeC = (theme: string) => ({
    type: 'SET_THEME',
    theme
}); 

export type ChangeThemeActionType = ReturnType<typeof changeThemeC>