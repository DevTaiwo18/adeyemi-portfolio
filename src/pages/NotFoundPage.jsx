import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-neutral-950">
      <h1 className="text-8xl font-bold text-amber-500 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-neutral-50 mb-4">
        Page Not Found
      </h2>
      <p className="text-neutral-400 max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-amber-500 text-neutral-950 font-semibold rounded-lg hover:bg-amber-400 transition-all duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
