
import type { Node, Edge } from "reactflow";
import { create } from 'zustand';

interface FlowState {
  nodes: Node[];
  edges: Edge[];
  flowName: string;
  setNodes: (nodes: Node[]) => void;
  setEdges: (edges: Edge[]) => void;
  setFlowName: (name: string) => void;
}

export const useFlowStore = create<FlowState>((set) => ({
  nodes: [],
  edges: [],
  flowName: "My Flow",
  setNodes: (nodes) => set({ nodes }),
  setEdges: (edges) => set({ edges }),
  setFlowName: (flowName) => set({ flowName }),
}));
