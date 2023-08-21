import NoteContainer from "./NoteContainer/NoteContainer.jsx";
import "./App.css"
import Sidebar from "./Sidebar/Sidebar.jsx";
function App() {

	const notes = [
		{
			text:"this is a text",
			time:"23 pm",
			color:"yellow"
		},
		{
			text:"this is a text",
			time:"23 pm",
			color:"cyan"
		},
		{
			text:"this is a text",
			time:"23 pm",
			color:"blueviolet"
		},
	]

	return (
		<div className="App">
			<Sidebar/>
			<NoteContainer notes={notes}/>
		</div>
	);
}

export default App;