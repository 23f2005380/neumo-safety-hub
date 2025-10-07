import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface NeuButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  active?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: ReactNode;
  label?: string;
}

const NeuButton = ({ 
  children, 
  onClick, 
  active = false, 
  size = "md",
  className,
  icon,
  label
}: NeuButtonProps) => {
  const sizeClasses = {
    sm: "w-14 h-14 text-xs",
    md: "w-16 h-16 text-sm",
    lg: "w-20 h-20 text-base"
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={onClick}
        className={cn(
          "rounded-full transition-neu neu-active",
          active ? "neu-pressed-sm" : "neu-flat-sm",
          "hover:scale-105 active:scale-95",
          "flex items-center justify-center",
          sizeClasses[size],
          className
        )}
        aria-label={label}
      >
        {icon ? (
          <div className={cn(
            "transition-colors",
            active ? "text-accent" : "text-foreground"
          )}>
            {icon}
          </div>
        ) : (
          children
        )}
      </button>
      {label && (
        <span className="text-xs text-muted-foreground font-medium">
          {label}
        </span>
      )}
    </div>
  );
};

export default NeuButton;
