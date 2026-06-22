import { permanentRedirect } from "next/navigation";

export default function GermanyRedirectPage() {
  permanentRedirect("/de");
}

