import "./Loading.css";

export const Loading = () => {
  return (
    <div className="flex w-full h-screen items-center justify-center absolute top-0 left-0 bottom-0 right-0">
      <div className="loading-spinner"></div>
    </div>
  );
};
