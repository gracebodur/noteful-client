import React, { Component } from 'react'
import NotefulForm from '../NotefulForm/NotefulForm'
import NotefulContext from '../NotefulContext'
import config from '../config'
import './AddNote.css'

export default class AddNote extends Component {
    static defaultProps = {
        history: {
            push: () => {}
        },
    }
    static contextType = NotefulContext
  
    handleSubmit = e => {
        e.preventDefault()
        const newNote = {
            note_name: e.target['note-name'].value,
            modified: new Date (),
            folderId: e.target['note-folder-Id'].value,
            content: e.target['note-content'].value,            
        }
        fetch(`${config.API_ENDPOINT}/notes`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newNote)
        })
        .then(response => {
            if(!response.ok){
              return response.json().then(e=>Promise.reject(e))
            }
            return response.json()
          })
          .then(note => {
              this.context.addnote(note)
              this.props.history.push(`/notes/${note.id}`)
          })
          .catch(error => {
              console.log({error})
          })
    }

    render() {
       const { folders = [] } = this.context
        return(
            <section className='Add-note'>
            <h2>Create Note</h2>
            <NotefulForm  onSubmit={ e => this.handleSubmit(e)}>
            <div className="form-group">
                <label 
                    htmlFor='note-name' 
                    className='Add-note-text'>
                    Name
                </label>
                <br />

                <input 
                    className='Add-note-input'
                    type = 'text' 
                    name='note-name' 
                    id = 'note-name' 
                />
                </div>

                <div className="form-group">
                    <label 
                    htmlFor='content-name'>
                    Content
                    </label>
                    <br />

                    <textarea
                        className='Add-note-content-text'
                        name='content-name' 
                        id='content-name' />
                </div>

                <div className='form-group'>
                <label htmlFor= 'folder-select'>
                    Choose a folder
                </label> 
                <br />

                <select
                    id = 'folder-select' 
                    name='folder-select'> 
                <option 
                    key={folders.id} 
                    value={folders.id}>
                        {folders.folder_name}
                </option>
                )}
                </select>
                </div>
                <br />
                <div >
                <button 
                    className = 'Add-note-button'
                    type = 'submit'>
                AddNote
                </button>
                </div>
                </NotefulForm>
            </section>
        )
    }
}