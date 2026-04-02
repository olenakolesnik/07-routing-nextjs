
import { fetchNoteById } from "@/lib/api";
import Modal from "@/components/Modal/Modal";
import css from "./NotePreview.module.css";

interface NotePreviewProps {
    params: Promise<{ id: string }>;
}
async function NotePreview({ params }: NotePreviewProps) {
    const { id } = await params;
    const note = await fetchNoteById(id);
    
    return (
        <Modal><h2 className={css.header}>{note.title}</h2>
            <p className={css.content}>{note.content}</p>
            <p className={css.data}>{note.createdAt}</p>
            <p className={css.data}>{note.updatedAt}</p>
            <p className={css.tag}>{note.tag}</p>
            <button className={css.backBtn}></button>
        </Modal>
    );
};
export default NotePreview;