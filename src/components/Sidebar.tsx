import { Hash } from "lucide-react";

export default function Sidebar({ onAddNode }: { onAddNode: () => void }) {
  return (
    <aside className="p-4 w-64 bg-gray-50 space-y-2 flex flex-col gap-2">
      <h2 className="font-bold text-gray-500">Actions</h2>
      <div
        className="flex gap-1 items-center cursor-pointer hover:bg-gray-200 rounded-md p-2 transition-colors"
        onClick={onAddNode}
      >
        <Hash color="red" />
        <span className="ml-2">Add Node</span>
      </div>
    </aside>
  );
}
