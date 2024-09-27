import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useProjectsState } from '../../context/projects/context';
import { useTasksDispatch } from '../../context/task/context';
import { addTask } from '../../context/task/actions';
import { TaskDetailsPayload } from '../../context/task/types';

const NewTask = () => {
  console.log('newTask method Call');
  let [isOpen, setIsOpen] = useState(true);

  let { projectID } = useParams();
  let navigate = useNavigate();

  // Use react-hook-form to create form submission handler and state.
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskDetailsPayload>();
  const projectState = useProjectsState();
  const taskDispatch = useTasksDispatch();

  // We do some sanity checks to make sure the `projectID` passed is a valid one
  const selectedProject = projectState?.projects.filter(
    (project) => `${project.id}` === projectID
  )?.[0];
  if (!selectedProject) {
    return <>No such Project!</>;
  }
  function closeModal() {
    setIsOpen(false);
    navigate('../../');
  }
  const onSubmit: SubmitHandler<TaskDetailsPayload> = async (data) => {
    try {
      // Invoke the actual API and create a task.
      addTask(taskDispatch, projectID ?? '', data);
      closeModal();
    } catch (error) {
      console.error('Operation failed:', error);
    }
  };
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Create new Task
                  </Dialog.Title>
                  <div className="mt-2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <input
                        type="text"
                        required
                        placeholder="Enter title"
                        autoFocus
                        id="title"
                        {...register('title', { required: true })}
                        className="w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-green-500 focus:shadow-outline-green"
                      />
                      <input
                        type="text"
                        required
                        placeholder="Enter description"
                        autoFocus
                        id="description"
                        {...register('description', { required: true })}
                        className="w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-green-500 focus:shadow-outline-green"
                      />
                      <input
                        type="date"
                        required
                        placeholder="Enter due date"
                        autoFocus
                        id="dueDate"
                        {...register('dueDate', { required: true })}
                        className="w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-green-500 focus:shadow-outline-green"
                      />
                      <button
                        type="submit"
                        id="newTaskSubmitBtn"
                        className="inline-flex justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 mr-2 text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                      >
                        Submit
                      </button>
                      <button
                        onClick={closeModal}
                        className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                      >
                        Cancel
                      </button>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default NewTask;
