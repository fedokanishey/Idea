import type { ReactNode } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

type AppLayoutProps = {
    children: ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
    return (
        <div className="bg-background text-foreground flex min-h-screen flex-col">
            <Navbar />
            <main className="flex flex-1 flex-col">{children}</main>
            <Footer />
        </div>
    );
}
