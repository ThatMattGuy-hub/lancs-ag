import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-2xl font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
    
    const variants = {
      primary: 'bg-accent text-white hover:bg-accent/90 shadow-md hover:shadow-lg hover:-translate-y-0.5',
      secondary: 'bg-ink-2 text-white hover:bg-ink-2/90 shadow-md hover:shadow-lg hover:-translate-y-0.5',
      outline: 'border-2 border-ink-2 text-ink-2 hover:bg-muted/40 hover:-translate-y-0.5',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    const Comp = asChild ? Slot : motion.button;

    return (
      <Comp
        ref={ref}
        whileTap={asChild ? undefined : { scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...(props as any)}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export { Button };
