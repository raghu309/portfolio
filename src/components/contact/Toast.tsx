function Toast({
  message,
  type,
  onClose,
}: {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}) {
  return (
    <div
      className={`fixed bottom-20 left-1/2 -translate-x-1/2 z-50 px-4 py-3 rounded shadow-lg flex items-center justify-between gap-4 text-white 
    ${type === "success" ? "bg-green-600" : "bg-red-600"}`}
    >
      <span>{message}</span>
      <button onClick={onClose} className="text-white font-bold">
        ×
      </button>
    </div>
  );
}

export default Toast;
