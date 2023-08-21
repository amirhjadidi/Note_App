import Note from "../Note/Note.jsx";
import "./NoteContainer.css"

function NoteContainer(props) {
	return (
		<div className="note-container">
			<h1>Notes Container</h1>
			<div className="note-container_notes custom-scroll">
				{
					// notes.map((item, index) => <Note key={index} note={item}/>)
					props.notes.map((item,index) => <Note key={index} note={item}/>)
				}
				{/*<Note color="red" text="this is test" time="23"/>*/}
				{/*<Note color="blue" text="this is test" time="12"/>*/}
				{/*<Note color="blue" text="this is test" time="12"/>*/}
				{/*<Note color="blue" text="this is test" time="12"/>*/}
				{/*<Note color="blue" text="this is test" time="12"/>*/}
				{/*<Note color="blue" text="this is test" time="12"/>*/}
				{/*<Note color="blue" text="this is test" time="12"/>*/}
				{/*<Note color="blue" text="this is test" time="12"/>*/}
				{/*<Note color="blue" text="this is test" time="12"/>*/}
				{/*<Note color="blue" text="this is test" time="12"/>*/}
			</div>
		</div>
	);
}

export default NoteContainer;