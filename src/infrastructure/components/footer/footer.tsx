
import styles from './footer.module.css';



export const Footer = () => {
    return (
        <footer className="footer">
            <img
                src="../../../../assets/logo-andry-gota.svg"
                alt="Andry Morales logo"
                width="40px"
            />
            <div className="footer_container">
                <div className="footer_social">
                    <img
                        src="../../../../assets/footer/logo-whatsapp.svg"
                        alt="whatsapp"
                        width="25px"
                        onClick={() =>
                            window.location.assign(
                                'https://wa.me/34653538373?text=Hola,%20me%20gustaria%20reservar%20una%20cita.'
                            )
                        }
                    />

                    <img
                        className={styles.social__icon}
                        src="../../../../assets/footer/logo-insta.svg"
                        alt="instagram"
                        width="25px"
                    />
                    <img
                        className={styles.social__icon}
                        src="../../../../assets/footer/logo-facebook.svg"
                        alt="facebook"
                        width="21px"
                    />
                </div>
                <div className="footer_info">
                    <img
                        src="../../../../assets/footer/visa.png"
                        alt="visa"
                        width="23px"
                    />
                    <img
                        src="../../../../assets/footer/mastercard.png"
                        alt="mastercard"
                        width="23px"
                    />
                    <img
                        src="../../../../assets/footer/location.svg"
                        alt="mastercard"
                        width="23px"
                    />
                    <img
                        src="../../../../assets/footer/email.jpg"
                        alt="mastercard"
                        height="16px"
                    />
                </div>
            </div>
        </footer>
    );
};
