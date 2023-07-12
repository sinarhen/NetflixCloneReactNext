import React from 'react';

interface MobileMenuProps {
    visible?: boolean
}

const MobileMenu: React.FC<MobileMenuProps> = ({visible}) => {
    if (!visible) {
        return null;
    }
    const navButtons = ["Home", 'Series', 'Films', 'New & Popular', 'My List', 'Browse by Languages']
    return (
        <div className='bg-black w-56 absolute top-14 left-0 py-5 flex-col border-2 border-gray-800 flex'>
            <div className='flex flex-col gap-4 '>
                
                {navButtons.map(btnText => 
                <div key={btnText} className='px-3 text-center text-white hover:underline'>
                    {btnText}
                </div>
                
                )}
                
            
            </div>
        </div>
    )
}

export default MobileMenu;
