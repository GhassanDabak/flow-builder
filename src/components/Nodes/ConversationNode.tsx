import { Handle, Position } from "reactflow";

const ConversationNode = () => {
  return (
    <div>
      <div>ConversationNode</div>
      <Handle position={Position.Top} type="target" />
    </div>
  );
};

export default ConversationNode;
