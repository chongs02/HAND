import React, { Component } from "react";
import { connect } from "react-redux";
import { notes } from "../actions";

class Note extends Component {
  state = {
    text: "",
    updateNoteId: null
  };

  submitNote = e => {
    e.preventDefault();
    this.props.addNote(this.state.text);
    this.setState({
      text: ""
    });
  };

  resetForm = () => {
    this.setState({
      text: "",
      updateNoteId: null
    });
  };

  selectForEdit = id => {
    let note = this.props.notes[id];
    this.setState({
      text: note.text,
      updateNoteId: id
    });
  };

  submitNote = e => {
    e.preventDefault();
    if (this.state.updateNoteId === null) {
      this.props.addNote(this.state.text);
    } else {
      this.props.updateNote(this.state.updateNoteId, this.state.text);
    }
    this.resetForm();
  };

  componentDidMount() {
    this.props.fetchNote();
  }

  render() {
    return (
      <div>
        <h2>Note</h2>
        <hr />
        <div style={{ textAlign: "right" }}>
          {this.props.user.username} (<a onClick={this.props.logout}>logout</a>)
        </div>
        <form onSubmit={this.submitNote}>
          <input
            value={this.state.text}
            placeholder="입력하세요"
            onChange={e => this.setState({ text: e.target.value })}
            required
          />
          <input type="submit" value="Save Note" />
        </form>

        <table>
          <tbody>
            {this.props.notes.map((note, id) => (
              <tr key={`note_${id}`}>
                <td>
                  <button onClick={() => this.selectForEdit(id)}>edit</button>
                </td>
                <td>
                  <button onClick={() => this.props.deleteNote(id)}>
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    user: state.auth.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNote: text => {
      dispatch(notes.addNote(text));
    },
    updateNote: (id, text) => {
      dispatch(notes.updateNote(id, text));
    },
    deleteNote: id => {
      dispatch(notes.deleteNote(id));
    },
    fetchNote: () => {
      dispatch(notes.fetchNote());
    },
    logout: () => dispatch(auth.logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Note);
