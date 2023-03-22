import { GetIpData } from '@/AppComponents/Logic/Data/GetIpData.data';
import styles from '@/styles/AppComponents/UI/Navigations/LandingNavbar.module.scss';
import { useEffect, useState } from 'react';
import DownloadIcon from '@mui/icons-material/Download';

<<<<<<< HEAD
<<<<<<< HEAD
const NavbarLanding:FC<INavbarLandingNavigate> = ({DownloadFun}) => {
    const Router = useRouter()
=======
const NavbarLanding = () => {
>>>>>>> parent of 6b3b361 (Fixed and create Download App latest version)
=======
const NavbarLanding = () => {
>>>>>>> parent of 6b3b361 (Fixed and create Download App latest version)
    const [IsLangUser, setIsLangUser] = useState("")
    useEffect(() => {
        (async () => {
            const Data = await GetIpData()
            setIsLangUser(Data.country)   
        })()
      }, [])

    return (
        <div className={styles.NavbarLanding}>
            <a className={styles.NavbarLeft}>Для партнёров</a>
            <div className={styles.NavbarRight}>
                <div className={styles.NavbarButtons}>
<<<<<<< HEAD
<<<<<<< HEAD
                    <div onClick={DownloadFun} className={styles.NavbarButtonDownload}>
=======
                    <div className={styles.NavbarButtonDownload}>
>>>>>>> parent of 6b3b361 (Fixed and create Download App latest version)
=======
                    <div className={styles.NavbarButtonDownload}>
>>>>>>> parent of 6b3b361 (Fixed and create Download App latest version)
                        <DownloadIcon className={styles.DownloadIcon} />
                        <a>Cкачать клиент</a>
                    </div>
                    <div className={styles.NavbarButtonCreate}>
                        <a>Создать аккаунт</a>
                    </div>
                </div>
                <div className={styles.NavbarLang}>
                    <a>{IsLangUser}</a>
                </div>
            </div>
        </div>
    );
};

export default NavbarLanding;