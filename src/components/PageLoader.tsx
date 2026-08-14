import { Link } from 'react-router-dom'

import type { Status } from '../models/Status'

import Spinner from './Spinner'

interface PageLoaderProps {
  status: Status
}
const PageLoader = ({ status }: PageLoaderProps) => {
  const renderContent = () => {
    switch (status) {
      case 'loading':
        return <Spinner />
      case 'empty':
        return <div className="min-h-screen text-center text-2xl">Aucune donnée n'est disponible</div>
      case 'error':
        return (
          <div>
            <p className="mb-5">
              <Link to="/">&lt; Retour à la page d'accueil</Link>
            </p>
            <div className="min-h-screen text-center text-2xl">Une erreur s'est produite</div>
          </div>
        )
    }
  }

  return (
    <div>
      {renderContent()}
    </div>
  )
}

export default PageLoader
