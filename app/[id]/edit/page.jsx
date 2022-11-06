"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function CreateNote() {
    const pathname = usePathname()
    const pattern = /\/[^/]+/g
    const result = pathname.match(pattern)
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  const notes = { title, description };
  const handleSubmit = async (e) => {
    e.preventDefault();


    const res = await fetch(`http://localhost:3000/api/notes/${result[0]}`, {
      method: "PUT",
      body: JSON.stringify(notes),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = res.json();

    if (!res.ok) {
        console.log(pathname)
        console.log(result)
      setError(json.error);
    }

    if (res.ok) {
      setTitle("");
      setDescription("");
      setError(null);
    router.push("/");
      console.log("note updated", json);
    }
  };
  return (
    <>
      <div className="relative top-24 mx-60">
        <div className="border-solid border-2 border-sky-600 bg-sky-600 flex flex-col items-center">
          <form onSubmit={handleSubmit} className="pt-4">
            <label className="font-bold">Title: </label>
            <input className="rounded-md relative left-20 w-48" type="text" onChange={(e) => setTitle(e.target.value)} value={notes.title} />
            <br />
            <label className="relative bottom-12 font-bold">Description: </label>
            <textarea
            className="m-8"
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              value={notes.description}
            />
            <br />
            <button className="relative mb-4 font-bold left-32 text-2xl hover:text-neutral-700">Update</button>
          </form>
        </div>
      </div>
    </>
  );
}
