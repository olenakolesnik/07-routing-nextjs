
import { fetchNoteById } from "@/lib/api";
import Modal from "@/components/Modal/Modal";
import css from "./NotePreview.module.css";

interface NotePreviewProps {
    params: { id: string };
}
async function NotePreview({ params }: NotePreviewProps) {
    const note = await fetchNoteById(params.id);
    
    return (
        <Modal><h2 className={css.header}>{note.title}</h2>
            <p className={css.content}>{note.content}</p>
            <p className={css.data}>{note.createdAt}</p>
            <p className={css.data}>{note.updatedAt}</p>
            <p className={css.tag}>{note.tag}</p>
        </Modal>
    );
}
export default NotePreview;