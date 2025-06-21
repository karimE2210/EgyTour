'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/lib/validations/auth';
import { signIn } from 'next-auth/react';
import type { z } from 'zod';
import Link from 'next/link';
import { useTranslation } from '@/hooks/use-translation';

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);
  const { t } = useTranslation();
  
  // Get callback URL from search params
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const result = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (result?.error) {
        throw new Error(result.error);
      }

      // Redirect to the callback URL or dashboard
      router.push(callbackUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  const showSignupLink = error && (
    error.includes('Please sign up') || 
    error.includes('created automatically') ||
    error.includes('No user found')
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/mypics/nnn.jpeg)' }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 max-w-md w-full space-y-8 p-8 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {t('auth.login')}
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
              <p className="font-medium">Authentication Error</p>
              <p className="text-sm mt-1">{error}</p>
              {showSignupLink && (
                <div className="mt-3 pt-3 border-t border-red-200">
                  <p className="text-sm text-red-700 mb-2">
                    Don't have an account yet?
                  </p>
                  <Link
                    href={`/signup?callbackUrl=${encodeURIComponent(callbackUrl)}`}
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Create Account
                  </Link>
                </div>
              )}
            </div>
          )}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                {t('auth.email')}
              </label>
              <input
                {...register('email')}
                id="email"
                type="email"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder={t('auth.email')}
              />
              {errors.email?.message && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                {t('auth.password')}
              </label>
              <input
                {...register('password')}
                id="password"
                type="password"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder={t('auth.password')}
              />
              {errors.password?.message && (
                <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? t('auth.signingIn') : t('auth.login')}
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              {t('auth.noAccount')}{' '}
              <Link
                href={`/signup?callbackUrl=${encodeURIComponent(callbackUrl)}`}
                className="font-medium text-primary hover:text-primary/80"
              >
                {t('auth.signup')}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
} 