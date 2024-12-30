import { cn } from '@/lib/utils';

export function BackgroundAnimation() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className={cn(
            "absolute rounded-full",
            "bg-gradient-to-br from-blue-100/30 to-cyan-100/30",
            i % 2 === 0 ? "animate-float" : "animate-float-slow"
          )}
          style={{
            width: `${Math.random() * 120 + 20}px`,
            height: `${Math.random() * 120 + 20}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${Math.random() * 4 + 4}s`,
            willChange: 'transform', // Performance optimization
          }}
        />
      ))}
    </div>
  );
}