const Notes = (props) => {
  return (
    <div className="notes">
      <p></p>
      <h2>Notes</h2>
      <form className="noteForm" onSubmit={props.handleNoteSubmit}>
        <input type="text" className="noteInput" name="userInput" />
        <button type="submit" className="noteButton">
          Add note
        </button>
      </form>
    </div>
  );
};

export default Notes;
