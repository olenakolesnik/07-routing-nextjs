interface NotesLayoutProps {
    children: React.ReactNode;
    sidebar: React.ReactNode;
}
  
function NotesLayout({ sidebar, children }: NotesLayoutProps) {
    return (
        <section>
            <aside>{sidebar}</aside>
            <div>{children}</div>
        </section>
    );
}
export default NotesLayout;