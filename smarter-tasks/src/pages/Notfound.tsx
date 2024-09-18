const Notfound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
      <button
        id="backToHomeButton"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => (window.location.href = '/home')}
      >
        Back to Home
      </button>
    </div>
  );
};

export default Notfound;
