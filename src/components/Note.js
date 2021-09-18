import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown'

const Note = class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      title: props.note.title,
      content: props.note.content,
    };
  }

  toggleEditing = () => {
    this.setState(prev => ({ isEditing: !prev.isEditing }));
  }

  titleChange = event => {
    this.setState({
      title: event.target.value,
    });
  };

  contentChange = event => {
    this.setState({
      content: event.target.value,
    });
  };

  saveNote = () => {
    this.props.onSaveTitle(this.props.note.id, this.state.title);
    this.props.onSaveContent(this.props.note.id, this.state.content);
    this.toggleEditing();
  };

  render() {
    return (
      <section>
        <hr />
        <time>{this.props.note.createdAt}</time>
        {/* 체크박스 */}
        <input type="checkbox"
          checked={this.props.note.checked}
          onChange={this.props.onToggleCheck.bind(this, this.props.note.id)}>
        </input>

        {/* 수정 버튼 누르면 input창, 아니면 text  */}
        {this.state.isEditing ? (
          <div>
            <input
              type="text"
              value={this.state.title}
              onChange={this.titleChange}
            />
            <textarea
              value={this.state.content}
              onChange={this.contentChange}
            ></textarea>
          </div>
        ) : (
          <div>
            <ReactMarkdown>{this.props.note.content}</ReactMarkdown>
            <ReactMarkdown>{this.props.note.title}</ReactMarkdown>
            {/* <p>{this.props.note.content}</p>
            <h2>{this.props.note.title}</h2> */}
          </div>
        )}
        {/* 저장 / 수정 버튼 */}
        {this.state.isEditing ? (
          <button onClick={this.saveNote}>저장</button>
        ) : (
          <button onClick={this.toggleEditing}>수정</button>
        )}
        <button
          onClick={this.props.onDeleteClick.bind(this, this.props.note.id)}
        >
          삭제
        </button>
      </section >
    );
  }
};

export default Note;
