'use client';
import {useState} from "react";

export default function UserInfoWrite({onClose}) {

    const [showPopup, setShowPopup] =  useState(false);

    return (
        <>
            <div className="encrypt-div flex justify-center items-center fixed inset-0 p-3 z-50">
                <div className="background absolute inset-0 bg-black/40"></div>
                <div className="encrypt-panel relative overflow-hidden flex flex-col w-full p-4 bg-slate-50 rounded-2xl z-50">
                    <p className="encrypt-title mb-2 text-xl text-center font-bold leading-tight">고객정보</p>
                    <div className="overflow-y-auto flex flex-col max-h-96 rounded-lg bg-white p-4">
                        <label className="encrypt-txt mb-2 text-lg font-bold leading-tight">온라인 주문 및 쿠폰기능을 사용하기 위해 휴대폰 번호를 입력해주세요</label>
                        <p className="encrypt-mobile flex px-2.5 py-1.5 bg-white border border-black/10 rounded-lg text-lg tracking-widest">
                            010-
                            <input type="text" maxLength="9" inputMode="numeric" className="w-full text-lg tracking-widest" />
                        </p>
                        <div className="flex mx-auto my-6">
                            <label className="flex">
                                <input type="checkbox" className="encrypt-check size-6 mr-2" />
                                <button type="button" onClick={()=>setShowPopup(true)} href="#" className="mobile-popup text-blue-500">개인정보 수집·이용</button>
                                에 동의합니다.
                            </label>
                        </div>
                        <button className="encrypt-btn flex justify-center items-center h-12 rounded-lg text-lg text-white font-bold bg-rose-500">
                            이용동의 및 사용시작
                        </button>
                        {/* 개인정보 안내 모달 */}
                        {showPopup && (
                            <div className="encrypt-popup-bg fixed inset-0 flex justify-center items-center w-full h-full p-2.5 bg-black/50 z-10" style={{display:''}}>
                                <div className="encrypt-modalbox popup relative flex flex-col w-full p-2.5 rounded bg-slate-50">
                                    <button type="button" onClick={() => setShowPopup(false)} className="encrypt-modalbox-close absolute top-3 right-3 flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#666"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"></path></svg>
                                    </button>
                                    <div className="encrypt-popup-div overflow-y-auto h-120 mt-8">
                                        <h3>개인정보 수집·이용 동의서</h3>
                                        <br />
                                        ㈜투게더스는 『개인정보보호법』 제15조 개인정보의 수집·이용에 따라 귀하의 개인정보를 수집하고자 합니다.
                                        <br /><br />
                                        귀하께서는 아래 개인정보의 수집 항목, 이용 목적, 이용기간을 확인하고, 이용동의서에 체크해 주시기 바랍니다.
                                        <br />
                                        <table className="tbl_comm">
                                            <tbody><tr>
                                                <td>수집 항목</td>
                                                <td>이용 목적</td>
                                                <td>이용 기간</td>
                                            </tr>
                                                <tr>
                                                    <td>휴대폰번호</td>
                                                    <td>동의자가 다운받은 쿠폰을 포스 프로그램에 적용시 활용</td>
                                                    <td>쿠폰 다운 받은 해당월</td>
                                                </tr>
                                            </tbody></table>
                                        <br />
                                        <h4>1. 개인정보 수집 및 이용목적</h4>
                                        <br />
                                        ① POS프로그램에서 전송된 쿠폰을 다운 받아 사용시 다운받은 정보와 사용자를 확인하는 목적으로 개인정보에 해당하는 휴대폰번호를 수집합니다.
                                        <br /><br />
                                        ② 개인정보 수집·이용에 대한 동의를 거부할 권리가 있으며, 동의를 거부할 경우 매장에서 제공하는 서비스(이벤트 등)에 제약이 있을 수 있습니다.
                                        <br /><br />
                                        ③ 상기 이용목적 이외는 개인정보를 사용하지 않습니다.
                                        <br /><br />
                                        <h4>2. 개인정보 처리 및 보유기간</h4>
                                        <br />
                                        ① 수집한 개인정보의 수집목적이 모두 달성될 때까지 해당 개인정보를 보유합니다.
                                        <br /><br />
                                        ② 수집한 개인정보는 매장에서 제공하는 이벤트(쿠폰 등) 사용 시 활용되며, 쿠폰을 다운받은 해당월까지 안전하게 보관 후 파기합니다.
                                        <br /><br />
                                        <h4>3. 개인정보의 3자 제공</h4>
                                        <br />
                                        귀하의 별도 동의가 있거나 다른 법률에 특별한 규정이 존재하는 경우 이외에는 개인정보를 3자에게 제공하지 않습니다.
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <button onClick={()=>onClose && onClose()} className="encrypt-close-btn absolute top-3 right-3 flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"></path></svg>
                    </button>
                </div>
            </div>
                
        </>
    )
}