import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        {/* 404 */}
        <h1 className="text-8xl font-extrabold tracking-wider text-indigo-600">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl font-bold text-gray-800">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mx-auto mt-3 max-w-md text-gray-500">
          Sorry, the page you are looking for doesn&apos;t exist or may have been
          moved to another location.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
