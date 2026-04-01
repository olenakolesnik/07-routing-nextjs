
// import { fetchNotes } from "@/lib/api";
// import NoteList from "@/components/NoteList/NoteList";

import NotesClient from "../../Notes.client";


interface NotesFilterProps {
    params: Promise<{ slug: string[] }>;
}
const allowedTags = ["Work", "Personal", "Meeting", "Shopping", "Todo"];
 async function NoteFilter({ params }: NotesFilterProps) {
    const { slug } = await params;
    const tagFromSlug = slug?.[0];
    const tag = tagFromSlug === "all" ? undefined : allowedTags.includes(tagFromSlug) ? tagFromSlug : undefined;
    // const data = await fetchNotes({tag});
    // console.log(data.notes);
    
    return (
        <div>
            {/* <h1>Notes by filter</h1> */}
            {/* <NoteList notes={data.notes} /> */}
            <NotesClient initialPage={1} initialSearch="" tag={tag} />
    </div>
)
}
export default NoteFilter;