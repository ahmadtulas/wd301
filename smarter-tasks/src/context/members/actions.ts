import { API_ENDPOINT } from '../../config/constants';

export const fetchMembers = async (dispatch: any) => {
  dispatch({ type: 'FETCH_MEMBERS_REQUEST' });
  try {
    const token = localStorage.getItem('authToken') ?? '';
    const response = await fetch(`${API_ENDPOINT}/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    dispatch({ type: 'FETCH_MEMBERS_SUCCESS', payload: data });
    console.log('dispatch called');
  } catch (error) {
    dispatch({
      type: 'FETCH_MEMBERS_FAILURE',
      payload: 'Failed to fetch members.',
    });
  }
};

export const addMember = async (
  dispatch: any,
  member: { name: string; email: string; password: string }
) => {
  try {
    const token = localStorage.getItem('authToken') ?? '';
    const response = await fetch(`${API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(member),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.errors?.[0]?.message || 'Failed to add member');
    }
    dispatch({ type: 'ADD_MEMBER_SUCCESS', payload: data });
    fetchMembers(dispatch);
  } catch (error) {
    console.error('Failed to add member:', error);
  }
};

export const deleteMember = async (dispatch: any, id: number) => {
  try {
    const token = localStorage.getItem('authToken') ?? '';
    await fetch(`${API_ENDPOINT}/users/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: 'DELETE_MEMBER_SUCCESS', payload: id });
  } catch (error) {
    console.error('Failed to delete member:', error);
  }
};
