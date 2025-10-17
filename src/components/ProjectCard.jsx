export default function ProjectCard({ image, title, text }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-5 text-left">
        <h3 className="text-xl font-semibold mb-2 text-emerald-700">{title}</h3>
        <p className="text-gray-600 text-sm">{text}</p>
      </div>
    </div>
  );
}
