import { Link } from '@inertiajs/react';

export function Footer() {
    return (
        <footer className="border-border bg-card/40 text-muted-foreground border-t">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    <div className="flex items-center gap-3">
                        <span className="bg-primary text-primary-foreground flex h-7 w-7 items-center justify-center rounded-lg text-xs font-bold">
                            IF
                        </span>
                        <span className="text-foreground text-sm font-semibold">
                            IdeaFlow
                        </span>
                        <span className="text-muted-foreground text-xs">
                            &copy; {new Date().getFullYear()} All rights
                            reserved.
                        </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 text-xs">
                        <Link
                            href="/"
                            className="hover:text-foreground transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="/register"
                            className="hover:text-foreground transition-colors"
                        >
                            Register
                        </Link>
                        <a
                            href="https://laravel.com"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-foreground transition-colors"
                        >
                            Laravel
                        </a>
                        <a
                            href="https://inertiajs.com"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-foreground transition-colors"
                        >
                            Inertia
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
