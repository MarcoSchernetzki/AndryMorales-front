import { useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { useAppointments } from '../../wishes/hook/use.appointments';
import './home.page.css';
import 'keen-slider/keen-slider.min.css';
import {
    DataComentType,
    dataCertificate,
    dataComent,
} from '../../../infrastructure/data/data';
import { ServicesList } from '../../components/services.list/services.list';

export const HomePage = () => {
    const { handleLoad } = useAppointments();

    const [sliderRef] = useKeenSlider<HTMLDivElement>(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout: ReturnType<typeof setTimeout>;
                let mouseOver = false;
                function clearNextTimeout() {
                    clearTimeout(timeout);
                }
                function nextTimeout() {
                    clearTimeout(timeout);
                    if (mouseOver) return;
                    timeout = setTimeout(() => {
                        slider.next();
                    }, 5000);
                }
                slider.on('created', () => {
                    slider.container.addEventListener('mouseover', () => {
                        mouseOver = true;
                        clearNextTimeout();
                    });
                    slider.container.addEventListener('mouseout', () => {
                        mouseOver = false;
                        nextTimeout();
                    });
                    nextTimeout();
                });
                slider.on('dragStarted', clearNextTimeout);
                slider.on('animationEnded', nextTimeout);
                slider.on('updated', nextTimeout);
            },
        ]
    );

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    return (
        <>
            <main>
                <div className="container-highlight">
                    <img
                        className="highlight-image"
                        src="./assets/andry/andry-1.jpg"
                        alt="andry morales"
                        width="100%"
                    />
                </div>
                <div
                    ref={sliderRef}
                    className="keen-slider container-certificate"
                >
                    {dataCertificate.map((item: string, index: number) => {
                        return (
                            <li
                                key={index}
                                className="keen-slider__slide certificate"
                            >
                                <img
                                    className="certificate-image"
                                    src={item}
                                    alt="certificados"
                                    width="320px"
                                />
                            </li>
                        );
                    })}
                </div>
                <div className="container-service">
                    <ServicesList />
                    <div className="divButton">
                        <button
                            className="button-appoint"
                            onClick={() => {
                                window.location.assign(
                                    'https://widget.treatwell.es/establecimiento/100043880/servicios/'
                                );
                            }}
                        >
                            Pide tu Cita
                        </button>
                    </div>
                </div>
                <div className="container-keen-slider">
                    <div className="container-line" />
                    <p>Mis clientes dicen</p>
                    <div ref={sliderRef} className="keen-slider comments">
                        {dataComent.map((item: DataComentType) => {
                            return (
                                <img
                                    key={item.id}
                                    className="keen-slider__slide"
                                    src={item.image}
                                    alt="comentarios de clientes"
                                    width="120px"
                                />
                            );
                        })}
                    </div>
                </div>
            </main>
        </>
    );
};
