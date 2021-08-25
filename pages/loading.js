import Loader from '../components/Loader';
import styles from '../styles/layout.module.css';

export default function Loading() {
  return (
    <div className={styles.container}>
      <main>
        <Loader width={500} height={500} />
      </main>
    </div>
  );
}
