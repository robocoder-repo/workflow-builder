
import React from 'react';
import ReactFlow, { Node, Edge, Controls, NodeTypes } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// Custom node components
const InputNode: React.FC<{ data: { label: string } }> = ({ data }) => (
  <div className="border-2 p-2 rounded-md bg-blue-100">
    <h3 className="font-bold">Input: {data.label}</h3>
  </div>
);

const IfNode: React.FC<{ data: { label: string } }> = ({ data }) => (
  <div className="border-2 p-2 rounded-md bg-yellow-100">
    <h3 className="font-bold">If: {data.label}</h3>
  </div>
);

const WhileLoopNode: React.FC<{ data: { label: string } }> = ({ data }) => (
  <div className="border-2 p-2 rounded-md bg-green-100">
    <h3 className="font-bold">While Loop: {data.label}</h3>
  </div>
);

const ForLoopNode: React.FC<{ data: { label: string } }> = ({ data }) => (
  <div className="border-2 p-2 rounded-md bg-purple-100">
    <h3 className="font-bold">For Loop: {data.label}</h3>
  </div>
);

const LoggingNode: React.FC<{ data: { label: string } }> = ({ data }) => (
  <div className="border-2 p-2 rounded-md bg-red-100">
    <h3 className="font-bold">Logging: {data.label}</h3>
  </div>
);

const nodeTypes: NodeTypes = {
  input: InputNode,
  if: IfNode,
  whileLoop: WhileLoopNode,
  forLoop: ForLoopNode,
  logging: LoggingNode,
};

const initialNodes: Node[] = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: 'Start' }, type: 'input' },
  { id: '2', position: { x: 0, y: 100 }, data: { label: 'Input' }, type: 'input' },
  { id: '3', position: { x: 0, y: 200 }, data: { label: 'Condition' }, type: 'if' },
  { id: '4', position: { x: -100, y: 300 }, data: { label: 'While' }, type: 'whileLoop' },
  { id: '5', position: { x: 100, y: 300 }, data: { label: 'For' }, type: 'forLoop' },
  { id: '6', position: { x: 0, y: 400 }, data: { label: 'Log' }, type: 'logging' },
  { id: '7', position: { x: 0, y: 500 }, data: { label: 'End' }, type: 'output' },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' },
  { id: 'e3-4', source: '3', target: '4' },
  { id: 'e3-5', source: '3', target: '5' },
  { id: 'e4-6', source: '4', target: '6' },
  { id: 'e5-6', source: '5', target: '6' },
  { id: 'e6-7', source: '6', target: '7' },
];

const WorkflowBuilder: React.FC = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        nodeTypes={nodeTypes}
        fitView
      >
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default WorkflowBuilder;
