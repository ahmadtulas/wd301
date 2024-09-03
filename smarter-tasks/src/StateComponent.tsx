import { useState } from 'react';

function StateComponent() {
  const [title, setTitle] = useState(() => {
    return 'hello ahmad jamal';
  });

  function setCustomState() {
    setTitle('Hi Hooks');
  }
  console.log(title, 'title');
  console.log(setTitle, 'setStateFunction');
  return (
    <>
      <div>{title}</div>
      <button className="bg-red-400" onClick={setCustomState}>
        Click me
      </button>
    </>
  );
}

export default StateComponent;
