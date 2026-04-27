import apiClient from '../client';
import { AuthResponse, LoginCredentials, RegisterData, User } from '../../types/auth';

export const authApi = {
  login: (credentials: LoginCredentials) =>
    apiClient.post<AuthResponse>('/auth/login', credentials),

  register: (data: RegisterData) =>
    apiClient.post<AuthResponse>('/auth/register', data),

  getMe: () => apiClient.get<User>('/users/me'),
};