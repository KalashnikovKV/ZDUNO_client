interface TimerCircleProps {
  seconds: number;
  total?: number;
}

export const TimerCircle = ({ seconds, total = 60 }: TimerCircleProps) => {
  const radius = 20;
  const circumference = 2 * Math.PI * radius;

  const progress = (total - seconds) / total;
  const offset = circumference * (1 - progress); // чем меньше offset — тем больше заполнено

  return (
    <svg width='60' height='60' className='rotate-[-90deg]'>
      <circle
        cx='30'
        cy='30'
        r={radius}
        stroke='#e5e7eb' // light gray (background track)
        strokeWidth='4'
        fill='none'
      />
      <circle
        cx='30'
        cy='30'
        r={radius}
        stroke='#3b82f6' // blue-500
        strokeWidth='4'
        fill='none'
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        className='transition-all duration-500 ease-linear'
      />
    </svg>
  );
};
