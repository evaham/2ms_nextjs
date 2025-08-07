'use client';

export default function FooterMenu() {
  return (
    <div className="wrap_stickyfooter">
      <a className="scroll_top btn_movetop">
        <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#fff"><path d="M160-760v-80h640v80H160Zm280 640v-408L336-424l-56-56 200-200 200 200-56 56-104-104v408h-80Z"></path></svg>
        <span>맨위로</span>
      </a>
      <div className="foot_menu">
        <div>메뉴1</div>
        <div>메뉴2</div>
        <div>메뉴3</div>
        <div>메뉴4</div>
      </div>

      <style jsx>{`
      .foot_menu {
        display: flex;
        height: 60px;
        background: #fff;
        border-top: 1px solid #c1c1c1;
        justify-content: space-around;
        align-items: center;
      }
    `}</style>
  </div>
  );
}