type OverlayProps = {
  onClickClose: () => void;
};

const Overlay = ({ onClickClose }: OverlayProps) => {
  return (
    <div
      className="fixed left-0 top-0 z-20 h-screen w-full bg-black opacity-60 backdrop-blur-xl transition-colors delay-1000 duration-500"
      onClick={onClickClose}
    />
  );
};

export default Overlay;
