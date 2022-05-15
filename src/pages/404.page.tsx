const ErrorPage = (): JSX.Element => (
  <div className="h-[calc(100%_-_48px)] flex items-center justify-center">
    <div className="text-blue text-5xl">404</div>
    <span className="w-px h-15 bg-blue mx-4"></span>
    <div>{"Oops you've lost somewhere in the fox dens"}</div>
  </div>
);

export default ErrorPage;