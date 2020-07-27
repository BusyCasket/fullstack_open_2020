import React from 'react';

const Note = ({ note, toggleImportance }) => {
  return (
    <li className="note">
      {note.content}{' '}
      <button onClick={toggleImportance}>{note.important ? 'mark unimportant' : 'mark important'}</button>{' '}
    </li>
  );
};

export default Note;
