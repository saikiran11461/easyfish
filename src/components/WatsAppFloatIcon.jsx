
export default function WhatsAppFloatingIcon() {
    return (
      <a
        href="https://wa.me/919999999999" // your number here
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-14 h-14 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </a>
    );
  }
  