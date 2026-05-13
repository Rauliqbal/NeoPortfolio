import { useParams } from 'react-router-dom';
import { projects } from '../utils/data/works';

export default function WorkDetail() {
  const { slug } = useParams();


  // if (!project) {
  //   return (
  //     <div className="flex h-screen items-center justify-center bg-black text-white">
  //       Project not found
  //     </div>
  //   );
  // }

  return (
    <main className="min-h-screen bg-black px-8 py-20 text-white">
      {slug}
      {/* <h1 className="mb-6 text-6xl font-black">
        {project.title}
      </h1>

      <p className="max-w-2xl text-zinc-400">
        {project.description}
      </p> */}
    </main>
  );
}