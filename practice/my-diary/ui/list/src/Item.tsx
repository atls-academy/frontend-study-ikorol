import React                              from 'react'
import styled                             from '@emotion/styled'
import { border, color }                  from 'styled-system'

import { Button }                         from '@ui/button'
import { HeartIcon, StarIcon, TrashIcon } from '@ui/icons'
import { Box, Layout, Row }               from '@ui/layout'
import { Text }                           from '@ui/text'

const StyledItem = styled.li(
  () => ({
    display: 'flex',
    boxSizing: 'border-box',
    width: '100%',
  }),
  color,
  border,
)

export const Item = ({ notes, setNotes, note, deleteItem, toggleStatus }) => (
  <>
    <Row
      onMouseEnter={() => setNotes(toggleStatus(notes, note.id, 'onHover'))}
      onMouseLeave={() => setNotes(toggleStatus(notes, note.id, 'onHover'))}
    >
      <StyledItem
        onDoubleClick={() => setNotes(toggleStatus(notes, note.id, 'liked'))}
        backgroundColor='white'
      >
        <Text lineHeight='40px' padding='0 50px' color='grayBlue'>
          {note.note}
        </Text>
      </StyledItem>
      <Layout flexBasis={3} />
      <Box>
        <Button
          backgroundColor='white'
          border='none'
          width='40px'
          onClick={() => setNotes(toggleStatus(notes, note.id, 'important'))}
        >
          <StarIcon
            opacity={note.important || note.onHover ? '1' : '0'}
            color={note.important ? '#FFD700' : 'gray'}
          />
        </Button>

        <Button backgroundColor='white' border='none' width='40px'>
          <HeartIcon
            onClick={() => setNotes(toggleStatus(notes, note.id, 'liked'))}
            opacity={note.liked || note.onHover ? '1' : '0'}
            color={note.liked ? 'red' : 'gray'}
          />
        </Button>

        <Button
          backgroundColor='white'
          border='none'
          width='40px'
          onClick={() => setNotes(deleteItem(notes, note.id))}
          opacity={note.onHover ? '1' : '0'}
        >
          <TrashIcon />
        </Button>
      </Box>
      <Layout flexBasis={50} />
    </Row>
    <Layout flexBasis={6} />
  </>
)
