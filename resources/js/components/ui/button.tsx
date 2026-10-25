import { Link, type InertiaLinkProps } from '@inertiajs/react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type BaseButtonProps = {
    variant?: 'primary' | 'outlined' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    icon?: ReactNode;
    children?: ReactNode;
    className?: string;
};

export type ButtonProps = BaseButtonProps &
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> & {
        href?: never;
    };

export type ButtonLinkProps = BaseButtonProps &
    Omit<InertiaLinkProps, 'size'>;

export function Button(props: ButtonProps | ButtonLinkProps) {
    const {
        variant = 'primary',
        size = 'md',
        isLoading = false,
        icon,
        children,
        className,
        ...rest
    } = props;

    const variantClass =
        variant === 'outlined'
            ? 'btn-outlined'
            : variant === 'ghost'
              ? 'btn-ghost'
              : '';

    const sizeClass =
        size === 'sm'
            ? 'h-7 px-2.5 text-xs'
            : size === 'lg'
              ? 'h-10 px-5 text-base'
              : '';

    const baseClass = cn(
        'btn select-none transition-all duration-200 inline-flex items-center justify-center font-medium disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
        variantClass,
        sizeClass,
        className
    );

    const content = (
        <>
            {isLoading && (
                <svg
                    className="h-4 w-4 animate-spin text-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    />
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                </svg>
            )}
            {!isLoading && icon && <span className="inline-flex shrink-0">{icon}</span>}
            {children}
        </>
    );

    if ('href' in rest && rest.href !== undefined) {
        return (
            <Link
                className={baseClass}
                {...(rest as InertiaLinkProps)}
            >
                {content}
            </Link>
        );
    }

    return (
        <button
            type={(rest as ButtonHTMLAttributes<HTMLButtonElement>).type || 'button'}
            disabled={isLoading || (rest as ButtonHTMLAttributes<HTMLButtonElement>).disabled}
            className={baseClass}
            {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
        >
            {content}
        </button>
    );
}
