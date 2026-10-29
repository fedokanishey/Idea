import { Link } from '@inertiajs/react';

export type StatusInfo = {
    label: string;
    count: number;
};

type Props = {
    statuses: Record<string, StatusInfo>;
    current: string;
};

export default function IdeaFilters({ statuses = {}, current }: Props) {
    const baseItemClass =
        'px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-all duration-150 inline-flex items-center justify-center gap-2';
    const activeItemClass =
        'bg-primary text-primary-foreground shadow-sm font-semibold';
    const inactiveItemClass =
        'text-muted-foreground hover:text-foreground hover:bg-muted/70';

    const getBadgeClass = (isActive: boolean) =>
        `inline-flex items-center justify-center px-1.5 py-0.5 text-[11px] font-semibold rounded-full ${
            isActive
                ? 'bg-primary-foreground/20 text-primary-foreground'
                : 'bg-muted text-muted-foreground'
        }`;

    return (
        <div className="mb-6 flex flex-wrap items-center gap-1.5 p-1 rounded-lg border border-border bg-muted/30 w-fit">
            {Object.entries(statuses).map(([value, { label, count }]) => {
                const isActive = value === current;
                const href =
                    value === 'all'
                        ? '/ideas'
                        : `/ideas?status=${encodeURIComponent(value)}`;

                return (
                    <Link
                        key={value}
                        href={href}
                        className={`${baseItemClass} ${
                            isActive ? activeItemClass : inactiveItemClass
                        }`}
                    >
                        <span>{label}</span>
                        <span className={getBadgeClass(isActive)}>{count}</span>
                    </Link>
                );
            })}
        </div>
    );
}
