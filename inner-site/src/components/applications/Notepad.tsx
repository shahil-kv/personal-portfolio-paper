import React, { useEffect, useRef, useState } from 'react';
import Window from '../os/Window';

export interface NotepadProps extends WindowAppProps {}

type Note = {
    id: string;
    text: string;
    updated: number;
};

// Notes live in this visitor's browser only — nothing is sent anywhere.
const STORAGE_KEY = 'shahilos.notes';

const WELCOME: Note = {
    id: 'welcome',
    text: [
        'Welcome to Notepad!',
        '',
        'Jot anything down here - ideas, a todo list, or the process',
        'you wish someone would automate for you.',
        '',
        'Click "New Note" to start a fresh page. Your notes are saved in',
        'this browser only, so they will still be here next time you visit.',
    ].join('\n'),
    updated: Date.now(),
};

const loadNotes = (): Note[] => {
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed)) return parsed;
        }
    } catch (e) {
        // storage blocked (private mode, iframe policy) - fall back to memory
    }
    return [WELCOME];
};

const saveNotes = (notes: Note[]) => {
    try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    } catch (e) {
        // not persisted; notes still work for this session
    }
};

const titleOf = (note: Note) => {
    const first = note.text.split('\n').find((line) => line.trim());
    return first ? first.trim() : 'Untitled';
};

const formatDate = (ms: number) => {
    const d = new Date(ms);
    return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
};

const Notepad: React.FC<NotepadProps> = (props) => {
    const [notes, setNotes] = useState<Note[]>(loadNotes);
    const [selectedId, setSelectedId] = useState<string | null>(
        notes.length ? notes[0].id : null
    );
    const textRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        saveNotes(notes);
    }, [notes]);

    const selected = notes.find((n) => n.id === selectedId) || null;

    const newNote = () => {
        const note: Note = {
            id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
            text: '',
            updated: Date.now(),
        };
        setNotes((prev) => [note, ...prev]);
        setSelectedId(note.id);
        setTimeout(() => textRef.current && textRef.current.focus(), 0);
    };

    const deleteNote = () => {
        if (!selected) return;
        const index = notes.findIndex((n) => n.id === selected.id);
        const remaining = notes.filter((n) => n.id !== selected.id);
        setNotes(remaining);
        const next = remaining[Math.min(index, remaining.length - 1)];
        setSelectedId(next ? next.id : null);
    };

    const updateText = (text: string) => {
        if (!selected) return;
        setNotes((prev) =>
            prev.map((n) =>
                n.id === selected.id ? { ...n, text, updated: Date.now() } : n
            )
        );
    };

    return (
        <Window
            top={60}
            left={260}
            width={900}
            height={620}
            windowTitle={`${selected ? titleOf(selected) : 'Untitled'} - Notepad`}
            windowBarIcon="windowNotepadIcon"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText={`${notes.length} note${
                notes.length === 1 ? '' : 's'
            } · saved on this computer`}
        >
            <div style={styles.app}>
                <div style={styles.toolbar}>
                    <button
                        className="site-button"
                        style={styles.button}
                        onMouseDown={newNote}
                    >
                        New Note
                    </button>
                    <button
                        className="site-button"
                        style={styles.button}
                        onMouseDown={deleteNote}
                        disabled={!selected}
                    >
                        Delete
                    </button>
                </div>
                <div style={styles.body}>
                    <div style={styles.list}>
                        {notes.length === 0 && (
                            <p style={styles.empty}>No notes yet.</p>
                        )}
                        {notes.map((note) => {
                            const active = note.id === selectedId;
                            return (
                                <div
                                    key={note.id}
                                    style={Object.assign(
                                        {},
                                        styles.item,
                                        active && styles.itemActive
                                    )}
                                    onMouseDown={() => setSelectedId(note.id)}
                                >
                                    <p style={styles.itemTitle}>
                                        {titleOf(note)}
                                    </p>
                                    <p style={styles.itemDate}>
                                        {formatDate(note.updated)}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                    {selected ? (
                        <textarea
                            ref={textRef}
                            style={styles.editor}
                            value={selected.text}
                            placeholder="Start typing..."
                            spellCheck={false}
                            onChange={(e) => updateText(e.target.value)}
                        />
                    ) : (
                        <div style={styles.blank}>
                            <p>Click "New Note" to start writing.</p>
                        </div>
                    )}
                </div>
            </div>
        </Window>
    );
};

const styles: StyleSheetCSS = {
    app: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'column',
        backgroundColor: '#c0c0c0',
    },
    toolbar: {
        padding: 6,
        gap: 6,
        flexShrink: 0,
    },
    button: {
        minWidth: 110,
        height: 30,
    },
    body: {
        flex: 1,
        minHeight: 0,
        padding: 6,
        paddingTop: 0,
        gap: 6,
    },
    list: {
        width: 220,
        flexShrink: 0,
        flexDirection: 'column',
        overflowY: 'auto',
        backgroundColor: 'white',
        boxShadow:
            'inset -1px -1px #fff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a',
        padding: 3,
        boxSizing: 'border-box',
    },
    item: {
        flexDirection: 'column',
        padding: '4px 8px',
        cursor: 'pointer',
        flexShrink: 0,
    },
    itemActive: {
        backgroundColor: '#000080',
        color: 'white',
    },
    itemTitle: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        fontSize: 16,
    },
    itemDate: {
        fontSize: 12,
        opacity: 0.8,
    },
    empty: {
        padding: 8,
        fontSize: 14,
        color: '#808080',
    },
    editor: {
        flex: 1,
        height: '100%',
        fontFamily: "'Courier New', Courier, monospace",
        fontSize: 18,
        lineHeight: 1.4,
        padding: 8,
        backgroundColor: 'white',
    },
    blank: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#808080',
    },
};

export default Notepad;
