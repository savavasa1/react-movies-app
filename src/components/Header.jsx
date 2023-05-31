import React from "react";

const Header = (props) => {
  return (
    <header className="bg-[#0F1626] z-10 fixed top-0 w-full flex justify-between items-center py-4 px-6">
      <nav>
        <div className="mt-0 mb-2 text-[#F5F5F5] mx-auto">React Movies App</div>
      </nav>
      <button
        className="rounded-md px-4 py-2 bg-[#F5F5F5] text-[#000000] hover:bg-[#E50914] hover:text-[#F5F5F5] transition-colors"
        onClick={props.onLogout}
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
