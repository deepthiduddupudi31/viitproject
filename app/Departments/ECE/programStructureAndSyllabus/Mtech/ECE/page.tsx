'use client';
import Sidebar from '../../../Sidebar';

export default function MTechEceSyllabus() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="p-8 w-full">
        <h1 className="text-2xl font-bold mb-4">M.Tech ECE Syllabus</h1>
        <ul className="list-disc list-inside space-y-3 text-blue-700">
          <li>
            <a
              href="https://vignaniit.edu.in/syllabus/Syllabus/VR%2020/mtech/VR21/VR%2021%20M.Tech(ECE).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              VR 21
            </a>
          </li>
          <li>
            <a
              href="https://vignaniit.edu.in/syllabus/Syllabus/VR%2019/PG%20-%20M.Tech/04_ECE_Electronics%20and%20Communication%20Engineering.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              VR 19
            </a>
          </li>
          <li>
            <a
              href="https://vignaniit.edu.in/syllabus/Syllabus/VR%2017/PG%20-%20M.Tech/04_M.Tech_Electronics%20and%20Communication%20Engineering.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              VR 17
            </a>
          </li>
          <li>
            <a
              href="https://vignaniit.edu.in/syllabus/Syllabus/R%2016/70.%20M.Tech%20-%20Electronics%20and%20Communication%20Engineering.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              R 16
            </a>
          </li>
          <li>
            <a
              href="https://vignaniit.edu.in/syllabus/Syllabus/R%2013/70.%20M.Tech%20-%20Electronics%20and%20Communication%20Engineering.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              R 13
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}
