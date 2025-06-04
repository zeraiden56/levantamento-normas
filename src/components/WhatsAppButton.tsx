// src/components/WhatsAppButton.tsx
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5565999503234"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-4 right-4
        w-16 h-16 sm:w-16 sm:h-16 lg:w-20 lg:h-20
        bg-green-500 hover:bg-green-600
        text-white
        rounded-full
        flex items-center justify-center
        shadow-lg
        transition-all
        z-50
      "
      aria-label="Contato via WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8 lg:w-10 lg:h-10" />
    </a>
  );
}
