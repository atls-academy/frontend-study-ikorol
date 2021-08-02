import styled                             from '@emotion/styled'
import React, { useState }                from 'react'
import { border, color, system }          from 'styled-system'

import { HeartIcon, StarIcon, TrashIcon } from '@ui/icons'
import { Box, Layout, Row }               from '@ui/layout'
import { Text }                           from '@ui/text'

const StyledItem = styled.li(
  system({
    cursor: true,
  }),
  () => ({
    display: 'flex',
    boxSizing: 'border-box',
    width: '100%',
    hyphens: 'auto',
    cursor: 'pointer',
  }),
  color,
  border
)

export const Item = ({ notes, setNotes, note, deleteItem, toggleStatus }) => {
  const [hover, setHover] = useState(false)
  return (
    <>
      <Row
        alignItems='center'
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Layout flexBasis={80} />
        <Box
          cursor='pointer'
          width='16px'
          height='12px'
          onClick={() => setNotes(toggleStatus(notes, note.id, 'done'))}
          backgroundColor={note.done ? 'deepPurple' : 'none'}
          border='medium'
          borderColor='grayBlue'
          borderRadius='giant'
        />

        <Layout flexBasis={30} />
        <StyledItem onDoubleClick={() => setNotes(toggleStatus(notes, note.id, 'liked'))}>
          <Text
            lineHeight='medium'
            color='grayBlue'
            textDecoration={note.done ? 'line-through' : 'none'}
          >
            {note.note}
          </Text>
        </StyledItem>
        <Box cursor='pointer' onClick={() => setNotes(toggleStatus(notes, note.id, 'important'))}>
          <StarIcon
            opacity={note.important || hover ? '1' : '0'}
            color={note.important ? 'khaki' : 'gray'}
          />
        </Box>
        <Layout flexBasis={20} />
        <Box cursor='pointer' onClick={() => setNotes(toggleStatus(notes, note.id, 'liked'))}>
          <HeartIcon
            opacity={note.liked || hover ? '1' : '0'}
            color={note.liked ? 'red' : 'gray'}
          />
        </Box>
        <Layout flexBasis={20} />
        <Box
          cursor='pointer'
          onClick={() => setNotes(deleteItem(notes, note.id))}
          opacity={hover ? '1' : '0'}
        >
          <TrashIcon />
        </Box>
        <Layout flexBasis={50} />
      </Row>
      <Layout flexBasis={20} />
    </>
  )
}
