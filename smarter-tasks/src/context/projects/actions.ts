import { API_ENDPOINT } from '../../config/constants';

export const addProject = async (dispatch: any, args: any) => {
  try {
    const token = localStorage.getItem('authToken') ?? '';
    const response = await fetch(`${API_ENDPOINT}/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify(args),
    });
    if (!response.ok) {
      throw new Error('Failed to create project');
    }
    const data = await response.json();
    if (data.errors && data.errors.length > 0) {
      return { ok: false, error: data.errors[0].message };
    }

    dispatch({ type: 'ADD_PROJECT_SUCCESS', payload: data });

    return { ok: true };
  } catch (error) {
    console.error('Operation failed:', error);
    return { ok: false, error };
  }
};

export const fetchProjects = async (dispatch: any) => {
  dispatch({ type: 'FETCH_PROJECTS_REQUEST' });

  try {
    const token = localStorage.getItem('authToken') ?? '';
    const response = await fetch(`${API_ENDPOINT}/projects`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }

    const data = await response.json();

    dispatch({ type: 'FETCH_PROJECTS_SUCCESS', payload: data });
  } catch (error) {
    console.error('Fetching projects failed:', error);
    dispatch({ type: 'FETCH_PROJECTS_FAILURE', payload: error });
  }
};
