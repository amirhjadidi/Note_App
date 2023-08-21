import "./Note.css"

function Note({note}) {
	return (
		<div className="note" style={{backgroundColor:note.color}} >
			<textarea className="note_text" defaultValue={note.text}/>
			<p>{note.time}</p>
		</div>
	);
}

export default Note;