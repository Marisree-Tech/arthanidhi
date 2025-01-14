"use client";
import VALUES from "@/constants/values";
import { PopupButton } from "@typeform/embed-react";
import { MessageSquareDot } from "lucide-react";

export default function TypeFormComponent() {
  return (
    <PopupButton
      id={VALUES.TYPEFORM_ID}
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        fontSize: "20px",
        padding: "12px 24px",
        backgroundColor: "#4E81DD",
        color: "white",
        border: "none",
        borderRadius: "50px",
        cursor: "pointer",
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
        zIndex: 1000,
      }}
      className="my-button"
    >
      <MessageSquareDot />
    </PopupButton>
  );
}
