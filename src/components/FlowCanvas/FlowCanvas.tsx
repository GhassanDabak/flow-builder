import { nodeTypes } from "@/utils/nodes.utils";
import ReactFlow, {
  Background,
  Controls,
  MiniMap
} from "reactflow";
import "reactflow/dist/style.css";
import useFlowCanvas from "./FlowCanvas.hook";
import Header from '../Header';
import Sidebar from '../Sidebar';

export default function FlowCanvas() {
  const { edges, nodes, onAddNode, onConnect, onEdgesChange, onNodesChange } =
    useFlowCanvas();

  return (
    <div className="h-screen">
      <Header />
      <div className="flex">
        <Sidebar onAddNode={onAddNode} />
        <div className="h-[calc(100vh-60px)] w-full">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
            nodeTypes={nodeTypes}
          >
            <MiniMap nodeStrokeColor="#999" />
            <Controls />
            <Background />
          </ReactFlow>
        </div>
      </div>
    </div>
  );
}
