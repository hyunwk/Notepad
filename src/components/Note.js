import React, { Component } from 'react';

const Note = class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleEditing: false,
      contentEditing: false,
      title: props.note.title,
      content: props.note.content,
    };
  }
  toggleTitleEditing = () => {
    this.setState(prev => ({ titleEditing: !prev.titleEditing }));
  };
  toggleContentEditing = () => {
    this.setState(prev => ({ contentEditing: !prev.contentEditing }));
  };
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
  saveTitle = () => {
    this.props.onSaveTitle(this.props.note.id, this.state.title);
    this.toggleTitleEditing();
  };
  saveContent = () => {
    this.props.onSaveContent(this.props.note.id, this.state.content);
    this.toggleContentEditing();
  };

  render() {
    return (
      <section>
        <hr />
        {/* 파싱해서 YYYY-mm-DD로 바꾸기 */}
        <time>{this.props.note.createdAt}</time>
        {/* 수정 하나로 합치기 */}
        {this.state.titleEditing ? (
          <input
            type="text"
            value={this.state.title}
            onChange={this.titleChange}
          />
        ) : (
          <h2>{this.props.note.title}</h2>
        )}
        {this.state.contentEditing ? (
          <textarea
            value={this.state.content}
            onChange={this.contentChange}
          ></textarea>
        ) : (
          <p>{this.props.note.content}</p>
        )}
        {this.state.titleEditing ? (
          <button onClick={this.saveTitle}>제목 저장</button>
        ) : (
          <button onClick={this.toggleTitleEditing}>제목 수정</button>
        )}
        {this.state.contentEditing ? (
          <button onClick={this.saveContent}>내용 저장</button>
        ) : (
          <button onClick={this.toggleContentEditing}>내용 수정</button>
        )}
        <button
          onClick={this.props.onDeleteClick.bind(this, this.props.note.id)}
        >
          삭제
        </button>
      </section>
    );
  }
};

export default Note;
