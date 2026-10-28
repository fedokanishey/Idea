import { Head } from '@inertiajs/react';
import IdeaCard from '@/components/ui/ideaCard';
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
}

export default function Ideas({ ideas }: Props) {
    return (
        <>
            <AppLayout>
                <Head title="Ideas" />
                <div className="max-w-4xl mx-auto py-10 px-4 ">
                    <h1 className="text-3xl font-bold mb-6">Ideas</h1>
                    {ideas.length === 0 ? (
                        <p className="text-gray-500">No ideas yet.</p>
                    ) : (
                        <IdeaCard ideas={ideas} />
                    )}
                </div>
            </AppLayout>
        </>
    );
}
