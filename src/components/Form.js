import React from "react";
import shortid from "shortid";

export default class Form extends React.Component {
    state = {text: ''};

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.newNote(shortid.generate(), this.state.text);
        this.setState({text: ''});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label className="lab_inp">New note</label>
                <div className="box_inp_text">
                    <textarea className="inp_text" name="text" onChange={this.handleChange} value={this.state.text}></textarea>
                    <button className="btn_add_text">+</button>
                </div>
            </form>
        )
    }
}