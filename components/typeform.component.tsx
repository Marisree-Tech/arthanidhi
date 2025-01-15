"use client";
import VALUES from "@/constants/values";
import { PopupButton, Widget } from "@typeform/embed-react";
import { MessageSquareDot } from "lucide-react";

export default function TypeFormComponent() {
  return (
    <div className="min-h-screen">
      <Widget id={VALUES.TYPEFORM_ID} className="min-h-screen w-full" />
      
    </div>
  );
}
