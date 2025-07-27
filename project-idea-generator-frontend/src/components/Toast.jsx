export default function Toast({ message, type = 'success', show }) {
  let bgColor = 'bg-green-500'; // default to success

  if (type === 'error') {
    bgColor = 'bg-red-500';
  } else if (type === 'info') {
    bgColor = 'bg-blue-500';
  }

  return (
    show && (
      <div
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 ${bgColor} text-white px-4 py-2 rounded shadow z-50 transition-all duration-300 ${
          show
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        {message}
      </div>
    )
  );
}
