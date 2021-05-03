import React                              from 'react'
import styled                             from '@emotion/styled'
import { border, color }                  from 'styled-system'

import { Button }                         from '@ui/button'
import { HeartIcon, StarIcon, TrashIcon } from '@ui/icons'
import { Box, Layout, Row }               from '@ui/layout'
import { Text }                           from '@ui/text'
import { useNotes }                       from '@store/notes'
import { theme }                          from '@ui/theme'

const StyledItem = styled.li(
  () => ({
    display: 'flex',
    boxSizing: 'border-box',
    width: '100%',
    borderRadius: theme.radii.normal,
    backgroundColor: theme.colors.white,
  }),
  color,
  border,
)

export const Item = ({ note, deleteItem, toggleStatus }) => {
  const [notes, setNotes] = useNotes()
  return (
    <>
      <Row>
        <StyledItem onDoubleClick={() => setNotes(toggleStatus(notes, note.id, 'liked'))}>
          <Text lineHeight='40px' padding='0 6px'>
            {note.note}
          </Text>
        </StyledItem>
        <Layout flexBasis={3} />
        <Box>
          <Button
            backgroundColor={theme.colors.white}
            border='none'
            width='40px'
            onClick={() => setNotes(toggleStatus(notes, note.id, 'important'))}
          >
            <StarIcon color={note.important ? theme.colors.yellow : theme.colors.darkGrey} />
          </Button>
          <Layout flexBasis={3} />
          <Button
            backgroundColor={theme.colors.white}
            border='none'
            width='40px'
            onClick={() => setNotes(deleteItem(notes, note.id))}
          >
            <TrashIcon />
          </Button>
          <Layout flexBasis={3} />
          <Button backgroundColor={theme.colors.white} border='none' width='40px'>
            <HeartIcon opacity={note.liked ? '1' : '0'} />
          </Button>
        </Box>
      </Row>
      <Layout flexBasis={6} />
    </>
  )
}
