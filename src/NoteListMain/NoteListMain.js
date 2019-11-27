import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Note from '../Note/Note'
import CircleButton from '../CircleButton/CircleButton'
import NotefulContext from '../NotefulContext'
import { getNotesForFolder } from '../notes-helpers'
import PropTypes from 'prop-types'
import './NoteListMain.css'
import config from '../config'

export default class NoteListMain extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

  static contextType = NotefulContext

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/notes`)
      .then(notes => {
        if(!notes.ok) {
          return notes.json().then(e => Promise.reject(e));
        }
        return notes.json()
      })
      .then(notesRes => {
        this.setState({notes: notesRes})
      })
      .catch(error => {
        console.error({error})
      })
  }

  handleDeleteNote = noteId => {
    this.props.history.push('/')
    this.setState({
      notes: this.state.notes.filter(note => note.id !==noteId)
    })
  }

  render() {
    const { folderId } = this.props.match.params
    const { notes=[] } = this.context
    const notesForFolder = getNotesForFolder(notes, folderId)
  return (
    <section className='NoteListMain'>
      <ul>
        {notesForFolder.map(note =>
          <li key={note.id}>
            <Note
              id={note.id}
              name={note.name}
              modified={note.modified}
              onDeleteNote={this.handleDeleteNote}
            />
          </li>
        )}
      </ul>
      <div className='NoteListMain__button-container'>
        <CircleButton
          tag={Link}
          to='/add-note'
          type='button'
          className='NoteListMain__add-note-button'
        >
          <FontAwesomeIcon icon='plus' />
          <br />
          Note
        </CircleButton>
      </div>
    </section>
  )
}
}

NoteListMain.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object
}
