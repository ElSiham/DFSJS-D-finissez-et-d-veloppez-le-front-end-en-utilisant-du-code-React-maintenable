import type { Status } from '../models/Status'

interface PageLoaderProps {
  status: Status
}
const PageLoader = ({ status }: PageLoaderProps) => {
  return (
    <div>
      {status === 'loading' ?
        <span>Chargement...</span> :
        <span>Erreur</span>
      }
    </div>
  )
}

export default PageLoader
