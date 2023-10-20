type OverlayProps = {
  onClickClose: () => void;
};

const Overlay = ({ onClickClose }: OverlayProps) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen z-20 bg-black opacity-60 transition-colors duration-500 delay-1000 backdrop-blur-xl"
      onClick={onClickClose}
    />
  );
};

export default Overlay;
