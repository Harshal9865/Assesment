import pawGif from '../assets/749d79faabe3ab4ee8d83233bf1b15aa4471e72b.gif';

export default function PawBadge() {
  return (
    <div className="absolute left-[-20px] bottom-[40px] flex items-end gap-4">
      <div className="mb-10 px-5 py-3 rounded-[8px] bg-white text-[14px] text-[#15313D] border border-[#86C9FF] shadow-sm">
        Best of Luck!
      </div>
      <div className="w-[173px] h-[173px] overflow-hidden flex items-end justify-center">
        <img
          src={pawGif}
          alt="Cat paw"
          className="w-[173px] h-[173px] object-contain"
        />
      </div>
    </div>
  );
}
