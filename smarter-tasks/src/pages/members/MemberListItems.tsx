import React from 'react';
import { deleteMember } from '../../context/members/actions';

const MemberListItems = ({ members, dispatch }: any) => {
  return (
    <div className="p-4">
      {members.map((member: any) => (
        <div
          key={member.id}
          className="member flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4"
        >
          <span className="text-gray-800">
            {member.name} ({member.email})
          </span>
          <button
            onClick={() => deleteMember(dispatch, member.id)}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default MemberListItems;
