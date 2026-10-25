import { Link } from '@inertiajs/react';
import type { ReactNode } from 'react';

type AuthLayoutProps = {
    title: string;
    description?: string;
    children: ReactNode;
};

export function AuthLayout({ title, description, children }: AuthLayoutProps) {
    return (
        <div className="bg-background selection:bg-primary selection:text-primary-foreground relative flex min-h-screen flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
            {/* Ambient background glow matching primary color */}
            <div
                className="pointer-events-none absolute inset-0 overflow-hidden"
                aria-hidden="true"
            >
                <div className="bg-primary/10 absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-[120px]" />
                <div className="bg-primary/5 absolute right-10 -bottom-40 h-[400px] w-[400px] rounded-full blur-[100px]" />
            </div>

            <div className="relative w-full max-w-md space-y-8">
                {/* Brand Header */}
                <div className="flex flex-col items-center text-center">
                    <Link
                        href="/"
                        className="group mb-4 flex items-center gap-2.5 transition-transform hover:scale-105"
                    >
                        <span className="bg-primary text-primary-foreground shadow-primary/20 flex h-11 w-11 items-center justify-center rounded-2xl shadow-lg">
                            <svg
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                                <path d="M9 18h6" />
                                <path d="M10 22h4" />
                            </svg>
                        </span>
                    </Link>

                    <h1 className="text-foreground text-2xl font-bold tracking-tight sm:text-3xl">
                        {title}
                    </h1>
                    {description && (
                        <p className="text-muted-foreground mt-2 text-sm">
                            {description}
                        </p>
                    )}
                </div>

                {/* Form card container */}
                <div className="relative">{children}</div>

                {/* Back to Home footer */}
                <div className="text-muted-foreground text-center text-xs">
                    <Link
                        href="/"
                        className="hover:text-foreground inline-flex items-center gap-1.5 transition-colors"
                    >
                        <svg
                            className="h-3.5 w-3.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            />
                        </svg>
                        Back to home
                    </Link>
                </div>
            </div>
        </div>
    );
}
