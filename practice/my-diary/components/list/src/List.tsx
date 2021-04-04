import React, { useState }                from 'react'

import { IconButton }                     from '@ui/button'
import { HeartIcon, StarIcon, TrashIcon } from '@ui/icons'
import { Item }                           from '@ui/item'
import { Box }                            from '@ui/layout'
import { Text }                           from '@ui/text'

export const List: any = ({ notes }) => {
  const elements = notes.map(item => {
    const [isImportant, setIsImportant] = useState(item.important)
    const [isLiked, setIsLiked] = useState(null)

    return (
      <Item key={item.id}>
        <Text lineHeight='40px' onDoubleClick={() => setIsLiked(!isLiked)}>
          {item.note}
        </Text>
        <Box alignItem='center' display='flex' margin='0'>
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
      </Item>
    )
  })
  return elements
}
