const initState = {
    themeId: 1,
}

export type ThemeStateType = typeof initState
export type ChangeThemeActionType = {
    type: 'SET_THEME_ID'
    id: number
}
export type ThemeActionsType = ChangeThemeActionType

export const themeReducer = (state: ThemeStateType = initState, action: ThemeActionsType): ThemeStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID': {
            return {
                ...state,
                themeId: Number(action.id),
            }
        }

        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeActionType => ({ type: 'SET_THEME_ID', id }) // fix any
