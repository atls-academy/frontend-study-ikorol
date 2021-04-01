import React                              from 'react'

import { IconButton }                     from '@ui/button'
import { HeartIcon, StarIcon, TrashIcon } from '@ui/icons'
import { Item }                           from '@ui/item'
import { Box }                            from '@ui/layout'
import { Text }                           from '@ui/text'

export const List: any = ({ notes }) => {
  const elements = notes.map(item => {
    return (
      <Item key={item.id}>
        <Text lineHeight='35px'>{item.note}</Text>
        <Box alignItem='center' display='flex' margin='0'>
          <IconButton>
            <StarIcon />
          </IconButton>
          <IconButton>
            <TrashIcon />
          </IconButton>
          <HeartIcon opacity='0' />
        </Box>
      </Item>
    )
  })
  return elements
}
