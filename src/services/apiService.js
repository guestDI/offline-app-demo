// Mock API service for note operations
const API_URL = 'https://api.example.com/notes'; // This is a mock URL

// Simulate network delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

class ApiService {
  constructor() {
    this.notes = [];
    this.nextId = 1;
  }

  // Get all notes
  async getAllNotes() {
    await delay(500); // Simulate network delay
    return [...this.notes];
  }

  // Create a new note
  async createNote(note) {
    await delay(500);
    const newNote = {
      ...note,
      id: note.id ?? this.nextId++, // Use client-provided id if present
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.notes.push(newNote);
    return newNote;
  }

  // Update a note
  async updateNote(id, updates) {
    await delay(500);
    const index = this.notes.findIndex(note => note.id === id);
    if (index === -1) {
      throw new Error('Note not found');
    }
    const updatedNote = {
      ...this.notes[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    this.notes[index] = updatedNote;
    return updatedNote;
  }

  // Delete a note
  async deleteNote(id) {
    await delay(500);
    const index = this.notes.findIndex(note => note.id === id);
    if (index === -1) {
      throw new Error('Note not found');
    }
    const deletedNote = this.notes[index];
    this.notes.splice(index, 1);
    return deletedNote;
  }

  // Simulate network error (for testing offline functionality)
  async simulateNetworkError() {
    await delay(500);
    throw new Error('Network error');
  }
}

export const apiService = new ApiService(); 