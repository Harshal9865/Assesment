type Props = {
  total: number;
  currentIndex: number;
};

export default function ProgressBar({ total, currentIndex }: Props) {
  const segments = Array.from({ length: total });

  return (
    <div className="w-[422px] mx-auto flex flex-col gap-3">
      <div className="h-[3px] w-full rounded-full bg-gradient-to-r from-[#1F2A33] to-[#E0E7EF] overflow-hidden">
        <div
          className="h-full bg-[#1F2A33] rounded-full transition-all duration-300 ease-out"
          style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
        />
      </div>
      <div className="flex gap-4">
        {segments.map((_, index) => (
          <div
            key={index}
            className={`h-[2px] flex-1 rounded-full ${
              index === currentIndex ? 'bg-[#1F2A33]' : 'bg-[#E2EDF6]'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
