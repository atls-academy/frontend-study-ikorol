import React, { useState }                from 'react'

import { IconButton }                     from '@ui/button'
import { HeartIcon, StarIcon, TrashIcon } from '@ui/icons'
import { Box, Layout, Row }               from '@ui/layout'
import { Text }                           from '@ui/text'

import { Item }                           from './Item'

export const List: any = ({ notes }) =>
  notes.map(item => {
    const [isImportant, setIsImportant] = useState(item.important)
    const [isLiked, setIsLiked] = useState(false)
    return (
      <Row key={item.id}>
        <Item>
          <Text lineHeight='40px' onDoubleClick={() => setIsLiked(!isLiked)}>
            {item.note}
          </Text>
        </Item>
        <Layout flexBasis={3} />
        <Box alignItem='center'>
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
      </Row>
    )
  })
