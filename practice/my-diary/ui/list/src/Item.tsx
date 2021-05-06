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
    <Row>
      <StyledItem
        onDoubleClick={() => setNotes(toggleStatus(notes, note.id, 'liked'))}
        backgroundColor='white'
        borderRadius='normal'
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
          <StarIcon color={note.important ? '#FFD700' : 'gray'} />
        </Button>
        <Layout flexBasis={3} />
        <Button
          backgroundColor='white'
          border='none'
          width='40px'
          onClick={() => setNotes(deleteItem(notes, note.id))}
        >
          <TrashIcon />
        </Button>
        <Layout flexBasis={3} />
        <Button backgroundColor='white' border='none' width='40px'>
          <HeartIcon opacity={note.liked ? '1' : '0'} />
        </Button>
      </Box>
    </Row>
    <Layout flexBasis={6} />
  </>
)
