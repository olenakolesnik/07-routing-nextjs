"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import css from "./NotePreview.module.css";


interface Props {
    noteId: string;
}

function NotePreview({ noteId }: Props) {
    const { data: note, isLoading } = useQuery({
        queryKey: ["note", noteId],
        queryFn: () => fetchNoteById(noteId),
    });
    if (isLoading) return <p>Loading...</p>;
    if (!note) return <p>Note not found</p>;
  
    return (
      <>
        <h2 className={css.header}>{note.title}</h2>
        <p className={css.content}>{note.content}</p>
        <p className={css.data}>{note.createdAt}</p>
        <p className={css.data}>{note.updatedAt}</p>
        <p className={css.tag}>{note.tag}</p>
      </>
    );
  }
export default NotePreview;