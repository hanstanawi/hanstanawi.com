type SideNavbarProps = {
  isOpen: boolean;
};

const SideNavbar = ({ isOpen }: SideNavbarProps) => {
  return (
    <div className='fixed h-full w-3/4 right-0 flex flex-col items-center justify-center border-b border-black'>
      <h1>Test</h1>
    </div>
  );
};

export default SideNavbar;
