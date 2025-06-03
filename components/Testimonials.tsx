import React from "react";
import "./Testimonials.css";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  content: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, Example Inc.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "CTO, TechCorp",
    content:
      "Cras suscipit, quam vitae dapibus facilisis, justo erat semper nulla, ac tempor sapien diam nec sapien.",
  },
  {
    id: 3,
    name: "Alex Johnson",
    role: "Product Manager, InnovateX",
    content:
      "Etiam nec magna eu justo sodales dapibus ut nec massa. Curabitur a felis in nunc fringilla tristique.",
  },
  {
    id: 4,
    name: "Maria Gonzalez",
    role: "Lead Designer, CreativeHub",
    content:
      "Integer ut nulla nec justo feugiat blandit. Nulla facilisi. Maecenas et malesuada magna.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="testimonials-container">
      <h2 className="title">What Our Clients Say</h2>
      <div className="testimonials-scroll">
        {testimonials.map((t) => (
          <div className="testimonial-card" key={t.id}>
            <p className="testimonial-content">"{t.content}"</p>
            <h4 className="testimonial-name">{t.name}</h4>
            <span className="testimonial-role">{t.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
