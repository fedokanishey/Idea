import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
    variant?: 'primary' | 'muted' | 'outline';
};

export function Badge({
    variant = 'primary',
    className,
    ...props
}: BadgeProps) {
    const variantClasses = {
        primary: 'bg-primary/15 text-primary border-primary/30',
        muted: 'bg-card text-muted-foreground border-border',
        outline: 'border-border text-foreground',
    };

    return (
        <span
            className={cn(
                'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium tracking-wide transition-colors',
                variantClasses[variant],
                className
            )}
            {...props}
        />
    );
}
