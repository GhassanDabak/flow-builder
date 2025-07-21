import ConversationNode from "@/components/Nodes/ConversationNode";
import CustomNode from "@/components/Nodes/CustomNode";
import type { NodeData } from "@/types/node.types";
import type { Node } from "reactflow";

const initialNodes: Node<NodeData>[] = [
  {
    id: "1",
    type: "custom",
    position: { x: 0, y: 0 },
    data: {
      label: "click me",
      json: { description: "this is a node", id: 2, name: "random" },
    },
  },
  {
    id: "2",
    position: { x: 0, y: 100 },
    type: "conversation",
    data: {
      label: "2",
      json: { description: "randodewiewg", id: 4, name: "test" },
    },
  },
];

const nodeTypes = {
  custom: CustomNode,
  conversation: ConversationNode,
};

export { initialNodes, nodeTypes };
