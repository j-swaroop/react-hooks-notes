// Style your elements here
import styled from 'styled-components'

export const Note = styled.li`
  width: 31%;
  margin-right: 15px;
  margin-bottom: 15px;
  border: 1px solid #d8d8d8;
  border-radius: 8px;
  padding: 20px;
  min-height: 150px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  @media (max-width: 576px) {
    width: 100%;
    margin-right: 0;
  }
`

export const NoteTitle = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-size: 18px;
`

export const NoteDescription = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 16px;
  margin-top: 0;
  width: 100px;
`
