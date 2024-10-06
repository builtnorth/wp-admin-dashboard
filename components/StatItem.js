function StatItem({ title, description, icon, statNumber }) {
    return (
        <div className="dashboard-stat">
            {title && <h3 className="dashboard-stat__title">{title}</h3>}

            <p className="dashboard-stat__number">{statNumber}</p>

            {description && (
                <p className="dashboard-stat__description">{description}</p>
            )}
        </div>
    );
}

export { StatItem };
