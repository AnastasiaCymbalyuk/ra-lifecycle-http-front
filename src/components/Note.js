import React from "react";

export default class Note extends React.Component {
    render() {
        return (
            <div className="box_note">
                <div>
                    {this.props.children}
                </div>
                <div>
                    {this.props.content}
                </div>
            </div>
        )
    }
}