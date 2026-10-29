import { Head } from '@inertiajs/react';
import IdeaCard from '@/components/ui/ideaCard';
import IdeaFilter, { StatusInfo } from '@/components/ui/ideaFilter';
import { AppLayout } from '@/layouts/app-layout';

interface Idea {
    id: number;
    title: string;
    status: string;
    description?: string;
    created_at: string;
}

interface Props {
    ideas: Idea[];
    statuses: Record<string, StatusInfo>;
    current: string;
}

export default function Ideas({
    ideas,
    statuses = {},
    current = 'all',
}: Props) {
    return (
        <>
            <AppLayout>
                <Head title="Ideas" />
                <div className="w-full max-w-5xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                        <h1 className="text-3xl font-bold tracking-tight">Ideas</h1>
                    </div>

                    <IdeaFilter
                        statuses={statuses}
                        current={current}
                    />

                    {ideas.length === 0 ? (
                        <div className="rounded-xl border border-dashed border-border p-12 text-center my-6">
                            <p className="text-muted-foreground text-sm sm:text-base">
                                No ideas found for this status.
                            </p>
                        </div>
                    ) : (
                        <IdeaCard ideas={ideas} />
                    )}
                </div>
            </AppLayout>
        </>
    );
}
