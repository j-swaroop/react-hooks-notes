// Write your code here
import {Note, NoteDescription, NoteTitle} from './styledComponents'

const NoteItem = props => {
  const {details} = props
  const {title, textArea} = details

  return (
    <Note>
      <NoteTitle> {title} </NoteTitle>
      <NoteDescription> {textArea} </NoteDescription>
    </Note>
  )
}

export default NoteItem
