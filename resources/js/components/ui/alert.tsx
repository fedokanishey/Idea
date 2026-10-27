import { useEffect, useState } from 'react';
import { clsx } from 'clsx';

type AlertVariant = 'success' | 'error' | 'info';

type AlertProps = {
    children: React.ReactNode;
    variant?: AlertVariant;
    duration?: number; // ms before auto-dismiss, 0 = never
    className?: string;
};

const variantStyles: Record<AlertVariant, string> = {
    success: 'bg-green-50 border-green-400 text-green-800',
    error:   'bg-red-50 border-red-400 text-red-800',
    info:    'bg-blue-50 border-blue-400 text-blue-800',
};

const closeButtonStyles: Record<AlertVariant, string> = {
    success: 'hover:bg-green-100 text-green-600',
    error:   'hover:bg-red-100 text-red-600',
    info:    'hover:bg-blue-100 text-blue-600',
};

const variantIcons: Record<AlertVariant, string> = {
    success: '✓',
    error:   '✕',
    info:    'ℹ',
};

export function Alert({ children, variant = 'info', duration = 3000, className }: AlertProps) {
    const [visible, setVisible] = useState(true);
    const [animateOut, setAnimateOut] = useState(false);

    const dismiss = () => {
        setAnimateOut(true);
        setTimeout(() => setVisible(false), 300); // wait for fade-out
    };

    useEffect(() => {
        if (duration <= 0) return;
        const timer = setTimeout(dismiss, duration);
        return () => clearTimeout(timer);
    }, [duration]);

    if (!visible) return null;

    return (
        <div
            role="alert"
            className={clsx(
                // Position: fixed top-right
                'fixed top-4 right-4 z-50',
                // Responsive width
                'w-[calc(100vw-2rem)] sm:w-80 md:w-96',
                // Base styles
                'flex items-start gap-3 rounded-md border px-4 py-3 text-sm font-medium shadow-lg',
                // Variant colors
                variantStyles[variant],
                // Animation
                'transition-all duration-300 ease-in-out',
                animateOut
                    ? 'opacity-0 translate-x-4 pointer-events-none'
                    : 'opacity-100 translate-x-0',
                className,
            )}
        >
            {/* Icon */}
            <span className="mt-0.5 shrink-0 text-base leading-none" aria-hidden="true">
                {variantIcons[variant]}
            </span>

            {/* Message */}
            <span className="flex-1">{children}</span>

            {/* Close button */}
            <button
                onClick={dismiss}
                aria-label="Dismiss alert"
                className={clsx(
                    'ml-auto -mr-1 -mt-0.5 shrink-0 rounded p-1 transition-colors',
                    closeButtonStyles[variant],
                )}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
    );
}
