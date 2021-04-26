
const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const RESTART = 'restart';
const STABLISH = 'stablish';

const initialState = 0;

export default function counterReducer(state = initialState, action) {
    switch(action.type) {
        case INCREMENT:
            return state = state + 1;
        case DECREMENT:
            return state = state - 1;
        case RESTART:
            return state = initialState;
        case STABLISH:
            return state = action.payload;
        default:
            return state;
    }
}

export function incrementAction() {
    return {
        type: INCREMENT,
    }
}

export function decrementAction() {
    return {
        type: DECREMENT,
    }
}

export function restartAction() {
    return {
        type: RESTART,
    }
}

export function stablishAction(param) {
    return {
        type: STABLISH,
        payload: param,
    }
}