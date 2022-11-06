import Link from "next/link";

export default async function Home() {
  const { data } = await getData();
  return (
    <>
      <div className="relative w-full">
        <div className="absolute inset-6 left-1/3 right-24">
        {data.map((obj) => {
          return (
            <>
            <div className="border-solid border-2 border-sky-600 bg-sky-600 rounded-md p-3 mt-3 mx-12 w-1/2">
              <Link href={`http://localhost:3000/${obj._id}`} className='text-center hover:text-neutral-700'>
                <h2 key={obj._id} className='text-3xl font-thin '>{obj.title}</h2>
              </Link>
              <p key={obj._id}>{obj.description}</p>
              </div>
            </>
          );
        })}
        </div>
      </div>
    </>
  );
}

async function getData() {
  const res = await fetch("http://localhost:3000/api/notes");
  return res.json();
}
