import React, { useState, useEffect } from "react";
import AppBar from "./Components/AppBar";
import Form from "./Components/Form";
import Notes from "./Components/Notes";
import Placeholder from "./Components/Placeholder";
import FormEdit from './Components/FormEdit';
import "./App.css";

function App() {
	const [notes, setNotes] = useState([]);
	const [searchText, setSearchText] = useState("");
	const [editableNote, setEditableNote] = useState({});
	const [showEditModal, setShowEditModal] = useState(false)

	useEffect(() => {
		const notesNew = JSON.parse(localStorage.getItem("notes")) || [];
		setNotes(notesNew);
	}, []);

	useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notes));
	}, [notes]);

	const deleteNote = (id) => {
		setNotes((note) => note.filter((el) => el.id !== id));
	};

	const saveNote = React.useCallback((note) => {
		setNotes((notes) => [note, ...notes]);
		setSearchText("");
	}, []);

	const updateNote = React.useCallback((note) => {
		const updatedNotes = [...notes];
		const index = updatedNotes.findIndex((el) => el.id === note.id);
		updatedNotes[index] = { ...note };
		setNotes(updatedNotes);
	}, [notes]);

	const handleSearch = ({ target }) => {
		setSearchText(target.value);
	};

	const filteredNotes = notes.filter((note) => {
		return (
			note.title.toLowerCase().includes(searchText.toLowerCase()) ||
			note.body.toLowerCase().includes(searchText.toLowerCase())
		);
	});

	const editNote = React.useCallback((note) => {
		setEditableNote(note)
		setShowEditModal(true)
	}, [])

	const closeEditModal = React.useCallback(() => {
		setShowEditModal(false)
		setEditableNote({})
	}, [])

	const notesComponent = <Notes notes={filteredNotes} delete={deleteNote} update={updateNote} edit={editNote} />

	const notesUI = filteredNotes.length ? notesComponent : <Placeholder />;
	return (
		<>
			<AppBar text={searchText} changeText={handleSearch} />
			<Form save={saveNote} />
			{notesUI}
			<FormEdit visible={showEditModal} close={closeEditModal} note={editableNote} update={updateNote} />
		</>
	);
}

export default App;
