import cx from 'classnames';

type HamburgerProps = {
  isOpen: boolean;
  onToggleOpen: () => void;
};

const Hamburger = ({ isOpen, onToggleOpen }: HamburgerProps) => {
  return (
    <>
      <div className='md:hidden flex items-center z-50 absolute right-7 top-7'>
        <div
          className={cx(
            'nav-icon absolute align text-3xl',
            !isOpen ? '' : 'open'
          )}
          onClick={onToggleOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <style jsx>{`
        .nav-icon {
          width: 30px;
          height: 1rem;
          position: relative;
          transform: rotate(0deg);
          transition: 0.5s ease-in-out;
          cursor: pointer;
          transform: scaleX(-1);
        }

        .nav-icon span {
          display: block;
          position: absolute;
          height: 1.7px;
          width: 100%;
          background: black;
          opacity: 1;
          left: 0;
          transform: rotate(0deg);
          transition: 0.25s ease-in-out;
        }

        .nav-icon span:nth-child(3) {
          top: 15px;
          width: 33.3%;
        }

        .nav-icon span:nth-child(2) {
          top: 8px;
          width: 66.6%;
        }
        .nav-icon span:nth-child(1) {
          top: 1px;
        }
        .nav-icon.open span:nth-child(3) {
          opacity: 0;
        }
        .nav-icon.open span:nth-child(1) {
          top: 7px;
          width: 100%;
          transform: rotate(45deg);
        }
        .nav-icon.open span:nth-child(2) {
          transform: rotate(-45deg);
          width: 100%;
          top: 7px;
        }
      `}</style>
    </>
  );
};

export default Hamburger;
