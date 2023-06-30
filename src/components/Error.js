import { useRouteError } from "react-router-dom";
export const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops !!!</h1>
      <h2>something went wrong</h2>
      <h4>
        {err.status}:{err.statusText}
      </h4>
    </div>
  );
};

export default Error;
