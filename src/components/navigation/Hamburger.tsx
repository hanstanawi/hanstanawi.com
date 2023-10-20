import cx from 'classnames';
import DarkModeToggle from 'components/ui/DarkModeToggle';
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
        className="lg:hidden flex items-center gap-x-6 z-50"
        style={animateInViewElement(isInView, {
          direction: 'translateY(-20px)',
          speed: 0.3,
          delay: 100,
        })}
      >
        <DarkModeToggle />
        <div
          className={cx(
            'nav-icon absolute align text-3xl',
            !isOpen ? '' : 'open',
          )}
          onClick={onToggleOpen}
        >
          <span className="bg-black dark:bg-tealGreen"></span>
          <span className="bg-black dark:bg-tealGreen"></span>
          <span className="bg-black dark:bg-tealGreen"></span>
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
