import React, { useState } from 'react';
import { useMembersState } from '../../context/members/context';
import NewMember from './NewMember';
import { deleteMember } from '../../context/members/actions';
import { useMembersDispatch } from '../../context/members/context';

const MemberList: React.FC = () => {
  const state = useMembersState();
  const dispatch = useMembersDispatch();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDelete = (id: number) => {
    deleteMember(dispatch, id);
  };

  return (
    <>
      <button onClick={() => setIsDialogOpen(true)}>Add Member</button>
      {isDialogOpen && <NewMember onClose={() => setIsDialogOpen(false)} />}
      {state.isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {state.members.map((member) => (
            <li key={member.id}>
              {member.name} - {member.email}
              <button onClick={() => handleDelete(member.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      {state.isError && <p>{state.errorMessage}</p>}
    </>
  );
};

export default MemberList;
