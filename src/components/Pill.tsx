import { Badge } from "./ui/badge";

export default function Pill({ children }: { children: React.ReactNode }) {
  return (
    <Badge className="rounded-full px-3 py-1 text-sm bg-[#1d4ed8] hover:bg-[#2563eb] text-white">
      {children}
    </Badge>
  );
}
