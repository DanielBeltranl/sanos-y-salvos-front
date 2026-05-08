import { useParams, useNavigate } from 'react-router'

export type ValidUserType = 'persona' | 'clinica' | 'refugio'

const VALID_TYPES: ValidUserType[] = ['persona', 'clinica', 'refugio']

export const useRegisterController = () => {
  const { userType } = useParams<{ userType: string }>()
  const navigate = useNavigate()

  const resolvedType: ValidUserType = VALID_TYPES.includes(userType as ValidUserType)
    ? (userType as ValidUserType)
    : 'persona'

  const onSubmit = (data: unknown) => {
    // Aquí se integrará el llamado a la API de registro
    console.log('Datos de registro:', data)
  }

  const goBack = () => navigate('/')

  return { userType: resolvedType, onSubmit, goBack }
}
