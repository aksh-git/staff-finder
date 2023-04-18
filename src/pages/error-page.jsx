import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center" id="error-page">
      <div className="p-4 my-12 md:w-2/5">
        <h1 className="inline-flex text-6xl font-bold my-2">
            :Oops!
        </h1>
        <p className="text-lg font-semibold m-2">{error.status === 404 ? 'This link may be broken.':'An unexpected error has occurred.'} </p>
        <p className="text-lg font-semibold m-2">You can search for the page you are looking for or return to the home page.</p>
        <p className="my-4 m-2">
            Error : <i className="text-base">{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}