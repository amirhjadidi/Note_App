import "./Note.css"
import deleteIcon from "../assets/delete-32.png"

function Note(props) {

	const formatvalue = (value) => {
		if (!value) return ""

		const date = new Date(value)

		const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

		let hour = date.getHours()
		let ampm = hour > 12 ? "PM" : "AM"
		hour = hour ? hour : "12"
		hour = hour > 12 ? hour = 24 : hour

		let min = date.getMinutes()
		let day = date.getDate()
		const months = month[date.getMonth()]

		return `${hour}:${min} ${ampm} ,${day} ${months}`
	}


	return (
		<div className="note" style={{backgroundColor: props.note.color}}>
			<textarea className="note_text" defaultValue={props.note.text}/>
			<div className="note_footer">
				<p>{formatvalue(props.note.time)}</p>
				<img src={deleteIcon} alt="delete" onClick={() => props.deleteNote(props.note.id)}/>
			</div>
		</div>
	);
}

export default Note;