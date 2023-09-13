import Note from "../Note/Note.jsx";
import "./NoteContainer.css"

function NoteContainer(props) {

	const reverseArray = (arr) => {
		const array = []

		for (let i = arr.length - 1; i >= 0; --i) {
			array.push(arr[i])
		}
		return array
	}

	const notes = reverseArray(props.notes)

	return (
		<div className="note-container">
			<h1>Notes</h1>
			<div className="note-container_notes custom-scroll">
				{
					// notes.map((item, index) => <Note key={index} note={item}/>)
					notes.map((item) => <Note key={item.id} note={item} deleteNote={props.deleteNote}/>)
				}

			</div>
		</div>
	);
}

export default NoteContainer;