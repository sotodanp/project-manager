import { useParams } from 'react-router-dom'
import { useDocument } from '../../hooks/useDocument'
import ProjectComment from './ProjectComment'
import './ProjectDetails.css'
import ProjectSummary from './ProjectSummary'

const ProjectDetails = () => {
    const { id } = useParams()
    const { error, document } = useDocument('projects', id)

    if (error) {
        return <div className='error'>{error}</div>
    }
    if (!document) {
        return <div className='loading'>Loading...</div>
    }

    return (
        <div className='project-details'>
            <ProjectSummary project={document} />
            <ProjectComment project={document} />
        </div>
    )
}

export default ProjectDetails
