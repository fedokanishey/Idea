import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    error?: string;
    hint?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    containerClassName?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            id,
            label,
            error,
            hint,
            leftIcon,
            rightIcon,
            className,
            containerClassName,
            required,
            ...props
        },
        ref
    ) => {
        const inputId = id || props.name;

        return (
            <div className={cn('flex flex-col gap-1.5 w-full', containerClassName)}>
                {label && (
                    <label htmlFor={inputId} className="label flex items-center justify-between font-medium">
                        <span>
                            {label}
                            {required && <span className="text-red-500 ml-0.5">*</span>}
                        </span>
                        {hint && <span className="text-xs text-muted-foreground">{hint}</span>}
                    </label>
                )}

                <div className="relative flex items-center">
                    {leftIcon && (
                        <div className="pointer-events-none absolute left-3 flex items-center form-muted-icon">
                            {leftIcon}
                        </div>
                    )}

                    <input
                        ref={ref}
                        id={inputId}
                        required={required}
                        aria-invalid={Boolean(error)}
                        aria-describedby={error ? `${inputId}-error` : undefined}
                        className={cn(
                            'input transition-colors duration-150',
                            leftIcon && 'pl-10',
                            rightIcon && 'pr-10',
                            error && 'border-red-500 focus-visible:ring-red-500',
                            className
                        )}
                        {...props}
                    />

                    {rightIcon && (
                        <div className="absolute right-3 flex items-center form-muted-icon">
                            {rightIcon}
                        </div>
                    )}
                </div>

                {error && (
                    <p id={`${inputId}-error`} role="alert" className="error text-xs mt-0.5">
                        {error}
                    </p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';
