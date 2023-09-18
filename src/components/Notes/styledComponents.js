// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  padding-top: 20px;
  padding-bottom: 20px;
`

export const ResponsiveContainer = styled.div`
  width: 90%;
  max-width: 1140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`
export const Heading = styled.h1`
  color: #4c63b6;
  font-family: 'Bree Serif';
  font-size: 36px;
  font-weight: 500;
  @media (max-width: 576px) {
    font-size: 28px;
  }
`

export const FormContainer = styled.form`
  box-shadow: 0 4px 16px 0 #aab8c8;
  width: 85%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
  min-height: 35vh;
  @media (max-width: 576px) {
    width: 100%;
  }
`

export const Input = styled.input`
  border: none;
  background-color: transparent;
  font-family: 'Roboto';
  padding-left: 14px;
  outline: none;
`

export const TextArea = styled.textarea`
  border: none;
  background-color: transparent;
  font-family: 'Roboto';
  padding-left: 14px;
  outline: none;
  margin-top: 25px;
`

export const Button = styled.button`
  color: #ffffff;
  font-family: 'Roboto';
  background-color: #4c63b6;
  border: none;
  border-radius: 5px;
  height: 38px;
  width: 80px;
  cursor: pointer;
  outline: none;
  align-self: flex-end;
  margin-top: 25px;
  margin-bottom: 5px;
`

export const NotesContainer = styled.div`
  height: 60vh;
  width: 85%;
  @media (max-width: 576px) {
    width: 100%;
  }
`

export const NoNotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`
export const NoNotesImg = styled.img`
  width: 80%;
  max-width: 150px;
`
export const NoNotesHeading = styled.h1`
  color: #475569;
  font-family: 'Roboto';
  font-size: 20px;
  margin-top: 20px;
`

export const NoNotesText = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 16px;
  margin-top: 3px;
`

export const NotesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding-left: 0;
  margin-top: 30px;
`
