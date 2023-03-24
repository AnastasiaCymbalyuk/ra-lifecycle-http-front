import React from "react";
import Form from "./Form";
import Note from "./Note";

const server = 'http://localhost:7070/notes';

export default class Widget extends React.Component {
    state = {notes: []};
    getNotes = () => {
        fetch(server).then(response => response.json())
        .then(result => {
            this.setState({notes: [...result]});
        });
    }

    postNote = (id, content) => {
        fetch(server, {
            method: 'POST',
            body: JSON.stringify({id, content}),
        }).then(this.getNotes);
    }

    deleteNote = (id) => {
        fetch(`${server}/${id}`, {
            method: 'DELETE',
        }).then(this.getNotes);
    }

    componentDidMount() {
        this.getNotes();
    }

    render() {
        return (
            <div className="wdg">
                <div className="header">
                   <h2 className="title">Notes</h2>
                   <button className="btn_reload" onClick={this.getNotes}>reload</button> 
                </div>
                <div className="notes">
                    {this.state.notes.map((el) => {
                        console.log(el.content);
                        return (
                            <Note content={el.content} key={el.id}>
                                <button className="btn_del" onClick={() => this.deleteNote(el.id)}>X</button>
                            </Note>)
                    })}
                </div>
                <Form newNote={this.postNote} />
            </div>
        )
    }
}

