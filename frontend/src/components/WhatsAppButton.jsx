import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {

  const phoneNumber = "919096287077";
  const message = encodeURIComponent("Hello Elvrix Tech Solutions, I would like to know more about your services!");

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with Elvrix Tech Solutions on WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
}
