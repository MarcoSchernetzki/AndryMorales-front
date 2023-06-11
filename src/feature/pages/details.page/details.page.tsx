import './details.page.css';
import '../service.page/service.page.css';
import { useAppointments } from '../../wishes/hook/use.appointments';

function DetailsPage() {
    const { products } = useAppointments();

    if (!products.selectedProduct) return <p>loading...</p>;
    return (
        <>
            <main className="container-details">
                <p className="details-tittle">
                    {products.selectedProduct?.name}
                </p>

                <img
                    src={products.selectedProduct?.image}
                    alt={products.selectedProduct?.name}
                    width="320px"
                ></img>
                <div>{products.selectedProduct?.description}</div>
                <div>€ {products.selectedProduct?.price},00</div>
                <button
                    className="button-appoint"
                    placeholder="pedir cita"
                    onClick={() => {
                        window.location.assign(
                            'https://widget.treatwell.es/establecimiento/100043880/servicios/'
                        );
                    }}
                >
                    Pedir Cita
                </button>
            </main>
        </>
    );
}
export default DetailsPage;
