<?php

namespace App\Models;

use App\IdeaStatus;
use Database\Factories\IdeaFactory;
use Illuminate\Database\Eloquent\Casts\AsArrayObject;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Idea extends Model
{
    /** @use HasFactory<IdeaFactory> */
    use HasFactory;

    protected $casts = [
        'links' => AsArrayObject::class,
        'status' => IdeaStatus::class,
    ];

    protected $attributes = [
        'status' => IdeaStatus::PENDING->value,
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function steps(): HasMany
    {
        return $this->hasMany(Step::class);
    }

    /**
     * Get ideas count per status for a specific user (or all ideas if no user specified).
     */
    public static function statuses(?User $user = null): \Illuminate\Support\Collection
    {
        $query = $user ? $user->ideas() : static::query();

        $counts = (clone $query)
            ->selectRaw('status, count(*) as count')
            ->groupBy('status')
            ->pluck('count', 'status');

        $totalCount = (clone $query)->count();

        return collect(IdeaStatus::cases())
            ->mapWithKeys(fn(IdeaStatus $status) => [
                $status->value => [
                    'label' => $status->label(),
                    'count' => (int) ($counts[$status->value] ?? 0),
                ],
            ])
            ->prepend([
                'label' => 'All',
                'count' => (int) $totalCount,
            ], 'all');
    }
}
