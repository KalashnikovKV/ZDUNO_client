interface ClockIconProps {
  seconds: number; // 0 - 60
  total?: number; // по умолчанию 60
}

export const ClockIcon = ({ seconds, total = 60 }: ClockIconProps) => {
  const rotation = ((total - seconds) / total) * 360;

  return (
    <svg
      className='w-8 h-8 text-blue-600'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.5'
      viewBox='0 0 24 24'
    >
      {/* Циферблат */}
      <circle
        cx='12'
        cy='12'
        r='9'
        stroke='currentColor'
        strokeWidth='1.5'
        className='opacity-30'
      />
      {/* Стрелка — поворот по времени */}
      <g transform={`rotate(${rotation} 12 12)`}>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M12 12 L12 7'
          stroke='currentColor'
          strokeWidth='1.5'
        />
      </g>
    </svg>
  );
};
