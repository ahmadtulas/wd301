import React, { useEffect } from 'react';
import {
  useMembersState,
  useMembersDispatch,
} from '../../context/members/context';
import { fetchMembers } from '../../context/members/actions';
import NewMember from './NewMember';
import MemberListItems from './MemberListItems';
const MembersPage = () => {
  const state = useMembersState();
  const dispatch = useMembersDispatch();

  useEffect(() => {
    fetchMembers(dispatch);
  }, [dispatch]);

  return (
    <div>
      <h1>Members</h1>
      <NewMember dispatch={dispatch} />
      <MemberListItems members={state.members} dispatch={dispatch} />
    </div>
  );
};

export default MembersPage;
