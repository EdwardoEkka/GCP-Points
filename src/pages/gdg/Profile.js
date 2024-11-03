import React, { useState } from 'react';
import points_data from './output'; // Ensure this path is correct

const ProfileList = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Sort the data by points in descending order
    const sortedData = [...points_data].sort((a, b) => b.points - a.points);

    // Filter profiles based on the search term
    const filteredData = sortedData.filter(profile => 
        profile.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Profiles</h1>

            {/* Search bar */}
            <input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mb-4 p-2 border rounded w-full"
            />

            {filteredData.map(profile => (
                <div key={profile.url} className="mb-6 p-4 border rounded-lg shadow">
                    <h2 className="text-xl font-semibold">
                        <a href={profile.url} target="_blank" rel="noopener noreferrer">{profile.name}</a>
                    </h2>
                    <p className="text-gray-700">{profile.points}</p>
                    <h3 className="font-bold mt-2">Badges: {profile.badges.length}</h3>
                    <a href={profile.url} className='text-blue-800 font-bold' target="_blank" rel="noopener noreferrer">Boost Profile</a>
                </div>
            ))}
        </div>
    );
};

export default ProfileList;
