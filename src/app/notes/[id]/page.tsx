type Note = {
  id: number;
  title: string;
  content: string;
  date: string;
};

async function getNote(id: string): Promise<Note> {
  const response = await fetch(`http://localhost:3000/api/notes/${id}`);
  const data = response.json();

  return data;
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const note = await getNote((await params)?.id);

  return (
    <div className="flex flex-1 flex-col align-items">
      <h1 className="mb-12">{note?.title}</h1>
      <p>{note?.content}</p>

      <div className="flex justify-between mt-8">
        <span>{note?.date}</span>
      </div>
    </div>
  );
}
