function Project(props) {

    return (
        <div className="project">
            <img src={props.image} alt={props.name} className="p-image" />
            <h2 className="p-name">{props.name}</h2>

            <div className="p-description">
                {props.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>

            <p>
                <a href={props.githubRepo} className="p-githubRepo">View GitHub Repo</a>
            </p>

            <div className="tech-array-container">
                {Array.isArray(props.techArray) && props.techArray.map(
                    (tech, index) => (
                    <span key={index} className="tech-tag">
                        {tech}
                    </span>
                ))}
            </div>

        </div>
    )
}

export default Project
