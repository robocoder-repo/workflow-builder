
import dynamic from 'next/dynamic';

const WorkflowBuilder = dynamic(() => import('@/components/WorkflowBuilder'), { ssr: false });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <WorkflowBuilder />
    </main>
  );
}
