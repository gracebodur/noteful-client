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

    constructor() {
      super();
      this.state = {
        name: "",
        content: "",
        folderid: "",
      }
    }

    updateName(name) {
      this.setState({ name: { value: name, touched: true } })
    }
  
    updateContent(content) {
      this.setState({ content: { value: content, touched: true } })
    }

    updateFolderId(folderid) {
      this.setState({folderid: { value: folderid, touched: true}})
    }
  
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
       const { folders = [] } = this.context
        return(
            <section className='Add-note'>
            <h2>Create Note</h2>
            <NotefulForm onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label 
                    htmlFor='note-name-input' 
                    className='Add-note-text'>
                    Note name
                </label>
               
                <input 
                    className='Add-note-input'
                    type = 'text' 
                    name='note-name' 
                    id = 'note-name-input'
                />
                </div>

                <div className="form-group">
                    <label 
                    htmlFor='note-content'>
                    Content
                    </label>

                    <textarea
                        className='Add-note-content-text'
                        name='content-name' 
                        id='note-content'
                        aria-label="note contents"
                        aria-required="true"
                        onChange={e => this.updateContent(e.target.value)}/>
                </div>

                <div className='form-group'>
                <label htmlFor= 'note-folder-select'>
                    Choose a folder
                </label> 
                <select
                    id = 'note-folder-select' 
                    name='note-folder-id'
                    aria-label="Select folder to place note"
                    aria-required="true"
                    required> 
                <option value={null}>...</option>
                    {folders.map(folder =>
                <option key={folder.folderid} value={folder.folderid}>
                    {folder.folder_name}
                </option>
                )}
                </select>
                </div>
                <br />
                <div >
                <button type ='submit'>AddNote</button>
                </div>
                </NotefulForm>
            </section>
        )
    }
}