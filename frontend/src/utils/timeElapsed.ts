export function timeElapsedSince(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();

  const timeDifference = now.getTime() - date.getTime();
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days} days ago`;
  } else if (hours > 0) {
    return `${hours} hrs ago`;
  } else if (minutes > 0) {
    return `${minutes} mins ago`;
  } else {
    return `Just now`;
  }
}
