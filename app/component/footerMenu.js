export default function FooterMenu() {
  return (
    <div className="footer">
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