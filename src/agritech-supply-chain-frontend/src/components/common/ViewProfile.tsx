import React, { useState, ChangeEvent } from 'react';
import { Camera, X, CheckCircle } from 'lucide-react';
import './ViewProfile.css';



const ViewProfile: React.FC = () => {
  const [name, setName] = useState('Sarah Migada');
  const [role, setRole] = useState('Farmer');
  const [email, setEmail] = useState('sarah@example.com');
  const [phone, setPhone] = useState('+254768517085');
  const [address, setAddress] = useState('Nairobi, Kenya');
  const [bio, setBio] = useState('Passionate about sustainable agriculture and community development.');
  const [profilePicture, setProfilePicture] = useState<string>('');
  const [showAlert, setShowAlert] = useState(false);

  const handleProfilePictureChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Type assertion for reader.result since we know it will be a string
        const result = reader.result as string;
        setProfilePicture(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const removeProfilePicture = () => {
    setProfilePicture('');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Custom Alert */}
        {showAlert && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
            <CheckCircle className="text-green-500 mr-2" size={20} />
            <div>
              <h3 className="text-green-800 font-semibold">Success</h3>
              <p className="text-green-700 text-sm">Your profile has been updated successfully!</p>
            </div>
          </div>
        )}
        
        <div className="bg-white shadow rounded-lg overflow-hidden">
          {/* Header */}
          <div className="px-6 py-4 bg-green-600">
            <h2 className="text-2xl font-bold text-white">Profile Information</h2>
          </div>

          {/* Profile Picture Section */}
          <div className="px-6 py-6 border-b border-gray-200">
            <div className="flex items-center space-x-6">
              <div className="relative">
                {profilePicture ? (
                  <div className="relative">
                    <img
                      src={profilePicture}
                      alt="Profile"
                      className="h-32 w-32 rounded-full object-cover border-4 border-green-200"
                    />
                    <button
                      onClick={removeProfilePicture}
                      className="absolute -top-2 -right-2 p-1 bg-red-500 rounded-full text-white hover:bg-red-600"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ) : (
                  <div className="h-32 w-32 rounded-full bg-green-100 flex items-center justify-center">
                    <Camera size={40} className="text-green-600" />
                  </div>
                )}
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Profile Picture
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePictureChange}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                />
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="px-6 py-6 space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2 border"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Role
                </label>
                <input
                  type="text"
                  value={role}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setRole(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2 border"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2 border"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2 border"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>
              <input
                type="text"
                value={address}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2 border"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bio
              </label>
              <textarea
                rows={4}
                value={bio}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setBio(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2 border"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="px-6 py-4 bg-gray-50 flex justify-end space-x-4">
            <button
              onClick={() => {}}
              className="px-4 py-2 border border-red-300 text-red-700 rounded-md hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Delete Account
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;