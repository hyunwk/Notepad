import react from 'react';

const AddNoteBox = class extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'title1',
      content: 'content1',
    };
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

  render() {
    return (
      <div>
        <label>
          Title:
          <input
            type="text"
            style={{ marginBottom: '2rem' }}
            value={this.state.title}
            onChange={this.titleChange}
          />
        </label>
        <label style={{ display: 'block' }}>
          Content:
          <textarea
            value={this.state.content}
            onChange={this.contentChange}
          ></textarea>
        </label>
        <button onClick={this.props.onAddNote}>Add New Note</button>
      </div>
    );
  }
};

export default AddNoteBox;
