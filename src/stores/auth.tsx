import { UserContext } from '@/types'
import { createContext, useState } from 'react'

export const AuthContext = createContext<any | null>(null)

const initUserCtx: UserContext = {
  uid: '',
  logged: false,
  user: '',
  errorMessage: null
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(initUserCtx)

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}
