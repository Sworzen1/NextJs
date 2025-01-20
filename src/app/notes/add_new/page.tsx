'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateNote() {
  const { refresh } = useRouter();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  async function create() {
    fetch('http://localhost:3000/api/notes', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
    });

    refresh();
  }

  return (
    <form onSubmit={create} className="flex flex-col flex-1">
      <div className="flex flex-1 flex-col gap-3">
        <h1>Create Note</h1>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button type="submit">Create</button>
    </form>
  );
}
