import Link from 'next/link';
import styles from '../../styles/Home.module.css';

const Comp1 = () => {
  return (
    <div>
      <h2>Component 1</h2>
      <p>This is the content of Component 1.</p>
      <Link className={styles.link} href="/">
        Back
      </Link>
    </div>
  );
};

export default Comp1;
