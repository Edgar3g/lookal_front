import React, { createContext, useEffect, useState } from 'react'
import { IAuthProvider, IContext, IUser } from './types'
import { LoginRequest, getUserLocalStorage, setUserLocalStorage } from './utils'

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>()

  useEffect(() => {
    const user = getUserLocalStorage()

    if (user) {
      setUser(user)
    }
  }, [])

  async function authenticate(email: string, password: string) {
    const response = await LoginRequest(email, password)

    console.log(response)
    const payload = { token: response.access_token, email }

    setUser(payload)
    setUserLocalStorage(payload)
    console.log(payload)
  }

  function logout() {
    setUser(null)
    setUserLocalStorage(null)
  }

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
