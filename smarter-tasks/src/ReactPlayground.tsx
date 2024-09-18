import React, { useState, useEffect } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

const ReactPlayground = () => {
  const [data, setData] = useState<Post[]>([]);

  //   useEffect(() => {
  //     fetch('https://jsonplaceholder.typicode.com/posts')
  //       .then((response) => response.json())
  //       .then((data) => setData(data))
  //       .catch((error) => console.error(error));
  //   }, []);
  //   console.log(data);

  // async Request

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts'
        );
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Posts</h1>
      <div className="space-y-8">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <p className="text-gray-500 text-sm">Post ID: {item.id}</p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h2>
            <p className="text-gray-700">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReactPlayground;
