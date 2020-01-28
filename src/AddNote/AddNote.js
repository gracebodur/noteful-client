import React, { Component } from 'react'
import NotefulForm from '../NotefulForm/NotefulForm'
import NotefulContext from '../NotefulContext'
import config from '../config'
import './AddNote.css'

export default class AddNote extends Component {
  static defaultProps = {
    history: {
      push: () => { }
    },
  }
  static contextType = NotefulContext;

  handleSubmit = e => {
    e.preventDefault()
    const newNote = {
      note_name: e.target['note-name'].value,
      modified: new Date(),
      folderid: e.target['note-folder-id'].value,
      content: e.target['note-content'].value,
    }
    fetch(`${config.API_ENDPOINT}/notes`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newNote),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(note => {
        this.context.addNote(note)
        this.props.history.push(`/notes/${note.noteid}`)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    const { folders=[] } = this.context
    return (
      <section className='Add-note'>
        <h2>Create a note</h2>
        <NotefulForm onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='note-name-input'>
              Name
            </label>
            <input 
            type='text' 
            id='note-name-input' 
            name='note-name' />
          </div>
          <div className='form-group'>
            <label htmlFor='note-content-input'>
              Content
            </label>
            <textarea 
            id='note-content-input' 
            name='note-content' />
          </div>
          <div className='form-group'>
            <label htmlFor='note-folder-select'>
              Folder
            </label>
            <select 
            id='note-folder-select' 
            name='note-folder-id'>
              <option value={null}>...</option>
              {folders.map(folder =>
                <option key={folder.folderid} value={folder.folderid}>
                  {folder.folder_name}
                </option>
              )}
            </select>
          </div>
          <div>
            <br />
            <button type='submit'>
              Add note
            </button>
          </div>
        </NotefulForm>
      </section>
    )
  }
}