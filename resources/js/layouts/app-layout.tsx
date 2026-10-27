import type { ReactNode } from 'react';
import { usePage } from '@inertiajs/react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Alert } from '@/components/ui/alert';

type Flash = {
    success?: string;
    error?: string;
    warning?: string;
    info?: string;
};

type AppLayoutProps = {
    children: ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
    const { flash } = usePage<{ flash: Flash }>().props;

    return (
        <div className="bg-background text-foreground flex min-h-screen flex-col">
            <Navbar />
            <main className="flex flex-1 flex-col">
                {flash.success && <Alert variant="success">{flash.success}</Alert>}
                {children}
            </main>
            <Footer />
        </div>
    );
}
