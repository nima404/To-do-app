import { actionTypes } from "./actionTypes";

export function reducer(state, action) {
    switch (action.type) {
        case actionTypes.add:
            return { ...state, userName: [...state.userName, action.payload.name] }

        default:
            break;
    }
}