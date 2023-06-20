import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            state.sort((a, b) => {
                if (a.name > b.name) {
                    return 1
                } else if (a.name < b.name) {
                    return -1
                } else {
                    return 0
                }
            })

            if (action.payload === 'down') {
                return state.reverse()
            }

            return state // need to fix
        }
        case 'check': {
            state = state.filter((u) => u.age >= action.payload)
            return state // need to fix
        }
        default:
            return state
    }
}
