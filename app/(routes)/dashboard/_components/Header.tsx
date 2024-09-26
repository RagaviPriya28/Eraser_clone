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

import { Button } from '@/components/ui/button';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { Search, Send, X } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

function Header() {
  const { user }: any = useKindeBrowserClient();
  const [inviteLink, setInviteLink] = useState(''); // State to store invite link
  const [isInviteCardOpen, setIsInviteCardOpen] = useState(false); // State to control card visibility

  // Function to generate invite link and show the card
  const handleInviteClick = () => {
    const generatedLink = `https://yourapp.com/invite?user=${user?.id}`; // Example invite link generation
    setInviteLink(generatedLink); // Update the state with the generated link
    setIsInviteCardOpen(true); // Show the invite card
  };

  // Function to close the invite card
  const handleCloseCard = () => {
    setIsInviteCardOpen(false); // Hide the invite card
  };

  return (
    <div className='flex justify-end w-full gap-2 items-center'>
      <div className='flex gap-2 items-center border rounded-md p-1'>
        <Search className='h-4 w-4' />
        <input type='text' placeholder='Search' />
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
        onClick={handleInviteClick} // Attach the click event
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
          <p className="mt-2 text-sm">Send this link to invite others:</p>
          <a
            href={inviteLink}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 underline break-all mt-2 block'
          >
            {inviteLink}
          </a>
          <Button
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white"
            onClick={handleCloseCard} 
          >
            Close
          </Button>
        </div>
      )}
    </div>
  );
}

export default Header;
