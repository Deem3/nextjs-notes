import Link from "next/link";
import DeleteNote from "./DeleteNote";

export default async function page({ params }) {
  const { data } = await getDataById(params.id);
  return (
    <>
      <div className="relative">
        <div className="relative top-24 border-solid mx-40 py-24 border-sky-600 border-2 bg-sky-600 rounded-md">
          <h2 className="font-bold text-3xl text-center bottom-16 relative">{data.title}</h2>
          <p className="relative text-center">{data.description}</p>
          <DeleteNote />
          <Link href={`http://localhost:3000/${data._id}/edit`}><p>edit</p></Link>
        </div>
      </div>
    </>
  );
}

async function getDataById(id) {
  const res = await fetch(`http://localhost:3000/api/notes/${id}`, {
    cache: "no-store",
  });
  return res.json();
}
