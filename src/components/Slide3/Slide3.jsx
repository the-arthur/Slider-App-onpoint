import React, { useState, useRef } from 'react'
import { useOnClickOutside } from '../../hooks/useOnClickOutside.js'
import styles from './Slide3.module.css'
import icon1 from './img/icon1.png'
import icon2 from './img/icon2.png'
import btnIcon from './img/slide3_btn_plus.png'
import btnClose from './img/btn_close.png'
import btnPrev from './img/btn_prev.png'
import btnNext from './img/btn_next.png'
import bottle from './img/bottle.png'
import bubble1 from './img/1.png'
import bubble2 from './img/2.png'
import bubble3 from './img/3.png'
import bubble4 from './img/4.png'
import bubble5 from './img/5.png'
import bubble6 from './img/6.png'
import bubble7 from './img/7.png'
import bubble8 from './img/8.png'

const Slide3 = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const [popUpDisplay, setPopUpDisplay] = useState(false);

    const popUpShow = () => {
        setPopUpDisplay(true)
    }

    const popUpHide = () => {
        setPopUpDisplay(false)
    }

    const nextPage = () => {
        setCurrentPage(2);
    }
    const prevPage = () => {
        setCurrentPage(1);
    }

    const ref = useRef();

    useOnClickOutside(ref, () => setPopUpDisplay(false));

    return (
        <div className={styles.slide_3} >
            <h2 className={styles.slide_3_title}>{`${popUpDisplay ? "Преимущества " : "Ключевое сообщение"}`}</h2>
            <span className={styles.slide_3_label}>brend<b>xy</b></span>
            <div className={styles.slide_3_container}>
                <div className={styles.slide_3_card1}>
                    <img src={icon2} className={styles.slide_3_card_icon} alt="" />
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda corrupti, quasi, eos </span>
                </div>
                <div className={styles.slide_3_card2_container}>
                    <div className={styles.slide_3_card2}>
                        <img src={icon1} className={styles.slide_3_card_icon} alt="" />
                        <span>Lorem ipsum dolor</span>
                    </div>
                    <button className={styles.slide_3_btn} onClick={popUpShow}><img src={btnIcon} className={styles.slide_3_btn_icon} alt="" />Подробнее</button>
                </div>
            </div>
            <div className={`${styles.slide_3_popup_background} ${popUpDisplay ? styles.slide_3_popup_background_active : ''}`} >
                <div ref={ref} className={styles.slide_3_popup} >
                    <img className={styles.slide_3_popup_btn_close} onClick={popUpHide} src={btnClose} alt="" />
                    <div>
                        <ul className={styles.slide_3_popup_ul} style={{ display: `${currentPage == 2 ? 'none' : 'unset'}` }}>
                            <li>
                                <span className={styles.slide_3_popup_li_label}>01</span>
                                <p className={styles.slide_3_popup_li_text}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </p>
                            </li>
                            <li>
                                <span className={styles.slide_3_popup_li_label}>02</span>
                                <p className={styles.slide_3_popup_li_text}>
                                    Faucibus pulvinar elementum integer enim
                                </p>
                            </li>
                            <li>
                                <span className={styles.slide_3_popup_li_label}>03</span>
                                <p className={styles.slide_3_popup_li_text}>
                                    Faucibus pulvinar elementum integer enim
                                </p>
                            </li>
                        </ul>
                        <ul className={styles.slide_3_popup_ul} style={{ display: `${currentPage == 1 ? 'none' : 'unset'}` }}>
                            <li>
                                <span className={styles.slide_3_popup_li_label}>04</span>
                                <p className={styles.slide_3_popup_li_text}>
                                    Mi bibendum neque egestas congue quisque egestas diam
                                </p>
                            </li>
                            <li>
                                <span className={styles.slide_3_popup_li_label}>05</span>
                                <p className={styles.slide_3_popup_li_text}>
                                    Venenatis lectus magna fringilla urna
                                </p>
                            </li>
                            <li>
                                <span className={styles.slide_3_popup_li_label}>06</span>
                                <p className={styles.slide_3_popup_li_text}>
                                    Venenatis lectus magna fringilla urna
                                </p>
                            </li>
                        </ul>
                        <div className={styles.slide_3_popup_pagination}>
                            <img className={styles.slide_3_popup_btn_prev} onClick={prevPage} src={btnPrev} alt="" />
                            <span className={styles.slide_3_popup_dot} style={{ background: `${currentPage == 1 ? '#ff6a9f' : 'none'}` }} ></span>
                            <span className={styles.slide_3_popup_dot} style={{ background: `${currentPage == 2 ? '#ff6a9f' : 'none'}` }}></span>
                            <img className={styles.slide_3_popup_btn_next} onClick={nextPage} src={btnNext} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <img className={styles.slide_3_bottle} src={bottle} alt="" />
            <img className={styles.slide_3_bubble1} src={bubble1} alt="" />
            <img className={styles.slide_3_bubble2} src={bubble2} alt="" />
            <img className={styles.slide_3_bubble3} src={bubble3} alt="" />
            <img className={styles.slide_3_bubble4} src={bubble4} alt="" />
            <img className={styles.slide_3_bubble5} src={bubble5} alt="" />
            <img className={styles.slide_3_bubble6} src={bubble6} alt="" />
            <img className={styles.slide_3_bubble7} src={bubble7} alt="" />
            <img className={styles.slide_3_bubble8} src={bubble8} alt="" />
        </div>
    )
}

export default Slide3