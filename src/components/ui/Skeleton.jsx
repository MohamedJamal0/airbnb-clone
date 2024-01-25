export default function Skeleton({ style }) {
  const styles = 'bg-gray-200 rounded-md animate-pulse mb-3 ' + style;
  return <div className={styles}></div>;
}
