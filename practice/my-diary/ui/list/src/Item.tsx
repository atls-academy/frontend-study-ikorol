import styled                                                     from '@emotion/styled'
import React, { useState }                                        from 'react'
import { border, color, system }                                  from 'styled-system'

import { Button }                                                 from '@ui/button'
import { CircleDotIcon, DotIcon, HeartIcon, StarIcon, TrashIcon } from '@ui/icons'
import { Box, Layout, Row }                                       from '@ui/layout'
import { Text }                                                   from '@ui/text'

const StyledItem = styled.li(
  system({
    cursor: true,
  }),
  () => ({
    display: 'flex',
    boxSizing: 'border-box',
    width: '470px',
    hyphens: 'auto',
  }),
  color,
  border,
)

export const Item = ({ notes, setNotes, note, deleteItem, toggleStatus }) => {
  const [hover, setHover] = useState(false)
  return (
    <>
      <Row onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <Layout flexBasis={80} />
        <Box
          onClick={() => setNotes(toggleStatus(notes, note.id, 'done'))}
          display='flex'
          border='none'
          cursor='pointer'
        >
          <Box position='relative' left='11px' border='none'>
            <DotIcon opacity={note.done ? '1' : '0'} />
          </Box>
          <CircleDotIcon />
        </Box>
        <Layout flexBasis={30} />
        <StyledItem
          cursor='pointer'
          onDoubleClick={() => setNotes(toggleStatus(notes, note.id, 'liked'))}
        >
          <Text
            lineHeight='large'
            color='grayBlue'
            textDecoration={note.done ? 'line-through' : 'none'}
          >
            {note.note}
          </Text>
        </StyledItem>
        <Button size='mini' onClick={() => setNotes(toggleStatus(notes, note.id, 'important'))}>
          <StarIcon
            opacity={note.important || hover ? '1' : '0'}
            color={note.important ? 'khaki' : 'gray'}
          />
        </Button>
        <Layout flexBasis={10} />
        <Button size='mini' onClick={() => setNotes(toggleStatus(notes, note.id, 'liked'))}>
          <HeartIcon
            opacity={note.liked || hover ? '1' : '0'}
            color={note.liked ? 'red' : 'gray'}
          />
        </Button>
        <Layout flexBasis={10} />
        <Button
          size='mini'
          onClick={() => setNotes(deleteItem(notes, note.id))}
          opacity={hover ? '1' : '0'}
        >
          <TrashIcon />
        </Button>
        <Layout flexBasis={50} />
      </Row>
      <Layout flexBasis={6} />
    </>
  )
}
