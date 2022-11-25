import { Link, useRouteError } from "react-router-dom";

const ErrorPage = ({ code }) => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center w-full text-left py-14 font-mini leading-3">
      <div className="max-w-lg gap-y-4 flex flex-col">
        <h1 className="text-3xl font-bold">
          {code === 404 ? "Page Not Found" : "Error!"}
        </h1>
        <span className="text-xl text-gray-600">
          {code === 404
            ? "We’re sorry, we seem to have lost this page, but we don’t want to lose you."
            : "Ops something went wrong. Please try again later."}
        </span>
        {code === 404 && (
          <Link
            to="/"
            className="font-bold border-[1px] m-auto mt-1 border-black rounded-[3px] flex items-center justify-center px-3 bg-slate-100 h-11 text-center text-xl hover:bg-slate-200"
          >
            "Home"
          </Link>
        )}
      </div>
    </div>
  );
};
export default ErrorPage;
