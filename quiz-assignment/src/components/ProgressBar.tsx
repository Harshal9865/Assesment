type Props = {
  total: number;
  currentIndex: number;
};

export default function ProgressBar({ total, currentIndex }: Props) {
  const segments = Array.from({ length: total });

  return (
    <div className="w-[260px] mx-auto flex gap-1.5 justify-between mt-2">
      {segments.map((_, index) => (
        <div
          key={index}
          className={`h-[2px] flex-1 rounded-full ${
            index === currentIndex ? 'bg-[#1F2A33]' : 'bg-[#E2EDF6]'
          }`}
        />
      ))}
    </div>
  );
}
