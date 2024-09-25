import { useEffect } from 'react';
import {
  useProjectsState,
  useProjectsDispatch,
} from '../../context/projects/context';
import { fetchProjects } from '../../context/projects/actions';
export default function ProjectListItems() {
  let state: any = useProjectsState();
  const dispatch = useProjectsDispatch();
  useEffect(() => {
    const fetchData = async () => {
      await fetchProjects(dispatch);
    };
    fetchData();
  }, [dispatch]);

  const { projects, isLoading, isError, errorMessage } = state;
  console.log(projects);

  if (projects.length === 0 && isLoading) {
    console.log('list empty');
    return <span>Loading...</span>;
  } else if (isError) {
    console.log('error');
    return <span>{String(errorMessage)}</span>;
  }

  return (
    <>
      {projects.map((project: any) => (
        <div
          key={project.id}
          className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
            {project.name}
          </h5>
        </div>
      ))}
    </>
  );
}
