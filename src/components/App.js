import React from 'react';
import Notes from './Notes';
import AddNoteBox from './AddNoteBox';
import moment from 'moment';
import 'moment/locale/ko';

const App = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      title: 'title1',
      content: 'content1',
    };
  }

  addNote = (newTitle, newContent) => {
    console.log(moment().format('YYYY-MM-DD HH:mm:ss'));
    this.setState({
      notes: [
        ...this.state.notes,
        {
          id: this.state.notes.length + 1,
          title: newTitle,
          content: newContent,
          createdAt: moment().format('YY년 MM월 DD일 HH:mm:ss'),
          checked: false,
        },
      ],
    });
  };

  toggleCheck = id => {
    this.setState(prevState => ({
      notes: prevState.notes.map(note =>
        note.id === id ? ((note.checked = !note.checked), note) : note,
      ),
    }));
  };

  deleteNote = id => {
    this.setState(prevState => ({
      notes: prevState.notes.filter(note => note.id !== id),
    }));
  };

  saveTitle = (id, title) => {
    this.setState(({ notes }) => ({
      notes: notes.map(note =>
        note.id === id ? ((note.title = title), note) : note,
      ),
    }));
  };

  saveContent = (id, content) => {
    this.setState(({ notes }) => ({
      notes: notes.map(note =>
        note.id === id ? ((note.content = content), note) : note,
      ),
    }));
  };

  render() {
    return (
      <div className="container">
        <h1>React Markdown Note 🌙</h1>
        {/* App component 값 addNoteBox에서 변경하기 */}
        <AddNoteBox notes={this.state.notes} onAddNote={this.addNote} />
        <Notes
          notes={this.state.notes}
          onToggleCheck={this.toggleCheck}
          onDeleteNote={this.deleteNote}
          onSaveTitle={this.saveTitle}
          onSaveContent={this.saveContent}
        />
      </div>
    );
  }
};

export default App;
