import { useCollection } from '../../hooks/useCollection'
import { useAuthContext } from '../../hooks/useAuthContext'

import './Dashboard.css'

import { useState } from 'react'
import ProjectList from '../../components/projectList/ProjectList'
import ProjectFilter from './ProjectFilter'

const Dashboard = () => {
    const { user } = useAuthContext()
    const { documents, error } = useCollection('projects')
    const [currentFilter, setCurrentFilter] = useState('all')

    const changeFilter = (newFilter) => {
        setCurrentFilter(newFilter)
    }

    const projects = documents ? documents.filter((document) => {
        switch (currentFilter) {
            case 'all':
                return true
            case 'mine':
                let assignedToMe = false
                document.assignedUsersList.forEach((u) => {
                    if (user.uid === u.id) {
                        assignedToMe = true
                    }
                })
                return assignedToMe
            case 'development':
            case 'design':
            case 'marketing':
            case 'sales':
                console.log(document.category, currentFilter)
                return document.category === currentFilter
            default:
                return true
        }
    }) : null

    return (
        <div>
            <h2 className='page-title'>Projects</h2>
            {error && <p className='error'></p>}
            {documents && <ProjectFilter changeFilter={changeFilter} currentFilter={currentFilter} />}
            {projects && <ProjectList projects={projects} />}
        </div>
    )
}

export default Dashboard
