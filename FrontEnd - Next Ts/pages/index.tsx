import styles from '@/styles/pages/Home.module.scss';
import HeaderMeta from '@/AppComponents/Logic/Meta/Header.meta';
import NavbarLanding from '@/AppComponents/UI/Navigations/NavbarLanding';
import SliderLanding from '@/AppComponents/Logic/LogicUi/Sliders/Slider.Landing';
import FooterLanding from '@/AppComponents/UI/Navigations/FooterLanding';
<<<<<<< HEAD
<<<<<<< HEAD
import Image from 'next/image';
import DetailsStats from '@/public/Masks/DetailsStats.svg';
import { useRouter } from 'next/router';



export default function Home() {
  const Router = useRouter()

  const Download = async() => {
    Router.push('http://localhost:4000/api/app/latest')
  }

=======

export default function Home() {
>>>>>>> parent of 6b3b361 (Fixed and create Download App latest version)
=======

export default function Home() {
>>>>>>> parent of 6b3b361 (Fixed and create Download App latest version)
  return (
    <>
      <HeaderMeta title_description='Лендинг' description='' />
      <main className={styles.Wrapper}>
<<<<<<< HEAD
<<<<<<< HEAD
        <NavbarLanding DownloadFun={Download} />
=======
        <NavbarLanding />
>>>>>>> parent of 6b3b361 (Fixed and create Download App latest version)
=======
        <NavbarLanding />
>>>>>>> parent of 6b3b361 (Fixed and create Download App latest version)
        <div className={styles.WallpaperTop}>
          <div className={styles.WallpaperContent}>
            <h1 className={styles.WallContentHeader}>
              Соревновательные матчи и турниры
            </h1>
            <div className={styles.WallContent}>
              <a className={styles.WallContentText}>
                Задача организации, в особенности же новая модель организационной
                деятельности позволяет оценить значение позиций, занимаемых
                участниками в отношении поставленных задач. 
              </a>
            </div>
            <div className={styles.WallButtons}>
              <div className={styles.WallButtns}>
<<<<<<< HEAD
<<<<<<< HEAD
                <div id='MacOS' onClick={Download} className={styles.WallButton}>
=======
                <div className={styles.WallButton}>
>>>>>>> parent of 6b3b361 (Fixed and create Download App latest version)
=======
                <div className={styles.WallButton}>
>>>>>>> parent of 6b3b361 (Fixed and create Download App latest version)
                  <a>Скачать на Mac</a>
                  <svg width="23" height="25" viewBox="0 0 23 25" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.5559 19.3972C21.1834 20.2425 20.7232 21.0486 20.1824 21.8029C19.4601 22.8073 18.8669 23.5014 18.4122 23.8877C17.706 24.5189 16.9473 24.8437 16.1361 24.862C15.555 24.862 14.8528 24.7009 14.035 24.3736C13.2144 24.0475 12.4611 23.8877 11.771 23.8877C11.0487 23.8877 10.2739 24.0475 9.44389 24.3736C8.61526 24.7009 7.94536 24.8725 7.43285 24.8882C6.65668 24.9209 5.88051 24.5883 5.10703 23.8877C4.61335 23.4686 3.99592 22.7484 3.25472 21.7295C2.46107 20.6439 1.80866 19.3802 1.29749 17.9436C0.750002 16.3892 0.475586 14.8858 0.475586 13.4296C0.475586 11.7625 0.84551 10.3233 1.5867 9.11847C2.1473 8.17227 2.94876 7.38257 3.91386 6.82543C4.86553 6.26974 5.95192 5.97054 7.06158 5.9585C7.68036 5.9585 8.4915 6.14446 9.49635 6.51114C10.5012 6.87782 11.1469 7.06377 11.428 7.06377C11.6406 7.06377 12.3549 6.84508 13.5709 6.41161C14.7183 6.00958 15.6869 5.84326 16.4805 5.90874C18.6328 6.07767 20.2484 6.9027 21.3232 8.39036C19.3995 9.52575 18.4485 11.1142 18.4673 13.1532C18.4835 14.7417 19.0767 16.0631 20.2389 17.112C20.7528 17.5907 21.3523 17.9738 22.0078 18.2422C21.8653 18.6442 21.7146 19.0279 21.5559 19.3972ZM16.6231 0.498943C16.6231 1.74303 16.155 2.90592 15.2255 3.98107C14.1009 5.2592 12.7423 5.9991 11.2693 5.88255C11.25 5.72611 11.2406 5.56867 11.241 5.41111C11.241 4.21548 11.7737 2.93735 12.7248 1.89101C13.1983 1.36194 13.8009 0.920622 14.5313 0.569659C15.2604 0.223935 15.9492 0.032739 16.5975 0C16.615 0.167624 16.6231 0.333938 16.6231 0.498943Z" fill="#FAC704"/>
                  </svg>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
                <div id='Windows' onClick={Download} className={styles.WallButton}>
=======
                <div className={styles.WallButton}>
>>>>>>> parent of 6b3b361 (Fixed and create Download App latest version)
=======
                <div className={styles.WallButton}>
>>>>>>> parent of 6b3b361 (Fixed and create Download App latest version)
                  <a>Скачать на Windows</a>
                  <svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.238281 4.30717L10.4541 2.92013L10.4596 12.7443L0.248001 12.8025L0.238281 4.30717ZM10.4499 13.8767L10.4582 23.7092L0.246613 22.3097V13.8102L10.4499 13.8767ZM11.6885 2.73879L25.2341 0.767578V12.6197L11.6885 12.7263V2.73879ZM25.2383 13.9694L25.2341 25.7676L11.6885 23.86L11.6691 13.9473L25.2383 13.9694Z" fill="#FAC704"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.MainContent}>
          <div className={styles.MainContents}>
            <div className={styles.Carusel}>
              SliderLanding 
            </div>
          </div>
          <FooterLanding DownloadFun={Download} />
        </div>
      </main>
      <style global jsx>{`        
        body::-webkit-scrollbar {
          width: 0;
        }
      `}</style>
    </>
  )
}
