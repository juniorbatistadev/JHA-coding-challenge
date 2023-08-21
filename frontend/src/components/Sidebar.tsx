function Sidebar({ mobile, close }: { mobile?: boolean; close?: () => void }) {  return (
    <ul className={mobile ? "h-full absolute top-0 left-0 bg-white" : "h-full"}>
      <p onClick={close}>X</p>
      <li>JHAs</li>
      <li>Settigns</li>
      <li>Logout</li>
    </ul>
  );
}

export default Sidebar;
