import { protectedApi, publicApi } from '@/lib/axios';

export const UserService = {
  /**
   * Cria um novo usuário
   * @param {Object} input - Usuário a ser criado.
   * @param {string} input.firstName - Primeiro nome do usuário.
   * @param {string} input.lastName - Sobrenome
   * @param {string} input.email - E-mail
   * @param {string} input.password - Senha
   * @returns {Object} Usuário criado
   * @returns {string} response.tokens - tokens de autenticação
   */

  signup: async (input) => {
    const response = await publicApi.post('/users', {
      first_name: input.firstName,
      last_name: input.lastName,
      email: input.email,
      password: input.password,
    });

    return {
      id: response.data.id,
      email: response.data.email,
      firstName: response.data.first_name,
      lastName: response.data.last_name,
      tokens: response.data.tokens,
    };
  },

  /**
   * Login do usuário
   * @param {Object} input - Usuário a logar.
   * @param {string} input.email - E-mail
   * @param {string} input.password - Senha
   * @returns {Object} Usuário autenticado
   * @returns {string} response.tokens - tokens de autenticação
   */

  login: async (input) => {
    const response = await publicApi.post('/users/login', {
      email: input.email,
      password: input.password,
    });

    return {
      id: response.data.id,
      email: response.data.email,
      firstName: response.data.first_name,
      lastName: response.data.last_name,
      tokens: response.data.tokens,
    };
  },

  /**
   * retorna o usuário autenticado
   * @returns {Object} Usuário autenticado
   */

  me: async () => {
    const response = await protectedApi.get('/users/me');
    return {
      id: response.data.id,
      email: response.data.email,
      firstName: response.data.first_name,
      lastName: response.data.last_name,
    };
  },

  /**
   * Retornar o balanço do usuário autenticado
   * @param {Object} input - Buscar dados financeiros.
   * @param {string} input.from - Data Inicial (yyyy-MM-dd)
   * @param {string} input.to - Data final (yyyy-MM-dd)
   */
  getBalance: async (input) => {
    const queryParams = new URLSearchParams();
    queryParams.set('from', input.from);
    queryParams.set('to', input.to);
    const response = await protectedApi.get(
      `/users/me/balance?${queryParams.toString()}`
    );
    return response.data;
  },
};
