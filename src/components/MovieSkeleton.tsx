export default function MovieSkeleton() {
  return (
    <div className="movie-card skeleton-card">
      <div className="skeleton-img" />
      <div className="movie-body">
        <div className="skeleton-line title" />
        <div className="skeleton-line meta" />
        <div className="skeleton-actions">
          <div className="skeleton-btn" />
          <div className="skeleton-btn" />
        </div>
      </div>
    </div>
  );
}
