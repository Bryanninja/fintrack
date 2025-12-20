import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import { toast } from 'sonner';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import PasswordInput from '@/components/ui/password-input';
import { AuthContext } from '@/contexts/auth';
import { api } from '@/lib/axios';

const loginSchema = z.object({
  email: z
    .string()
    .email({
      message: 'O E-mail é inválido!',
    })
    .trim()
    .min(1, {
      message: 'O E-mail é obrigátorio!',
    }),
  password: z.string().min(6, {
    message: 'A senha deve conter no minimo 6 caracteres',
  }),
});

const LoginPage = () => {
  const { user: userTest } = useContext(AuthContext);

  const [user, setUser] = useState(null);

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  useEffect(() => {
    const init = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');
        if (!accessToken && !refreshToken) return;
        const response = await api.get('/users/me', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        console.log(error);
      }
    };
    init();
  }, []);

  const loginMutation = useMutation({
    mutationKey: ['login'],
    mutationFn: async (variables) => {
      const response = await api.post('/users/login', {
        email: variables.email,
        password: variables.password,
      });
      return response.data;
    },
  });

  if (user) {
    return <h1>Olá, {user.first_name}</h1>;
  }

  const handleLogin = (data) => {
    loginMutation.mutate(data, {
      onSuccess: (loggedUser) => {
        const accessToken = loggedUser.tokens.accessToken;
        const refreshToken = loggedUser.tokens.refreshToken;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        toast.success('Login realizado com sucesso!');
        setUser(loggedUser);
      },
      onError: () => {
        toast.error('Erro ao fazer login, tente novamente mais tarde');
      },
    });
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-3">
      <h1>{userTest}</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleLogin)}>
          <Card className="w-[500px]">
            <CardHeader>
              <CardTitle className="text-center">Entre na sua conta</CardTitle>
              <CardDescription className="text-center">
                Insira seus dados abaixo.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Campo E-MAIL */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu E-mail" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Campo SENHA */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <PasswordInput {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button
                type="submit"
                className="w-full"
                disabled={loginMutation.isPending}
              >
                Login
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>

      <div className="flex items-center justify-center">
        <p className="text-center opacity-50">Ainda não possui uma conta?</p>
        <Button variant="link" asChild>
          <Link to="/signup">Registre-se</Link>
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
