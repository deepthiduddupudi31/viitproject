'use client';
import Sidebar from '../../../Sidebar';

export default function MTechDecsSyllabus() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-8 w-full">
        <h1 className="text-2xl font-bold mb-4">M.Tech DECS Syllabus</h1>
        <ul className="list-disc list-inside space-y-2 text-blue-600">
          <li>
            <a
              href="https://vignaniit.edu.in/syllabus/Syllabus/VR%2020/mtech/VR21/VR%2021%20M.Tech(DECS).pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              VR 21
            </a>
          </li>
          <li>
            <a
              href="https://vignaniit.edu.in/syllabus/Syllabus/VR%2019/PG%20-%20M.Tech/04_ECE_Digital%20Electronics%20and%20Communication%20Systems.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              VR 19
            </a>
          </li>
          <li>
            <a
              href="https://vignaniit.edu.in/syllabus/Syllabus/VR%2017/PG%20-%20M.Tech/04_M.Tech_Digital%20Electronics%20and%20Communication%20Systems.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              VR 17
            </a>
          </li>
          <li>
            <a
              href="https://vignaniit.edu.in/syllabus/Syllabus/R%2016/38.%20M.Tech%20-%20Digital%20Electronics%20and%20Communication%20Systems.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              R 16
            </a>
          </li>
          <li>
            <a
              href="https://vignaniit.edu.in/syllabus/Syllabus/R%2013/38.%20M.Tech%20-%20Digital%20Electronics%20and%20Communication%20Systems.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              R 13
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
