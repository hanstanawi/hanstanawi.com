import cx from 'classnames';
import { animateInViewElement } from 'lib/animation.lib';

type HamburgerProps = {
  isOpen: boolean;
  onToggleOpen: () => void;
  isInView: boolean;
};

const Hamburger = ({ isOpen, onToggleOpen, isInView }: HamburgerProps) => {
  return (
    <>
      <div
        className='sm:hidden flex items-center z-50 absolute sm:right-10 right-7 sm:top-10 top-8'
        style={animateInViewElement(isInView, {
          direction: 'translateY(-20px)',
          speed: 0.3,
          delay: 100,
        })}
      >
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
