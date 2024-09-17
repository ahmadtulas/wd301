const Header = () => {
  return (
    <nav className="bg-green-800 py-4">
      <div className="mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex items-center w-1/3">
            <a href="/" className="ml-6 text-green-500 hover:text-white">
              Home
            </a>
            <a href="/tasks" className="ml-6 text-green-500 hover:text-white">
              Tasks
            </a>
          </div>
          <div className="flex items-center w-1/3 justify-center">
            <h2 className="text-white text-lg font-bold">Smarter Tasks</h2>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
