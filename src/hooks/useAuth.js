import { useContext } from 'react'
import { AuthContext } from '../HOC/AuthProvider'

export const useAuth = () => useContext(AuthContext)
