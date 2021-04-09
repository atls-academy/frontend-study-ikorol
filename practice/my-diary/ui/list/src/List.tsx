import React, { useState }                from 'react'

import { IconButton }                     from '@ui/button'
import { HeartIcon, StarIcon, TrashIcon } from '@ui/icons'
import { Box }                            from '@ui/layout'
import { Text }                           from '@ui/text'

import { Item }                           from './Item'

export const List: any = ({ notes }) => {
  const elements = notes.map(item => {
    const [isImportant, setIsImportant] = useState(item.important)
    const [isLiked, setIsLiked] = useState(false)
    return (
      <Box key={item.id} margin='5px 0'>
        <Item>
          <Text lineHeight='40px' onDoubleClick={() => setIsLiked(!isLiked)}>
            {item.note}
          </Text>
        </Item>
        <Box alignItem='center' margin='0'>
          <IconButton>
            <StarIcon
              onClick={() => setIsImportant(!isImportant)}
              color={isImportant ? '#FFD700' : '#6c757d'}
            />
          </IconButton>
          <IconButton>
            <TrashIcon />
          </IconButton>
          <IconButton>
            <HeartIcon opacity={isLiked ? '1' : '0'} />
          </IconButton>
        </Box>
      </Box>
    )
  })
  return elements
}
