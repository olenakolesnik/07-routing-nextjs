


import NotesClient from "./Notes.client";


interface NotesFilterProps {
    params: Promise<{ slug: string[] }>;
}
const allowedTags = ["Work", "Personal", "Meeting", "Shopping", "Todo"];
 async function NoteFilter({ params }: NotesFilterProps) {
    const { slug } = await params;
    const tagFromSlug = slug?.[0];
    const tag = tagFromSlug === "all" ? undefined : allowedTags.includes(tagFromSlug) ? tagFromSlug : undefined;
    
    
    return (
        <div>
            <NotesClient initialPage={1} initialSearch="" tag={tag} />
    </div>
)
}
export default NoteFilter;