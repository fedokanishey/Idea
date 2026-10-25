import { Head, Link, useForm } from '@inertiajs/react';
import type { FormEventHandler } from 'react';
import { AuthLayout } from '@/layouts/auth-layout';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/login', {
            onFinish: () => reset('password'),
        });
    };

    return (
        <AuthLayout
            title="Welcome back"
            description="Enter your email and password to access your account."
        >
            <Head title="Sign In" />

            <Card className="border-border/80 bg-card/90 shadow-xl backdrop-blur-sm">
                <CardContent className="pt-6">
                    <form onSubmit={submit} className="space-y-4">
                        <Input
                            id="email"
                            name="email"
                            label="Email Address"
                            type="email"
                            placeholder="alex@example.com"
                            value={data.email}
                            autoComplete="username"
                            autoFocus
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
                            autoComplete="current-password"
                            required
                            error={errors.password}
                            onChange={(e) =>
                                setData('password', e.target.value)
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
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                    />
                                </svg>
                            }
                        />

                        <div className="flex items-center justify-between text-xs">
                            <label className="flex cursor-pointer items-center gap-2 select-none">
                                <input
                                    type="checkbox"
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) =>
                                        setData('remember', e.target.checked)
                                    }
                                    className="border-border bg-card text-primary focus:ring-primary focus:ring-offset-background h-4 w-4 rounded"
                                />
                                <span className="text-muted-foreground">
                                    Remember me
                                </span>
                            </label>
                        </div>

                        <div className="pt-2">
                            <Button
                                type="submit"
                                variant="primary"
                                isLoading={processing}
                                className="shadow-primary/20 h-10 w-full justify-center text-sm font-semibold shadow-md"
                            >
                                Sign In
                            </Button>
                        </div>
                    </form>

                    <div className="border-border text-muted-foreground mt-6 border-t pt-4 text-center text-xs">
                        Don't have an account?{' '}
                        <Link
                            href="/register"
                            className="text-foreground hover:text-primary font-medium underline underline-offset-4 transition-colors"
                        >
                            Create one here
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </AuthLayout>
    );
}
