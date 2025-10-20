import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  containerSize?: 'sm' | 'md' | 'lg' | 'full';
  noPadding?: boolean;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, containerSize = 'lg', noPadding = false, children, ...props }, ref) => {
    const paddingStyles = noPadding ? '' : 'py-12 md:py-14';

    return (
      <section ref={ref} className={cn(paddingStyles, className)} {...(props as any)}>
        <Container size={containerSize}>{children}</Container>
      </section>
    );
  }
);

Section.displayName = 'Section';

export { Section };
