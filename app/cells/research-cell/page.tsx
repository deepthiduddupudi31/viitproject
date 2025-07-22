"use client";

export default function CellsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800 mt-24">
      <h1 className="text-4xl font-bold text-linkedin mb-6 text-center">Research and Development</h1>
      <p className="mb-6">
        We firmly believe that the primary objective of engineering education is to foster the generation of new knowledge and innovative thoughts and ideas. Our institution has a well-defined research policy in place. This policy is developed by the Research Committee, guided by the Research Committee Members, and approved by the Governing Body. The Dean of R&D consistently updates the research facilities of the Institute.
      </p>
      <h2 className="text-2xl font-semibold text-linkedin mb-4 mt-10">Code of Ethics for Research</h2>
      <p className="mb-4">
        Researchers at the institute must adhere to the principles of research ethics and follow the idiom “Honesty is the Best Policy.”
      </p>
      <h3 className="text-xl font-semibold text-linkedin mb-3">General Research Ethics</h3>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Research should originate from original ideas and adhere to established research methodologies.</li>
        <li>Researchers must keep documents as testimonials for activities such as data collection and correspondences.</li>
        <li>Researchers must be open to criticism or comments regarding their own research.</li>
        <li>Do not use unpublished data, methods, or results without permission.</li>
        <li>Acknowledge all contributions made by others to the research.</li>
        <li>Avoid plagiarism in any form.</li>
        <li>Good manners and respect within the research group are highly valued.</li>
        <li>Research should be oriented toward social and public benefit.</li>
        <li>Do not conduct unnecessary experiments on animals.</li>
      </ul>
      <h3 className="text-xl font-semibold text-linkedin mb-3">Non-Disclosure Policy</h3>
      <p className="mb-6">
        Follow the non-disclosure policy wherever needed, such as for confidential communications, trade, or military records.
      </p>
      <h3 className="text-xl font-semibold text-linkedin mb-3">Research Misconduct Includes:</h3>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Publishing or submitting the same paper to two different journals without informing the editors.</li>
        <li>Using unnecessary materials or techniques to artificially enhance the impact of the research work.</li>
        <li>Including offensive or personal comments about any author in your manuscript.</li>
        <li>Spoiling or copying others' work in the laboratory.</li>
        <li>Stealing supplies, books, or data from the laboratory, library, or office.</li>
      </ul>
    </div>
  );
}