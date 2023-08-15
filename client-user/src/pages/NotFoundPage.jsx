import { Link } from "react-router-dom";
import { TbError404 } from "react-icons/tb";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex justify-center items-center text-center">
      <div className="max-w-md p-8 rounded-lg shadow text-white">
        <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
        <p className=" mb-4">
          The page you&apos;re looking for is currently unavailable. Please
          check back later for further updates!
        </p>
        <div className="mx-auto w-32 h-32 mt-[50px] mb-[50px] lightning-gradient">
          <TbError404 className="h-full w-full text-yellow-300" />
        </div>
        <p className="text-gray-600">
          In the meantime, enjoy the available&nbsp;
          <Link to="/" className="text-secondary-color hover:underline">
            pages
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
