import React from "react";

const UserDetailsPage = async ({ params }) => {
  const { userId } = await params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );
  const user = await res.json();

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900">User Details</h1>
          <p className="mt-2 text-gray-500">
            Complete information about this user
          </p>
        </div>

        {/* Main Card */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 px-6 py-10 text-white">
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              {/* Avatar */}
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white text-4xl font-bold text-indigo-600 shadow-lg">
                {user.name.charAt(0)}
              </div>

              <div>
                <h2 className="text-3xl font-bold">{user.name}</h2>

                <p className="mt-1 text-white/80">@{user.username}</p>

                <p className="mt-2 text-sm text-white/90">{user.email}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="grid gap-8 p-6 md:grid-cols-2 lg:p-8">
            {/* Personal Information */}
            <section>
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                Personal Information
              </h3>

              <div className="space-y-4">
                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">Full Name</p>
                  <p className="mt-1 font-semibold text-gray-900">
                    {user.name}
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">Username</p>
                  <p className="mt-1 font-semibold text-gray-900">
                    @{user.username}
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="mt-1 font-semibold text-gray-900">
                    {user.email}
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="mt-1 font-semibold text-gray-900">
                    {user.phone}
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">Website</p>
                  <p className="mt-1 font-semibold text-indigo-600">
                    {user.website}
                  </p>
                </div>
              </div>
            </section>

            {/* Address */}
            <section>
              <h3 className="mb-4 text-xl font-bold text-gray-900">Address</h3>

              <div className="space-y-4">
                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">Street</p>
                  <p className="mt-1 font-semibold text-gray-900">
                    {user.address.street}
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">Suite</p>
                  <p className="mt-1 font-semibold text-gray-900">
                    {user.address.suite}
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">City</p>
                  <p className="mt-1 font-semibold text-gray-900">
                    {user.address.city}
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">Zip Code</p>
                  <p className="mt-1 font-semibold text-gray-900">
                    {user.address.zipcode}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-gray-50 p-4">
                    <p className="text-sm text-gray-500">Latitude</p>
                    <p className="mt-1 font-semibold text-gray-900">
                      {user.address.geo.lat}
                    </p>
                  </div>

                  <div className="rounded-xl bg-gray-50 p-4">
                    <p className="text-sm text-gray-500">Longitude</p>
                    <p className="mt-1 font-semibold text-gray-900">
                      {user.address.geo.lng}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Company */}
          <div className="border-t border-gray-100 bg-gray-50 p-6 lg:p-8">
            <h3 className="mb-4 text-xl font-bold text-gray-900">
              Company Information
            </h3>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl bg-white p-5 shadow-sm">
                <p className="text-sm text-gray-500">Company Name</p>

                <p className="mt-2 font-bold text-gray-900">
                  {user.company.name}
                </p>
              </div>

              <div className="rounded-xl bg-white p-5 shadow-sm">
                <p className="text-sm text-gray-500">Catch Phrase</p>

                <p className="mt-2 font-medium text-gray-800">
                  {user.company.catchPhrase}
                </p>
              </div>

              <div className="rounded-xl bg-white p-5 shadow-sm">
                <p className="text-sm text-gray-500">Business</p>

                <p className="mt-2 font-medium text-gray-800">
                  {user.company.bs}
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-100 px-6 py-5 text-center text-sm text-gray-500">
            User ID:{" "}
            <span className="font-semibold text-gray-800">{user.id}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;
