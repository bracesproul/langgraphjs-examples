import { APIDocsAlert } from "@/components/APIDocsAlert";
import ChatInterface from "../components/ChatInterface";

export default function Home() {
  return (
    <main className="h-screen bg-[#212121]">
      <APIDocsAlert />
      <ChatInterface />
    </main>
  );
}
