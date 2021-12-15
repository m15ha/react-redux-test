import * as React from 'react';

import { ChakraProvider, Text, Button, Box } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addCustomerAction,
    removeCustomerAction,
} from './store/customerReducer';
import { fetchCustomers } from './sayncAction/customers';

export default function App() {
    const dispatch = useDispatch();
    const cash = useSelector((state) => state.cash.cash);
    const customers = useSelector((state) => state.customer.customers);
    const addCash = (cash) => {
        dispatch({ type: 'INCREMENT', payload: cash });
    };
    const removeCash = (cash) => {
        dispatch({ type: 'DECREMENT', payload: cash });
    };
    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now(),
        };
        dispatch(addCustomerAction(customer));
    };
    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id));
    };
    return (
        <ChakraProvider>
            <Button onClick={() => addCash(Number(prompt()))}>+</Button>
            <Text m={4}>{cash}</Text>
            <Button onClick={() => removeCash(Number(prompt()))}>-</Button>
            <Button onClick={() => addCustomer(prompt())}>Add Customer</Button>
            <Button onClick={() => dispatch(fetchCustomers())}>
                Add Many Customers
            </Button>
            <Box my={4}>
                {customers.length > 0 ? (
                    <>
                        {customers.map((customer) => (
                            <Text onClick={() => removeCustomer(customer)}>
                                {customer.name}
                            </Text>
                        ))}
                    </>
                ) : (
                    <Text>No clients</Text>
                )}
            </Box>
        </ChakraProvider>
    );
}
