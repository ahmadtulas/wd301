import React from 'react';
import { RouterProvider } from 'react-router-dom';

import router from './routes';

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* <TaskApp /> */}
    </div>
  );
};

export default App;
