import cx from 'classnames';

type HamburgerProps = {
  isOpen: boolean;
  onToggleOpen: () => void;
};

const Hamburger = ({ isOpen, onToggleOpen }: HamburgerProps) => {
  return (
    <>
      <div className='md:hidden flex items-center'>
        <div
          className={cx(
            'nav-icon3 z-10 absolute align text-3xl',
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
        .nav-icon3 {
          width: 25px;
          height: 1rem;
          position: relative;
          transform: rotate(0deg);
          transition: 0.5s ease-in-out;
          cursor: pointer;
        }

        .nav-icon3 span {
          display: block;
          position: absolute;
          height: 1.5px;
          width: 100%;
          background: black;
          opacity: 1;
          left: 0;
          transform: rotate(0deg);
          transition: 0.25s ease-in-out;
        }

        .nav-icon3 span:nth-child(3) {
          top: 11px;
          width: 33.3%;
          transform: rotate(180deg);
        }
        .nav-icon3 span:nth-child(2) {
          top: 6px;
          width: 66.6%;
          transform: rotate(180deg);
        }
        .nav-icon3 span:nth-child(1) {
          top: 1px;
        }
        .nav-icon3.open span:nth-child(3) {
          opacity: 0;
        }
        .nav-icon3.open span:nth-child(1) {
          transform: rotate(45deg);
        }
        .nav-icon3.open span:nth-child(2) {
          transform: rotate(-45deg);
        }
      `}</style>
    </>
  );
};

export default Hamburger;
