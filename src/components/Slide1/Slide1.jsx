import React from 'react'
import styles from './Slide1.module.css'
import slide1BtnIcon from './img/slide1_btn_arrow.png'
import layer7 from './img/Layer7.png'
import layer5 from './img/Layer5.png'
import layer4copy2 from './img/Layer4copy2.png'
import pinkSperm1 from './img/pink_sperm_1.png'
import layer8 from './img/Layer8.png'
import bakti1 from './img/bakti_1.png'
import pinkSperm from './img/pink_sperm.png'
import layer4 from './img/Layer4.png'
import layer4copy from './img/Layer4copy.png'


const Slide1 = (props) => {

    const btnClick = (e) => {
        e.preventDefault();
        props.slideToRight()
    }

    return (
        <div className={styles.slide_1}>
            <h2 className={styles.slide_1_hello}>Привет, </h2>
            <h1 className={styles.slide_1_title}>это <span className={styles.slide_1_not}>не</span><br /> коммерческое<br /> задание
                <button onClick={btnClick} className={styles.slide_1_btn}><img className={styles.slide_1_btn_icon} src={slide1BtnIcon} alt="arrow" />Что дальше?</button>
            </h1>
            <img className={styles.layer7} src={layer7} alt="" />
            <img className={styles.layer5} src={layer5} alt="" />
            <img className={styles.layer4copy2} src={layer4copy2} alt="" />
            <img className={styles.pinkSperm1} src={pinkSperm1} alt="" />
            <img className={styles.layer8} src={layer8} alt="" />
            <img className={styles.bakti1} src={bakti1} alt="" />
            <img className={styles.pinkSperm} src={pinkSperm} alt="" />
            <img className={styles.layer4} src={layer4} alt="" />
            <img className={styles.layer4copy} src={layer4copy} alt="" />
        </div>
    )
}

export default Slide1