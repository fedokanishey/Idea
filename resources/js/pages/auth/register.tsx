import { Head, Link, useForm } from '@inertiajs/react';
import type { FormEventHandler } from 'react';
import { AuthLayout } from '@/layouts/auth-layout';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/register', {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <AuthLayout
            title="Create your account"
            description="Start capturing, structuring, and turning ideas into reality."
        >
            <Head title="Register" />

            <Card className="border-border/80 bg-card/90 shadow-xl backdrop-blur-sm">
                <CardContent className="pt-6">
                    <form onSubmit={submit} className="space-y-4">
                        <Input
                            id="name"
                            name="name"
                            label="Full Name"
                            type="text"
                            placeholder="Alex Morgan"
                            value={data.name}
                            autoComplete="name"
                            autoFocus
                            required
                            error={errors.name}
                            onChange={(e) => setData('name', e.target.value)}
                            leftIcon={
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            }
                        />

                        <Input
                            id="email"
                            name="email"
                            label="Email Address"
                            type="email"
                            placeholder="alex@example.com"
                            value={data.email}
                            autoComplete="username"
                            required
                            error={errors.email}
                            onChange={(e) => setData('email', e.target.value)}
                            leftIcon={
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            }
                        />

                        <Input
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            placeholder="••••••••"
                            value={data.password}
                            autoComplete="new-password"
                            required
                            error={errors.password}
                            onChange={(e) =>
                                setData('password', e.target.value)
                            }
                            hint="Min. 8 characters"
                            leftIcon={
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                    />
                                </svg>
                            }
                        />

                        <Input
                            id="password_confirmation"
                            name="password_confirmation"
                            label="Confirm Password"
                            type="password"
                            placeholder="••••••••"
                            value={data.password_confirmation}
                            autoComplete="new-password"
                            required
                            error={errors.password_confirmation}
                            onChange={(e) =>
                                setData('password_confirmation', e.target.value)
                            }
                            leftIcon={
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                    />
                                </svg>
                            }
                        />

                        <div className="pt-2">
                            <Button
                                type="submit"
                                variant="primary"
                                isLoading={processing}
                                className="shadow-primary/20 h-10 w-full justify-center text-sm font-semibold shadow-md"
                            >
                                Create Account
                            </Button>
                        </div>
                    </form>

                    <div className="border-border text-muted-foreground mt-6 border-t pt-4 text-center text-xs">
                        Already have an account?{' '}
                        <Link
                            href="/login"
                            className="text-foreground hover:text-primary font-medium underline underline-offset-4 transition-colors"
                        >
                            Sign in here
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </AuthLayout>
    );
}
