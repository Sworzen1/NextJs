import Link from 'next/link';

async function getNotes() {
  const response = await fetch('http://localhost:3000/api/notes');
  const data = response.json();

  return data;
}

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div className="w-full">
      <div className="flex flex-1 flex-row justify-between w-full">
        <h1 className="mb-12">Notes</h1>
        <Link href="notes/add_new">
          <button>Add new</button>
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {notes?.map((note: any) => (
          <Note key={note.title} {...note} />
        ))}
      </div>
    </div>
  );
}

function Note({ ...note }: any) {
  const { title, content, date, id } = note;

  return (
    <Link href={`/notes/${id}`}>
      <div className="bg-gray-300 rounded-md border-2 p-2 border-color-gray-700 h-40 flex flex-col justify-between">
        <h2>{title}</h2>
        <h5>{content}</h5>
        <p>{new Date(date).toLocaleString()}</p>
      </div>
    </Link>
  );
}
