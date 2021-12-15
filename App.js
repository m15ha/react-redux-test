import * as React from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'

const dispatch = useDispatch()
const state = useSelector(state => state.state)

function App() {
  return (
    <ChakraProvider>
      {state}
    </ChakraProvider>
  )
}