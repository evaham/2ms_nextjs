'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const FooterMenu = () => {
  const [showPopup4, setShowPopup4] = useState(false);
  const [showPopup5, setShowPopup5] = useState(false);

  // Import usePathname from next/navigation

  const pathname = usePathname();

  return (
    <>
      <div className="footermenu">
        <Link
          className={`footermenu__link${pathname === "/" ? " active" : ""}`}
          href={"/"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z" /></svg>
          <span>전단</span>
        </Link>
        <button className="footermenu__link" onClick={() => setShowPopup4(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm0-160q17 0 28.5-11.5T520-480q0-17-11.5-28.5T480-520q-17 0-28.5 11.5T440-480q0 17 11.5 28.5T480-440Zm0-160q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm320 440H160q-33 0-56.5-23.5T80-240v-160q33 0 56.5-23.5T160-480q0-33-23.5-56.5T80-560v-160q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v160q-33 0-56.5 23.5T800-480q0 33 23.5 56.5T880-400v160q0 33-23.5 56.5T800-160Z" /></svg>
          <span>쿠폰</span>
        </button>
        <Link
          className={`footermenu__link ${pathname === "/cartlist" ? " active" : ""}`}
          href={"/cartlist"}
        >
          <span className='footermenu__num'>9</span>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM208-800h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Z" /></svg>
          <span>장바구니</span>
        </Link>
        <Link
          className={`footermenu__link${pathname === "/orderslist" ? " active" : ""}`}
          href={"/orderslist"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M320-280q17 0 28.5-11.5T360-320q0-17-11.5-28.5T320-360q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Zm0-160q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0-160q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm120 320h240v-80H440v80Zm0-160h240v-80H440v80Zm0-160h240v-80H440v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z" /></svg>
          <span>주문내역</span>
        </Link>
      </div>
      {showPopup4 && (
        <div className="layer__wrap">
          <div className="layer__bg"></div>
          <div className="layer__panel">
            <p className="layer__tit">고객정보</p>
            <div className="layer__userinfo">
              <label className='layer__usertxt'>온라인 주문 및 쿠폰기능을 사용하기 위해 휴대폰 번호를 입력해주세요</label>
              <input type='text' className="layer__userinput" placeholder="휴대폰 번호 입력" />
              <div className="layer__usercheckbox">
                <input alt="" className="" type="checkbox" />
                <label className=""><span className="layer__userunderline" onClick={() => setShowPopup5(true)}>개인정보 수집이용</span>에 동의합니다.<span className="text-teal-600"></span>
                </label>
              </div>
              <button className="layer__userbtn">이용동의 및 사용시작</button>
              <button onClick={() => setShowPopup4(false)} className="layer__close">
                <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"></path></svg>
              </button>
            </div>
          </div>
        </div>
      )}
      {showPopup5 && (
        <div className="layer__wrap">
          <div className="layer__bg"></div>
          <div className="layer__panel">
            <p className="layer__tit">개인정보 수집·이용 동의</p>
            <div className="layer__privacyinfo">
              ㈜투게더스는 『개인정보보호법』 제15조 개인정보의 수집·이용에 따라 귀하의 개인정보를 수집하고자 합니다. 귀하께서는 아래 개인정보의 수집 항목, 이용 목적, 이용기간을 확인하고, 이용동의서에 체크해 주시기 바랍니다.<strong>1. 개인정보 수집 및 이용목적</strong>① 회원 식별, 공동구매 상품구매 시 사용자를 확인하는 목적으로 개인정보에 해당하는 휴대폰번호를 수집합니다.② 개인정보 수집·이용에 대한 동의를 거부할 권리가 있으며, 동의를 거부할 경우 매장에서 제공하는 서비스에 제약이 있을 수 있습니다.③ 상기 이용목적 이외는 개인정보를 사용하지 않습니다.<strong>2. 개인정보 처리 및 보유기간</strong>① 수집한 개인정보의 수집목적이 모두 달성될 때까지 해당 개인정보를 보유합니다.② 수집한 개인정보는 매장에서 제공하는 공동구매 서비스 이용 시 활용되며, 공동구매 상품구매 후 00일까지 안전하게 보관 후 파기합니다.<strong>3. 개인정보 제공 및 공유</strong>① 수집된 개인정보는 법령에 의거하거나 귀하의 동의가 있는 경우를 제외하고 제3자에게 제공되지 않습니다.② 귀하의 동의가 필요한 경우, 제공받는 자, 제공 목적, 제공 항목 등을 사전에 안내하고 동의를 받습니다.<strong>4. 개인정보의 안전성 확보 조치</strong>① 수집된 개인정보는 암호화되어 안전하게 저장 및 관리됩니다.② 개인정보의 접근 권한을 최소화하고, 개인정보 유출 방지를 위한 보안 시스템을 운영합니다.5. 개인정보 처리에 대한 권리① 귀하는 언제든지 개인정보 열람, 정정, 삭제를 요청할 수 있습니다.② 개인정보 처리에 대한 문의는 고객센터를 통해 가능합니다.
              
              <button onClick={() => setShowPopup5(false)} className="layer__close">
                <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"></path></svg>
              </button>
            </div>
          </div>
        </div>
      )}

    </>
  )
}
export default FooterMenu;
