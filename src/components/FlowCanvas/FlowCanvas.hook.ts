import { initialNodes } from "@/utils/nodes.utils";
import { useCallback } from "react";
import {
  addEdge,
  useEdgesState,
  useNodesState,
  type Connection,
  type Edge,
} from "reactflow";

const useFlowCanvas = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onAddNode = useCallback(() => {
    const newNode = {
      id: `${nodes.length + 1}`,
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: {
        label: `${nodes.length + 1}`,
        json: {
          id: nodes.length + 1,
          name: "New Node",
          description: "This is a new node",
        },
      },
    };
    setNodes((nds) => nds.concat(newNode));
  }, [nodes, setNodes]);

  return {
    nodes,
    edges,
    onConnect,
    onAddNode,
    onNodesChange,
    onEdgesChange,
  };
};

export default useFlowCanvas;
