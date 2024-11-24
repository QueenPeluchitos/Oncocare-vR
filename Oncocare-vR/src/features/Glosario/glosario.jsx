const Glosario = () => {
    const terms = [
        { term: 'Cáncer', definition: 'Enfermedad causada por el crecimiento incontrolado de células anormales en el cuerpo.' },
        { term: 'Quimioterapia', definition: 'Tratamiento que utiliza medicamentos para destruir las células cancerosas.' },
        { term: 'Radioterapia', definition: 'Tratamiento que utiliza radiación para destruir las células cancerosas.' },
        { term: 'Metástasis', definition: 'Propagación del cáncer desde el lugar donde se originó a otras partes del cuerpo.' },
        { term: 'Biopsia', definition: 'Procedimiento para extraer una muestra de tejido para su análisis.' },
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Glosario</h1>
            <ul className="space-y-4">
                {terms.map((item, index) => (
                    <li key={index} className="bg-white p-4 rounded shadow">
                        <h2 className="text-xl font-semibold">{item.term}</h2>
                        <p className="text-gray-700">{item.definition}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Glosario;