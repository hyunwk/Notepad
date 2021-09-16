import React from 'react';
import Note from './Note';

const Notes = class extends React.Component {
  render() {
    return (
      <div>
        {this.props.notes.map(note => {
          return (
            <Note
              key={note.id}
              note={note}
              onDeleteClick={this.props.deleteNote}
              onSaveTitle={this.props.onSaveTitle}
              onSaveContent={this.props.onSaveContent}
            />
          );
        })}
      </div>
    );
  }
};

export default Notes;
