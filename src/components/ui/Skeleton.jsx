export default function Skeleton({ style }) {
  const styles = 'bg-gray-200  animate-pulse  ' + style;
  return <div className={styles}></div>;
}
