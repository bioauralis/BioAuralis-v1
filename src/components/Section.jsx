export default function Section({ id, title, text }) {
  return (
    <section id={id} className="text-center max-w-3xl mx-auto space-y-4">
      <h2 className="text-3xl font-bold text-emerald-700">{title}</h2>
      <p className="text-gray-700 leading-relaxed">{text}</p>
    </section>
  );
}
