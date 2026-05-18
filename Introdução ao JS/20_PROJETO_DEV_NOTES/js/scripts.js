"use strict";

//#region Elementos
// Adicionar notas
const notesContainer = document.querySelector("#notes-container");
const noteContentInput = document.querySelector("#note-content");
const addNoteButton = document.querySelector(".add-note");

// Outras funções
const searchInput = document.querySelector("#search-input");
const exportNotesButton = document.querySelector("#export-notes");
//#endregion

//#region Funções
function showNotes() {
  clearNotes();
  getNotesFromLocalStorage().forEach((note) => {
    const noteElement = createNote(note.id, note.content, note.fixed);
    notesContainer.appendChild(noteElement);
  });
}

function clearNotes() {
  notesContainer.innerHTML = "";
}

function addNote() {
  const notes = getNotesFromLocalStorage();

  const noteObj = {
    id: generateId(),
    content: noteContentInput.value,
    fixed: false,
  };

  const noteElement = createNote(noteObj.id, noteObj.content);

  notesContainer.appendChild(noteElement);

  notes.push(noteObj);

  saveNotesToLocalStorage(notes);

  noteContentInput.value = "";
}

function generateId() {
  return Math.floor(Math.random() * 5000);
}

function createNote(id, content, fixed = false) {
  const noteElement = document.createElement("div");
  noteElement.classList.add("note");

  const textareaElement = document.createElement("textarea");
  textareaElement.value = content;
  textareaElement.placeholder = "Adicione algum texto...";
  noteElement.appendChild(textareaElement);

  if (fixed) {
    noteElement.classList.add("fixed");
  }

  const pinIcon = document.createElement("i");
  pinIcon.classList.add("bi", "bi-pin");
  noteElement.appendChild(pinIcon);

  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("bi", "bi-x-lg");
  noteElement.appendChild(deleteIcon);

  const duplicateIcon = document.createElement("i");
  duplicateIcon.classList.add("bi", "bi-file-earmark-plus");
  noteElement.appendChild(duplicateIcon);

  const saveEditIcon = document.createElement("i");
  saveEditIcon.classList.add("bi", "bi-check-lg");
  noteElement.appendChild(saveEditIcon);

  createIconsEvents(noteElement, id);

  return noteElement;
}

function createIconsEvents(noteElement, id) {
  // Pin
  noteElement.querySelector(".bi-pin").addEventListener("click", () => {
    toggleFixedNote(id);
  });

  // Delete
  noteElement.querySelector(".bi-x-lg").addEventListener("click", () => {
    deleteNote(id);
  });

  // Duplicate
  noteElement
    .querySelector(".bi-file-earmark-plus")
    .addEventListener("click", () => {
      duplicateNote(id);
    });

  // Edit note content
  const textAreaToEdit = noteElement.querySelector("textarea");
  textAreaToEdit.addEventListener("keyup", (e) => {
    noteElement.querySelector(".bi-check-lg").style.opacity = 1;
  });
  noteElement.querySelector(".bi-check-lg").addEventListener("click", () => {
    editNoteContent(id, textAreaToEdit.value);
  });
}

function toggleFixedNote(id) {
  const { notes, targetNote } = getActualNote(id);

  targetNote.fixed = !targetNote.fixed;
  reloadPage(notes);
}

function deleteNote(id) {
  const notes = getNotesFromLocalStorage();
  const filteredNotes = notes.filter((note) => note.id !== id);

  reloadPage(filteredNotes);
}

function duplicateNote(id) {
  const { notes, targetNote } = getActualNote(id);

  const duplicateNote = {
    id: generateId(),
    content: targetNote.content,
    fixed: false,
  };

  notes.push(duplicateNote);

  reloadPage(notes);
}

function editNoteContent(id, newContent) {
  const { notes, targetNote } = getActualNote(id);

  targetNote.content = newContent;
  reloadPage(notes);
}

function getActualNote(id) {
  const notes = getNotesFromLocalStorage();
  const targetNote = notes.filter((note) => note.id === id)[0];

  return { notes, targetNote };
}

function reloadPage(notes) {
  saveNotesToLocalStorage(notes);
  showNotes();
}

function searchNotes(searchTerm) {
  const searchResults = getNotesFromLocalStorage().filter((note) => {
    return note.content.toLowerCase().includes(searchTerm);
  });
  if (searchTerm !== "") {
    clearNotes();

    searchResults.forEach((note) => {
      const noteElement = createNote(note.id, note.content, note.fixed);
      notesContainer.appendChild(noteElement);
    });

    return;
  }

  clearNotes();
  showNotes();
}
// #endregion

//#region Local storage
function saveNotesToLocalStorage(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function getNotesFromLocalStorage() {
  const notes = localStorage.getItem("notes");

  if (notes == "undefined") {
    localStorage.clear();
    return [];
  }

  const orderedNotes = notes
    ? JSON.parse(notes).sort((a, b) => (a.fixed > b.fixed ? -1 : 1))
    : [];

  return orderedNotes;
}

function exportData() {
  const data = getNotesFromLocalStorage();

  // Padrão CSV
  const csvString = [
    ["ID", "Conteudo", "Fixado?"],
    ...data.map((note) => [note.id, note.content, note.fixed]),
  ]
    .map((e) => e.join(","))
    .join("\n");

  const element = document.createElement("a");

  element.href = "data:text/csv;charset=utf-8," + encodeURI(csvString);

  element.target = "_blank";

  element.download = "export.csv";

  element.click();
}
// #endregion

// #region Eventos
addNoteButton.addEventListener("click", () => {
  if (noteContentInput.value?.trim() === "") {
    alert("O conteúdo da nota não pode ser vazio.");
    return;
  }

  addNote();
});

noteContentInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    addNoteButton.click();
  }
});

searchInput.addEventListener("keyup", (e) => {
  const searchTerm = e.target.value?.toLowerCase();

  searchNotes(searchTerm);
});

exportNotesButton.addEventListener("click", () => {
  exportData();
});
// #endregion

// #region Inicialização
showNotes();
// #endregion
