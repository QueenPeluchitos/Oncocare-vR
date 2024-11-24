const FAQ = () => {
    const faqs = [
        {
            question: "¿Qué información ofrece esta página?",
            answer: "Nuestra página está diseñada para brindar información clara y confiable sobre el cáncer, sus tipos, factores de riesgo, tratamientos y recursos educativos. No realizamos diagnósticos ni consultas médicas."
        },
        {
            question: "¿Puedo usar esta página para obtener un diagnóstico médico?",
            answer: "No, esta página es exclusivamente informativa. Recomendamos acudir a un médico especializado para cualquier consulta o diagnóstico relacionado con tu salud."
        },
        {
            question: "¿Cómo se organiza la información en esta página?",
            answer: "La información está categorizada en secciones como tipos de cáncer, tratamientos disponibles, prevención, y glosarios médicos, para que encuentres fácilmente lo que buscas."
        },
        {
            question: "¿De dónde provienen los datos compartidos aquí?",
            answer: "Todos los datos provienen de fuentes confiables, como instituciones de salud, investigaciones científicas y organizaciones dedicadas al estudio del cáncer."
        },
        {
            question: "¿La página ofrece recomendaciones sobre tratamientos específicos?",
            answer: "No ofrecemos recomendaciones personalizadas, pero explicamos los tratamientos generales y sus usos, para que puedas discutirlos con tu médico."
        },
        {
            question: "¿Cómo puedo hacer preguntas o sugerencias sobre la página?",
            answer: "Puedes contactarnos a través del formulario en la sección de Contáctanos. Nos encanta recibir tus comentarios para mejorar nuestra plataforma."
        },
        {
            question: "¿Esta página está respaldada por profesionales médicos?",
            answer: "Nuestro contenido es revisado y respaldado por especialistas en oncología para garantizar su precisión y relevancia."
        }
    ];

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Preguntas frecuentes</h1>
            {faqs.map((faq, index) => (
                <div key={index} className="mb-4 p-4 border rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
                    <p className="text-gray-700">{faq.answer}</p>
                </div>
            ))}
        </div>
    );
};

export default FAQ;