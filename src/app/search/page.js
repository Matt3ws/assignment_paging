import { Suspense } from 'react';
import ImageSearch from '@/components/search/imageSearch/imageSearch';
import styles from './page.module.css';
const Page = () => {
  return (
    <div className={styles.page}>
      <Suspense>
        <ImageSearch></ImageSearch>
      </Suspense>
    </div>
  );
};
export default Page;
