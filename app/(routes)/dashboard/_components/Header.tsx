// import { Button } from '@/components/ui/button';
// import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
// import { Search, Send } from 'lucide-react'
// import Image from 'next/image'
// import React from 'react'

// function Header() {
//     const {user}:any=useKindeBrowserClient();
//   return (
//     <div className='flex justify-end w-full gap-2 items-center'>
//           <div className='flex gap-2 items-center border rounded-md p-1'>
//             <Search className='h-4 w-4' />
//             <input type='text' placeholder='Search'/>
//           </div> 
//           <div>
//             <Image src={user?.picture} alt='user'
//             width={30}
//             height={30}
//             className='rounded-full'
//             />
//           </div>
//           <Button className='gap-2 flex text-sm
//            h-8 hover:bg-blue-700 bg-blue-600
//           '><Send className='h-4 w-4'/> Invite</Button>    
//     </div>
//   )
// }

// export default Header

"use client";
import { Button } from '@/components/ui/button';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { Search, Send, X } from 'lucide-react';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';

function Header() {
  const { user }: any = useKindeBrowserClient();
  const [inviteLink, setInviteLink] = useState('');
  const [isInviteCardOpen, setIsInviteCardOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [teamId, setTeamId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (user?.id) {
      fetchTeamIdFromDatabase(user.id)
        .then(id => setTeamId(id))
        .catch(error => console.error('Error fetching team ID:', error));
    }
  }, [user?.id]);

  const fetchTeamIdFromDatabase = async (userId) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return `team_${userId.substring(0, 8)}`; // Simulating fetching the team ID
  };

  const searchResults = useQuery(api.file.searchFiles, { fileName: searchTerm });

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to open the invite card
  const handleInviteClick = () => {
    setIsInviteCardOpen(true);
  };

  // Function to generate invite link
  const handleGenerateLink = () => {
    setIsLoading(true);
    if (teamId) {
      const generatedLink = `http://localhost:3000/dashboard/${teamId}`;
      setInviteLink(generatedLink);
    } else {
      console.error('Team ID not available');
    }
    setIsLoading(false);
  };

  // Function to close the invite card
  const handleCloseCard = () => {
    setIsInviteCardOpen(false);
    setInviteLink(''); // Clear the invite link when closing
  };

  return (
    <div className='flex justify-end w-full gap-2 items-center'>
      <div className='flex gap-2 items-center border rounded-md p-1'>
        <Search className='h-4 w-4' />
        <input
          type='text'
          value={searchTerm}
          onChange={handleSearchChange}
          className='outline-none'
        />
      </div>
      <div>
        <Image
          src={user?.picture}
          alt='user'
          width={30}
          height={30}
          className='rounded-full'
        />
      </div>
      <Button
        className='gap-2 flex text-sm h-8 hover:bg-blue-700 bg-blue-600'
        onClick={handleInviteClick}
      >
       <Send className='h-4 w-4' /> Invite
      </Button>

      {/* Invite Link Card */}
      {isInviteCardOpen && (
        <div className="fixed top-20 right-10 w-72 bg-white shadow-lg p-4 rounded-lg z-50">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Invite Link</h3>
            <button onClick={handleCloseCard}>
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>
          <p className="mt-2 text-sm">Generate an invite link:</p>
          <Button
            className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white"
            onClick={handleGenerateLink}
          >
            Generate Link
          </Button>
          {inviteLink && (
            <>
              <p className="mt-2 text-sm">Send this link to invite others:</p>
              <a
                href={inviteLink}
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 underline break-all mt-2 block'
              >
                {inviteLink}
              </a>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Header;
