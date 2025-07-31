import React from "react";

const testimonials = [
  {
    name: "Jane Doe",
    role: "CEO, Acme Corp",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "CellCom transformed our vision into reality. Their team was responsive, knowledgeable, and delivered on time.",
  },
  {
    name: "John Smith",
    role: "CTO, BetaTech",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "Working with CellCom was a game changer for our product development. Highly recommended!",
  },
  {
    name: "Emily Johnson",
    role: "Product Manager, Gamma LLC",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "Professional, efficient, and creative. CellCom’s team helped us launch quickly and scale seamlessly.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 border rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={t.photo}
                alt={t.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-gray-700 italic mb-4">"{t.quote}"</p>
              <h4 className="font-semibold text-gray-900">{t.name}</h4>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
