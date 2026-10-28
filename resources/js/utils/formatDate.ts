import { formatDistanceToNow } from 'date-fns';
import { enUS } from 'date-fns/locale';

export function formatTimeAgo(date?: string | Date | null): string {
    if (!date) return '';

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
        return '';
    }

    return formatDistanceToNow(parsedDate, {
        addSuffix: true,
        locale: enUS,
    });
}
