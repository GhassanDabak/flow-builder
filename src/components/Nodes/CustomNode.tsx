import type { NodeData } from "@/types/node.types";
import { Handle, Position, type NodeProps } from "reactflow";
import SideDrawer from "../SideDrawer";

const CustomNode = (data: NodeProps<NodeData>) => {
  return (
    <div style={{ padding: 10, border: "1px solid #ccc", borderRadius: 4 }}>
      <SideDrawer {...data} />
      <Handle
        type="source"
        position={Position.Right}
        style={{ background: "#555", width: 10, height: 10 }}
      />
    </div>
  );
};

export default CustomNode;