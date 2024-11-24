import './recomendaciones.css';
import 'tailwindcss/tailwind.css';

const Recomendaciones = () => {
    return (
        <div className="recomendaciones">
            <h2>Recomendaciones</h2>
            <img src="ruta/a/tu/imagen.jpg" alt="Recomendaciones" className="recomendaciones-img" />
            
            <section>
                <h3>Clínicas recomendadas:</h3>
                <ul>
                    <li>
                        <strong>Centro Médico Omega Plus</strong><br />
                        Motivo: Reportes de diagnósticos erróneos frecuentes.
                    </li>
                    <li>
                        <strong>Clínica Vida Total</strong><br />
                        Motivo: Falta de certificación y personal no calificado.
                    </li>
                    <li>
                        <strong>Salud Global Express</strong><br />
                        Motivo: Servicios incompletos y sin garantías de calidad.
                    </li>
                </ul>
            </section>

            <section>
                <h3>Recomendaciones para elegir una clínica confiable:</h3>
                <ul>
                    <li>Verifica que esté registrada ante las autoridades de salud de tu país.</li>
                    <li>Asegúrate de que cuenten con personal médico certificado.</li>
                    <li>Busca reseñas verificadas y recomendaciones de pacientes reales.</li>
                </ul>
            </section>

            <section>
                <h3>Lugares confiables para adquirir medicamentos:</h3>
                <ul>
                    <li>
                        <strong>Farmacia Central BioCare</strong><br />
                        Medicamentos con garantía de autenticidad.
                    </li>
                    <li>
                        <strong>Salud Farma Internacional</strong><br />
                        Especializados en tratamientos oncológicos.
                    </li>
                    <li>
                        <strong>Red Farma Avanzada</strong><br />
                        Servicio en línea con entrega a domicilio segura.
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default Recomendaciones;