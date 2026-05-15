import { httpClient } from '../../../services/httpClient'
import type { AuthUser } from '../../../services/tokenManager'

export interface LoginPayload {
  email: string
  password: string
}

export interface LoginResponse {
  access_token: string
  user: AuthUser
}

export async function loginUser(payload: LoginPayload): Promise<LoginResponse> {
  const { data } = await httpClient.post<LoginResponse>('/auth/login', payload)
  return data
}
