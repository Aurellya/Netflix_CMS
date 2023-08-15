import { Link } from "react-router-dom";
import { GiThunderball } from "react-icons/gi";

export default function PagesUnderMaintenance() {
  return (
    <div className="min-h-screen flex justify-center items-center text-center">
      <div className="max-w-md p-8 rounded-lg shadow text-white">
        <h1 className="text-2xl font-bold mb-4">Under Maintenance</h1>
        <p className=" mb-4">
          Our website is taking a little nap for maintenance. We&apos;ll be back
          soon with more awesomeness!
        </p>
        <div className="mx-auto w-32 h-32 mt-[50px] mb-[50px] lightning-gradient">
          <GiThunderball className="h-full w-full" />
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
