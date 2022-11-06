import Link from "next/link";

function Navbar() {
  return (
    <div>
      <nav className="bg-sky-600 py-3 shadow-md shadow-sky-900">
        <div className="relative left-8">
          <div className="flex justify-center space-x-80">
            <Link href="/">
              <h1 className="text-whtie font-semibold text-2xl hover:text-neutral-700">
                Home
              </h1>
            </Link>
            <Link href="/create">
              <h1 className="text-whtie font-semibold text-2xl hover:text-neutral-700">
                Create note
              </h1>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
