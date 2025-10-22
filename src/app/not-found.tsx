import Link from 'next/link';
import styles from './not-found.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.alert}>
        <h2 className={styles.alertHeading}>404</h2>
        <p className={styles.alertText}>
          <strong>Страница не найдена!</strong> 
          Запрашиваемый ресурс не существует или был перемещен.
        </p>
        <Link 
          href="/"
          className={`bg-linear-to-tr from-pink-500 to-yellow-500 text-white shadow-lg 
          rounded-full px-6 py-3 text-lg`}
        >
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
