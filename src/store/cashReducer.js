const defaultState = {
    cash: 1,
};

// в dispatch передается action = {type: 'INCREMENT', payload: 'значение'}

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const cashReducer = (state = defaultState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, cash: state.cash + action.payload };
        case DECREMENT:
            return { ...state, cash: state.cash - action.payload };
        default:
            return state;
    }
};
