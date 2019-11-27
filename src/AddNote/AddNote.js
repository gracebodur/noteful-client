import React from 'react'
import ValidationError from '../ValidationError'
import NotefulContext from '../NotefulContext'
import config from '../config'
import './addNote.css'

class AddNote extends React.Component {
  
    static contextType = NotefulContext
  
    constructor() {
        super()
        this.state={
            title: {
                value: '',
                touched: false
            },
            content: {
                value: '',
                touched: false
            },
            folder: {
                value: '',
                touched: false
            }
        }
    }
    updateNoteName(name) {
        this.setState({title: {value: name, touched: true}})
    }
    updateNoteContent(content) {
        this.setState({content: {value:content, touched: true}})
    }

    handleSubmit(event) {
        event.preventDefault()
        const {title, content, folder} = this.state
        const noteToAdd = {
            name: title.value,
            content: content.value,
            folderId: folder.value,
            modified: new Date ()
        }
        fetch(`${config.API_ENDPOINT}/notes`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(noteToAdd)
        })
        .then(response => {
            if(!response.ok){
              return response.json().then(e=>Promise.reject(e))
            }
            return response.json()
          })
          .then((res) => {
              const newArray = this.context.notes
              console.log(noteToAdd)
              newArray.push(res)
              this.context.notes = newArray
              this.props.history.push('/')
          })
          .catch(error => {
              console.log(error)
          })
    }

    validateNoteName() {
        const name = this.state.title.value.trim()
        if(name.length === 0) {
            return 'Note is required'
        }else if (name.length > 150) {
            return 'Note name must be less than 150 characters.'
        }
    }

    validateContentName() {
        const content = this.state.content.value.trim()
        if(content.length === 0) {
            return 'Content i required'
        }else if (content.length > 500) {
            return 'Content must be less than 500 characters.'
        }
    }


    render() {
        const titleError = this.validateNoteName
        const contentNameError = this.validateContentName
        return(
            <section>
                <form className='add-note' onSubmit={ e => this.handleSubmit(e)}>
                    <h2>Create Note</h2>
                    <div>
                        <label html for='note-name'>Name</label>
                        <input type = 'text' name='note-name' id = 'note-name' onChange={e => this.updateNoteName(e.target.value)}></input>
                        {this.state.title.touched && <ValidationError message={titleError} />}
                    </div>
                    <div>
                        <label htmlFor='content-name'>Content</label>
                        <textarea name='content-name' id='content-name' onChange={e => this.updateNoteContent(e.target.value)}/>
                        {this.state.content.touched && <ValidationError message={contentNameError} />}
                    </div>
                </form>
            </section>
        )
    }

}

export default AddNote