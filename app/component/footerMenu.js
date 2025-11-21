'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import UserInfoWrite from './userInfoWrite';

const FooterMenu = () => {
    const pathname = usePathname();
    const router = useRouter();

    const [showUserInfo, setShowUserInfo] = useState(false);
    const [pendingPath, setPendingPath] = useState(null);

    const openUserInfoForPath = (path) => {
        setPendingPath(path);
        setShowUserInfo(true);
    };

    const handleLinkClick = (path) => (e) => {
        e.preventDefault();           // 즉시 이동 방지
        openUserInfoForPath(path);    // 모달 열기
    };

    const closeUserInfo = () => {
        setShowUserInfo(false);
        if (pendingPath) {
            router.push(pendingPath);   // 모달 닫힌 후 이동
            setPendingPath(null);
        }
    };

    return (
        <>
            <div className="footermenu fixed bottom-0 flex justify-around items-center w-full h-20 bg-white shadow-[0_0_12px_rgba(22,29,36,.1)] z-50">
                <Link className={`footermenu__link flex-1 relative flex flex-col justify-center items-center w-16 h-16 text-xs text-[#666] no-underline
                        ${pathname === "/" ? "active font-bold text-blue-500 [&_svg]:fill-[#3b82f6]" : "[&_svg]:fill-[#94a3b8]"}`}
                    href={"/"}
                >
                    {pathname === "/" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill='#3b82f6'><path d="M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z" /></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#94a3b8"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" /></svg>
                    )}
                    <span>전단</span>
                </Link>
                <Link className={`footermenu__link flex-1 relative flex flex-col justify-center items-center w-16 h-16 text-xs no-underline
                        ${pathname === "/couponlist" ? "active font-bold text-blue-500 [&_svg]:fill-[#3b82f6]" : "[&_svg]:fill-[#94a3b8]"}`}
                    href={"/couponlist"} onClick={handleLinkClick('/couponlist')}
                >
                    {pathname === "/couponlist" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm0-160q17 0 28.5-11.5T520-480q0-17-11.5-28.5T480-520q-17 0-28.5 11.5T440-480q0 17 11.5 28.5T480-440Zm0-160q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm320 440H160q-33 0-56.5-23.5T80-240v-160q33 0 56.5-23.5T160-480q0-33-23.5-56.5T80-560v-160q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v160q-33 0-56.5 23.5T800-480q0 33 23.5 56.5T880-400v160q0 33-23.5 56.5T800-160Z" /></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#94a3b8"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm0-160q17 0 28.5-11.5T520-480q0-17-11.5-28.5T480-520q-17 0-28.5 11.5T440-480q0 17 11.5 28.5T480-440Zm0-160q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm320 440H160q-33 0-56.5-23.5T80-240v-160q33 0 56.5-23.5T160-480q0-33-23.5-56.5T80-560v-160q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v160q-33 0-56.5 23.5T800-480q0 33 23.5 56.5T880-400v160q0 33-23.5 56.5T800-160Zm0-80v-102q-37-22-58.5-58.5T720-480q0-43 21.5-79.5T800-618v-102H160v102q37 22 58.5 58.5T240-480q0 43-21.5 79.5T160-342v102h640ZM480-480Z"/></svg>
                    )}
                    <span>쿠폰</span>
                </Link>
                <Link className={`footermenu__link flex-1 relative flex flex-col justify-center items-center w-16 h-16 text-xs no-underline
                        ${pathname === "/cartlist" ? "active font-bold text-blue-500 [&_svg]:fill-[#3b82f6]" : "[&_svg]:fill-[#94a3b8]"}`}
                    href={"/cartlist"} onClick={handleLinkClick('/cartlist')}
                >
                    <span className='footermenu__num absolute top-1/2 left-1/2 flex justify-center items-center min-w-4.5 h-4.5 -mt-7.5 ml-1.5 px-1 rounded-full text-xs text-white font-bold bg-[#f43f5e]'>99</span>
                    
                    {pathname === "/cartlist" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM208-800h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Z" /></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#94a3b8"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
                    )}
                    <span>장바구니</span>
                </Link>
                <Link className={`footermenu__link flex-1 relative flex flex-col justify-center items-center w-16 h-16 text-xs no-underline
                        ${pathname === "/orderslist" ? "active font-bold text-blue-500 [&_svg]:fill-[#3b82f6]" : "[&_svg]:fill-[#94a3b8]"}`}
                    href={"/orderslist"} onClick={handleLinkClick('/orderslist')}
                >
                    {pathname === "/orderslist" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M320-280q17 0 28.5-11.5T360-320q0-17-11.5-28.5T320-360q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Zm0-160q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0-160q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm120 320h240v-80H440v80Zm0-160h240v-80H440v80Zm0-160h240v-80H440v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z" /></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M320-280q17 0 28.5-11.5T360-320q0-17-11.5-28.5T320-360q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Zm0-160q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0-160q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm120 320h240v-80H440v80Zm0-160h240v-80H440v80Zm0-160h240v-80H440v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>                    
                    )}
                    <span>주문내역</span>
                </Link>
                {/* <button type='button' onClick={openUserInfo}><span>{showUserInfo ? '열림' : '정보'}</span></button> */}
            </div>
            {showUserInfo &&(
                <UserInfoWrite onClose={closeUserInfo} />
            )}
        </>
    )
}
export default FooterMenu;
