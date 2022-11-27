

const filterList = ['all', 'mine', 'development', 'design', 'marketing', 'sales']

const ProjectFilter = ({ currentFilter, changeFilter }) => {


    const handleClick = (newFilter) => {
        console.log(newFilter)
        changeFilter(newFilter)
    }

    return (
        <div className="project-filter">
            <nav>
                <p>Filter by:</p>
                {filterList.map((f) => (
                    <button
                        onClick={() => handleClick(f)}
                        key={f}
                        className={currentFilter === f ? 'active' : ''}
                    >
                        {f}
                    </button>
                ))}
            </nav>
        </div>
    )
}

export default ProjectFilter
