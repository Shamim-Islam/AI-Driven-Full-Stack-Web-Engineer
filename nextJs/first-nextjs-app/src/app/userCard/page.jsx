import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-lg">
        {/* Profile Image */}
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="User"
          className="mx-auto h-24 w-24 rounded-full object-cover ring-4 ring-blue-100"
        />

        {/* User Info */}
        <h2 className="mt-4 text-2xl font-bold text-gray-800">{user.name}</h2>

        <p className="mt-1 text-sm text-gray-500">{user.job}</p>

        {/* Details */}
        <div className="mt-6 space-y-3 text-left">
          <div className="flex justify-between rounded-lg bg-gray-50 p-3">
            <span className="font-medium text-gray-500">Email</span>
            <span className="text-gray-800">{user.email}</span>
          </div>

          <div className="flex justify-between rounded-lg bg-gray-50 p-3">
            <span className="font-medium text-gray-500">Location</span>
            <span className="text-gray-800">{user.address?.city}</span>
          </div>

          <div className="flex justify-between rounded-lg bg-gray-50 p-3">
            <span className="font-medium text-gray-500">Phone</span>
            <span className="font-semibold text-green-600">{user.phone}</span>
          </div>
          <div className="flex justify-between rounded-lg bg-gray-50 p-3">
            <span className="font-medium text-gray-500">Website</span>
            <span className="font-semibold text-green-600">{user.website}</span>
          </div>
        </div>

        {/* Button */}
        <button className="mt-6 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default UserCard;
