import { API } from '../../services/api'
import { IUser } from './types'

export function setUserLocalStorage(user: IUser | null) {
  localStorage.setItem('u', JSON.stringify(user))
}

export function getUserLocalStorage() {
  const json = localStorage.getItem('u')

  if (!json) {
    return null
  }

  const user = JSON.parse(json)

  return user ?? null
}

export async function LoginRequest(email: string, password: string) {
  try {
    const request = await API.post('/login', { email, password })

    console.log(request.data)
    return request.data
  } catch (error) {
    return null
  }
}
