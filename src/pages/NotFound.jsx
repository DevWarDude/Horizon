import { Link, useParams } from "react-router-dom";

export default function NotFound() {
  const { user: routeUser } = useParams();

  return (
    <div className="flex items-center justify-center h-screen text-center">
      <div>
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <p className="text-xl mb-4">Page not found</p>

        <Link
          to={`/${routeUser}/dashboard`}
          className="text-blue-500 hover:underline"
        >
          Go back to Dashboard
        </Link>
      </div>
    </div>
  );
}
