import { Head, usePage } from '@inertiajs/react';
import { AppLayout } from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Auth } from '@/types/auth';

export default function Welcome() {
    const page = usePage<{ auth?: Auth }>();
    const user = page.props.auth?.user;

    const mockSteps = [
        { id: 1, title: 'Define core problem & target persona', done: true },
        { id: 2, title: 'Design database schema & user flow', done: true },
        { id: 3, title: 'Scaffold reusable UI components & auth', done: true },
        { id: 4, title: 'Connect backend validation & tests', done: false },
    ];

    return (
        <AppLayout>
            <Head title="IdeaFlow - Structured Idea Execution" />

            {/* Hero Section */}
            <section className="relative overflow-hidden py-16 sm:py-24 lg:py-28">
                {/* Ambient glow effect */}
                <div
                    className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
                    aria-hidden="true"
                >
                    <div className="bg-primary/10 h-[400px] w-[600px] rounded-full blur-[130px]" />
                </div>

                <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <div className="mb-6 inline-flex items-center gap-2">
                        <Badge variant="primary">
                            <span className="bg-primary h-1.5 w-1.5 animate-pulse rounded-full" />
                            Next Generation Idea Workspace
                        </Badge>
                    </div>

                    <h1 className="mx-auto max-w-4xl text-4xl leading-tight font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
                        Turn raw ideas into{' '}
                        <span className="text-primary decoration-primary/40 underline underline-offset-8">
                            structured action.
                        </span>
                    </h1>

                    <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg">
                        A focused, distraction-free platform for planning,
                        breaking down, and executing projects step by step.
                        Designed with clarity and precision.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                        {user ? (
                            <Button
                                href="/users"
                                variant="primary"
                                size="lg"
                                className="shadow-primary/20 shadow-lg"
                            >
                                Open Your Workspace
                            </Button>
                        ) : (
                            <>
                                <Button
                                    href="/register"
                                    variant="primary"
                                    size="lg"
                                    className="shadow-primary/20 shadow-lg"
                                >
                                    Start Building Free
                                </Button>
                                <Button
                                    href="#features"
                                    variant="outlined"
                                    size="lg"
                                >
                                    Explore Features
                                </Button>
                            </>
                        )}
                    </div>

                    {/* Interactive Mock Preview Card */}
                    <div className="mx-auto mt-16 max-w-3xl text-left">
                        <Card className="border-border/80 bg-card/80 overflow-hidden shadow-2xl backdrop-blur-md">
                            <div className="border-border/70 bg-background/50 flex items-center justify-between border-b px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <span className="h-3 w-3 rounded-full bg-red-500/80" />
                                    <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                                    <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                                    <span className="text-muted-foreground ml-2 font-mono text-xs">
                                        idea://launch-saas-platform
                                    </span>
                                </div>
                                <Badge variant="primary">
                                    In Progress (75%)
                                </Badge>
                            </div>

                            <CardHeader className="pb-3">
                                <CardTitle className="text-xl">
                                    Modern Web SaaS Application
                                </CardTitle>
                                <CardDescription>
                                    High-performance project with Laravel,
                                    Inertia, and custom Tailwind tokens.
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <div className="bg-background border-border h-2 w-full overflow-hidden rounded-full border">
                                    <div
                                        className="bg-primary h-full rounded-full transition-all duration-500"
                                        style={{ width: '75%' }}
                                    />
                                </div>

                                <div className="space-y-2 pt-2">
                                    <p className="text-muted-foreground font-mono text-xs tracking-wider uppercase">
                                        Milestone Steps
                                    </p>
                                    <div className="space-y-2">
                                        {mockSteps.map((step) => (
                                            <div
                                                key={step.id}
                                                className="border-border/50 bg-background/60 hover:border-primary/40 flex items-center justify-between rounded-lg border px-4 py-2.5 transition-colors"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <span
                                                        className={`flex h-5 w-5 items-center justify-center rounded-md border ${
                                                            step.done
                                                                ? 'border-primary bg-primary text-primary-foreground'
                                                                : 'border-border bg-card'
                                                        }`}
                                                    >
                                                        {step.done && (
                                                            <svg
                                                                className="h-3.5 w-3.5"
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                        )}
                                                    </span>
                                                    <span
                                                        className={`text-sm ${
                                                            step.done
                                                                ? 'text-muted-foreground line-through'
                                                                : 'text-foreground font-medium'
                                                        }`}
                                                    >
                                                        {step.title}
                                                    </span>
                                                </div>
                                                <span className="text-muted-foreground text-xs">
                                                    {step.done
                                                        ? 'Done'
                                                        : 'Pending'}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section
                id="features"
                className="border-border/60 bg-card/30 border-t py-20"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto mb-16 max-w-2xl text-center">
                        <Badge variant="outline" className="mb-3">
                            Features
                        </Badge>
                        <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
                            Engineered for speed, focus, and clarity
                        </h2>
                        <p className="text-muted-foreground mt-3 text-sm sm:text-base">
                            Built with a coherent design system to keep you
                            focused on what matters most: shipping ideas.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        <Card className="hover:border-primary/50 transition-colors">
                            <CardHeader>
                                <div className="bg-primary/10 text-primary mb-2 flex h-10 w-10 items-center justify-center rounded-xl">
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                        />
                                    </svg>
                                </div>
                                <CardTitle>Instant Capture</CardTitle>
                                <CardDescription>
                                    Log inspiration the second it hits. No
                                    nested folders or complicated setup.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="hover:border-primary/50 transition-colors">
                            <CardHeader>
                                <div className="bg-primary/10 text-primary mb-2 flex h-10 w-10 items-center justify-center rounded-xl">
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                                        />
                                    </svg>
                                </div>
                                <CardTitle>Step-by-Step Progress</CardTitle>
                                <CardDescription>
                                    Break intimidating goals into digestible
                                    milestones with measurable progress.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="hover:border-primary/50 transition-colors">
                            <CardHeader>
                                <div className="bg-primary/10 text-primary mb-2 flex h-10 w-10 items-center justify-center rounded-xl">
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                                        />
                                    </svg>
                                </div>
                                <CardTitle>Cohesive Design System</CardTitle>
                                <CardDescription>
                                    Native tokens for dark mode, accessible
                                    inputs, and polished button interactions.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Workflow Section */}
            <section id="workflow" className="py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto mb-16 max-w-2xl text-center">
                        <Badge variant="outline" className="mb-3">
                            Workflow
                        </Badge>
                        <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
                            How it works in three steps
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <div className="border-border bg-card/50 flex flex-col items-center rounded-2xl border p-6 text-center">
                            <span className="bg-primary/10 text-primary mb-4 flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-bold">
                                01
                            </span>
                            <h3 className="text-foreground mb-2 text-lg font-semibold">
                                Record Idea
                            </h3>
                            <p className="text-muted-foreground text-sm">
                                Document your vision, goals, and key
                                deliverables with clean typography.
                            </p>
                        </div>

                        <div className="border-border bg-card/50 flex flex-col items-center rounded-2xl border p-6 text-center">
                            <span className="bg-primary/10 text-primary mb-4 flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-bold">
                                02
                            </span>
                            <h3 className="text-foreground mb-2 text-lg font-semibold">
                                Generate Steps
                            </h3>
                            <p className="text-muted-foreground text-sm">
                                Divide the journey into atomic phases so you
                                always know what to work on next.
                            </p>
                        </div>

                        <div className="border-border bg-card/50 flex flex-col items-center rounded-2xl border p-6 text-center">
                            <span className="bg-primary/10 text-primary mb-4 flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-bold">
                                03
                            </span>
                            <h3 className="text-foreground mb-2 text-lg font-semibold">
                                Track & Ship
                            </h3>
                            <p className="text-muted-foreground text-sm">
                                Mark milestones as completed and celebrate
                                tangible progress as your product comes alive.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA Banner */}
            <section className="border-border/60 border-t py-16 sm:py-20">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <Card className="border-primary/30 from-card to-card/60 relative overflow-hidden bg-gradient-to-b p-8 text-center shadow-xl sm:p-12">
                        <div
                            className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-40"
                            aria-hidden="true"
                        >
                            <div className="bg-primary/20 h-48 w-80 rounded-full blur-3xl" />
                        </div>

                        <h2 className="text-foreground text-2xl font-bold tracking-tight sm:text-3xl">
                            Ready to organize your next big idea?
                        </h2>
                        <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-sm sm:text-base">
                            Join today and experience a clean, focused
                            environment tailored to your execution workflow.
                        </p>
                        <div className="mt-6 flex justify-center gap-3">
                            <Button
                                href="/register"
                                variant="primary"
                                size="lg"
                                className="shadow-primary/20 shadow-lg"
                            >
                                Create Free Account
                            </Button>
                        </div>
                    </Card>
                </div>
            </section>
        </AppLayout>
    );
}
