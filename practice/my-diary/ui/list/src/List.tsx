import React, { useState }                from 'react'

import { IconButton }                     from '@ui/button'
import { HeartIcon, StarIcon, TrashIcon } from '@ui/icons'
import { Box, Column, Layout, Row }       from '@ui/layout'
import { Text }                           from '@ui/text'

import { Item }                           from './Item'

export const List: any = ({ notes }) =>
  notes.map(item => {
    const [isImportant, setIsImportant] = useState(item.important)
    const [isLiked, setIsLiked] = useState(false)
    return (
      <Column>
        <Row key={item.id}>
          <Item>
            <Text lineHeight='40px' padding='0 6px' onDoubleClick={() => setIsLiked(!isLiked)}>
              {item.note}
            </Text>
          </Item>
          <Layout flexBasis={3} />
          <Box>
            <IconButton>
              <StarIcon
                onClick={() => setIsImportant(!isImportant)}
                color={isImportant ? '#FFD700' : '#6c757d'}
              />
            </IconButton>
            <Layout flexBasis={3} />
            <IconButton>
              <TrashIcon />
            </IconButton>
            <Layout flexBasis={3} />
            <IconButton>
              <HeartIcon opacity={isLiked ? '1' : '0'} />
            </IconButton>
          </Box>
        </Row>
        <Layout flexBasis={5} />
      </Column>
    )
  })
