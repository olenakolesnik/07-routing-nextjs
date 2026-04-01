import { fetchNotes } from "@/lib/api";
import css from "./SidebarNotes.module.css";
import Link from "next/link";


async function SidebarNotes() {
    const data = await fetchNotes(
        {
            page: 1,
            search: "",
            perPage: 12,
        }
    );
    const tags = [...new Set(data.notes.map(note => note.tag))];
    
    return (
        <ul className={css.menuList}>
        {/* список тегів */}
          <li className={css.menuItem}>
            <Link href={`/notes/filter/all`} className={css.menuLink}>
              All notes
            </Link>
            </li>
            {tags.map((tag) => (
          <li key={tag} className={css.menuItem}>
            <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
              {tag}
            </Link>
                </li>
                ))}
            </ul>
    )
}

export default SidebarNotes;