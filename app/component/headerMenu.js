'use client';
const HeaderMenu = () => {
  return (
      <div style={{ position: "sticky", zIndex: 999, top: 0 }}>
        <div className="sample__name clearfix" style={{ color: "", background: "" }}>
            <span className="js_fontsize" style={{ fontSize: "1.9em" }}>투게더마트</span>
            <a onClick={() => window.location.href = 'tel:1577-4550'} className="sample__tel">
                <img src="/static/img/ico_call.png" />
            </a>
        </div>
      <style jsx>{`
        .header-menu {
          background: #f8f9fa;
          padding: 10px;
        }
        .header-menu ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          gap: 15px;
        }
        .header-menu li a {
          text-decoration: none;
          color: #007bff;
        }
      `}</style>
    </div>
  );
}

export default HeaderMenu;