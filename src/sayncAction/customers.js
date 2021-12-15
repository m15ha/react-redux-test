import { addManyCustomersAction } from '../store/customerReducer';

export const fetchCustomers = () => {
    return function (dispatch) {
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => {
                dispatch(addManyCustomersAction(json));
            });
    };
};
