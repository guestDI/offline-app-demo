import React from 'react';
import './NoteList.css';

const NotesList = ({ notes, onSelectNote, onDeleteNote, selectedNoteId }) => {
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return isNaN(date) ? '' : date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="notes-list">
      <div className="notes-header">
        <h2>Notes</h2>
        <button 
          onClick={() => onSelectNote(null)} 
          className="new-note-btn"
        >
          <span style={{marginRight: '0.5em'}}>+</span> New Note
        </button>
      </div>
      
      {notes.length === 0 ? (
        <div className="empty-state">
          <div style={{ fontSize: '2.5rem' }}>🗒️</div>
          <p>No notes yet. Create your first note!</p>
        </div>
      ) : (
        <div className="notes-grid">
          {notes.map(note => (
            <div
              key={note.id}
              className={`note-card${selectedNoteId === note.id ? ' selected' : ''}`}
              onClick={() => onSelectNote(note)}
            >
              <div className="note-header">
                <h3 className="note-title">
                  {note.title || 'Untitled'}
                </h3>
                <button
                  onClick={e => {
                    e.stopPropagation();
                    onDeleteNote(note.id);
                  }}
                  className="delete-btn"
                  aria-label="Delete note"
                >
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path d="M7 8V14M10 8V14M13 8V14M5 6H15M8 6V5C8 4.44772 8.44772 4 9 4H11C11.5523 4 12 4.44772 12 5V6M4 6H16V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V6Z" stroke="#b91c1c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              
              <p className="note-preview">
                {note.content?.substring(0, 100)}
                {note.content?.length > 100 ? '...' : ''}
              </p>
              
              <div className="note-meta">
                <span className="note-date">
                  {formatDate(note.updatedAt)}
                </span>
                {note.needsSync
                  ? <span className="sync-status" title="Pending sync">⏳</span>
                  : <span className="sync-status synced" title="Synced">✅</span>
                }
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotesList;