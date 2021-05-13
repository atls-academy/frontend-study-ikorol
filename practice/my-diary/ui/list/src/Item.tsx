import React                                                      from 'react'
import styled                                                     from '@emotion/styled'
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
      <Layout flexBasis={70} />
      <Box
        onClick={() => setNotes(toggleStatus(notes, note.id, 'done'))}
        display='flex'
        alignItems='center'
      >
        <Box position='relative' left='11px'>
          <DotIcon opacity={note.done ? '1' : '0'} />
        </Box>
        <Box>
          <CircleDotIcon />
        </Box>
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
          textDecorationColor='#e4eaff'
        >
          {note.note}
        </Text>
      </StyledItem>
      <Box>
        <Button
          backgroundColor='white'
          border='none'
          onClick={() => setNotes(toggleStatus(notes, note.id, 'important'))}
        >
          <StarIcon
            opacity={note.important || note.onHover ? '1' : '0'}
            color={note.important ? '#FFD700' : 'gray'}
          />
        </Button>
        <Button
          backgroundColor='white'
          border='none'
          onClick={() => setNotes(toggleStatus(notes, note.id, 'liked'))}
        >
          <HeartIcon
            opacity={note.liked || note.onHover ? '1' : '0'}
            color={note.liked ? 'red' : 'gray'}
          />
        </Button>
        <Button
          backgroundColor='white'
          border='none'
          color='grayBlue'
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
