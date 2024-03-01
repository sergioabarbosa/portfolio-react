import React from 'react';

interface Testimonial {
  id: number;
  author: string;
  text: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    author: 'João Silva',
    text: 'A Agência de Desenvolvimento Web e Aplicativos entregou um excelente trabalho! Estamos muito satisfeitos com os resultados.'
  },
  {
    id: 2,
    author: 'Maria Oliveira',
    text: 'Fiquei impressionada com a qualidade e profissionalismo da equipe. Recomendo fortemente seus serviços.'
  }
];

const Testimonials: React.FC = () => {
  return (
    <div>
      {testimonialsData.map(testimonial => (
        <div key={testimonial.id} className="testimonial">
          <p>{testimonial.text}</p>
          <p className="author">- {testimonial.author}</p>
        </div>
      ))}
    </div>
  );
}

export default Testimonials;
