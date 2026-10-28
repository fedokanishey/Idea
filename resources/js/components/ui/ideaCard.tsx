import { formatTimeAgo } from '@/utils/formatDate';

interface Idea {
    id: number;
    title: string;
    status:string;
    description?: string;
    created_at: string;
}

interface IdeaCardProps {
    ideas: Idea[];
}


const LabelColors: Record<string, string> = {
    'pending': 'bg-yellow-500/10 text-yellow-500',
    'in_progress': 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    'completed': 'bg-green-500/10 text-green-500 border-green-500/20',
};

const getStatusBadgeClass = (status: string) => {
    const color = LabelColors[status] || 'bg-gray-100 text-gray-700';
    return `inline-block rounded-full border px-2 py-1 text-xs font-medium ${color}`;
};

export default function IdeaCard({ ideas }: IdeaCardProps) {
    return (
        <ul className="grid md:grid-cols-2 gap-6">
            {ideas.map((idea) => (
                <li key={ idea.id } className="p-4 border hight-auto rounded-lg shadow-sm">
                    <a href="#">
                        <h2 className="text-xl font-semibold">{ idea.title }</h2>
                        <div className="mt-2">
                            <span className={getStatusBadgeClass(idea.status)}>{ idea.status }</span>
                        </div>
                        {idea.description && (
                            <p className="text-gray-600 mt-2">{idea.description}</p>
                        )}
                        <div className="text-gray-500 text-sm mt-2">
                            {formatTimeAgo(idea.created_at)}
                        </div>
                    </a>
                </li>
            ) ) }
        </ul>
    );
}
