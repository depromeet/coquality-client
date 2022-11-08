import React from 'react'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

type Props = {}

const Index: React.FC<Props> = (props) => {
  return (
    <div>
      <CircularProgress isIndeterminate color="green.300" />{' '}
    </div>
  )
}

export default Index
