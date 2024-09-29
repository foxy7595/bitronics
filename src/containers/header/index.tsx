

import { Img } from '@/components';
import React from 'react';

const Header: React.FC = () => {
    return (
        <div className="flex items-center justify-between gap-5 bg-white-a700 self-stretch px-[30px] z-50 py-5 sm:px-5 sticky top-0">
            <Img src="img_logo.png" width={182} height={30} alt="Logo" className="h-[30px] w-[12%] object-contain" />
            <Img
                src="img_tdesign_menu_application.svg"
                width={50}
                height={50}
                alt="Tdesignmenu"
                className="h-[50px] w-[50px]"
            />
        </div>
    );
};

export default Header;
