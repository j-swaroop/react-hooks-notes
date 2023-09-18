// Write your code here
import {useState} from 'react'
import {v4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  MainContainer,
  ResponsiveContainer,
  Heading,
  FormContainer,
  TextArea,
  Input,
  Button,
  NotesContainer,
  NoNotesContainer,
  NoNotesImg,
  NoNotesText,
  NoNotesHeading,
  NotesList,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [textArea, setTextArea] = useState('')

  const [notesList, setNotesList] = useState([])

  const onSubmitForm = event => {
    event.preventDefault()

    const notesItem = {
      id: v4(),
      title,
      textArea,
    }

    setNotesList(prevState => [...prevState, notesItem])
    setTitle('')
    setTextArea('')
    
  }

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeTextArea = event => {
    setTextArea(event.target.value)
  }

  return (
    <MainContainer>
      <ResponsiveContainer>
        <Heading> Notes </Heading>
        <FormContainer onSubmit={onSubmitForm}>
          <Input
            type="text"
            placeholder="Title"
            onChange={onChangeTitle}
            value={title}
          />
          <TextArea
            cols="25"
            rows="5"
            placeholder="Take a Note..."
            onChange={onChangeTextArea}
            value={textArea}
          />
          <Button type="submit"> Add </Button>
        </FormContainer>

        <NotesContainer>
          {notesList.length > 0 ? (
            <NotesList>
              {notesList.map(item => (
                <NoteItem key={item.id} details={item} />
              ))}
            </NotesList>
          ) : (
            <NoNotesContainer>
              <NoNotesImg
                src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
                alt="notes empty"
              />
              <NoNotesHeading> No Notes Yet </NoNotesHeading>
              <NoNotesText> Notes you add will appear here</NoNotesText>
            </NoNotesContainer>
          )}
        </NotesContainer>
      </ResponsiveContainer>
    </MainContainer>
  )
}

export default Notes
