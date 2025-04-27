"use client";

import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '@/graphql/mutations';
import { useRouter } from 'next/navigation';
import AuthForm from '@/components/user/AuthForm';

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState('');
  
  const [login, { loading }] = useMutation(LOGIN, {
    onCompleted: () => {
      router.push('/dashboard');
    },
    onError: (error) => {
      setError(error.message);
    },
  });
  
  const handleSubmit = (data: any) => {
    login({
      variables: {
        email: data.email,
        password: data.password,
      },
    });
  };
  
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
      <h1 className="text-2xl font-bold text-center mb-6">Login to Your Account</h1>
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}
      
      <AuthForm type="login" onSubmit={handleSubmit} isSubmitting={loading} />
    </div>
  );
}
