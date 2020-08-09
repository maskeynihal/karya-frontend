import React, { Fragment } from 'react';

import { TextArea } from 'ui-neumorphism';

/**
 * Input to add new note to task.
 */
function NoteInput() {
  return (
    <Fragment>
      <TextArea autoExpand inputStyles={{ width: '100%' }} className="note-input" placeholder="Add Note"></TextArea>
    </Fragment>
  );
}

export default NoteInput;
