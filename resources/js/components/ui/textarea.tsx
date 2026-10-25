import { forwardRef, type TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string;
    error?: string;
    hint?: string;
    containerClassName?: string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    (
        {
            id,
            label,
            error,
            hint,
            className,
            containerClassName,
            required,
            ...props
        },
        ref
    ) => {
        const textareaId = id || props.name;

        return (
            <div className={cn('flex flex-col gap-1.5 w-full', containerClassName)}>
                {label && (
                    <label htmlFor={textareaId} className="label flex items-center justify-between font-medium">
                        <span>
                            {label}
                            {required && <span className="text-red-500 ml-0.5">*</span>}
                        </span>
                        {hint && <span className="text-xs text-muted-foreground">{hint}</span>}
                    </label>
                )}

                <textarea
                    ref={ref}
                    id={textareaId}
                    required={required}
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? `${textareaId}-error` : undefined}
                    className={cn(
                        'textarea transition-colors duration-150 resize-y',
                        error && 'border-red-500 focus-visible:ring-red-500',
                        className
                    )}
                    {...props}
                />

                {error && (
                    <p id={`${textareaId}-error`} role="alert" className="error text-xs mt-0.5">
                        {error}
                    </p>
                )}
            </div>
        );
    }
);

Textarea.displayName = 'Textarea';
