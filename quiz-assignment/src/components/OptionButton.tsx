type Props = {
  label: string;
  isSelected: boolean;
  onClick: () => void;
};

export default function OptionButton({ label, isSelected, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isSelected}
      className={`w-full h-[52px] rounded-[10px] border text-[14px] font-medium
        flex items-center justify-center text-center transition-all duration-200 ${
          isSelected
            ? 'bg-[#96E5FF] border-[#96E5FF] text-quizPrimary'
            : 'bg-white border-white hover:bg-[#96E5FF80] hover:border-[#96E5FF80]'
        }`}
    >
      {label}
    </button>
  );
}
