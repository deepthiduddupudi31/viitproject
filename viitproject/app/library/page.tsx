"use client";

import Link from "next/link";

export default function LibraryPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800 mt-24">
      <h1 className="text-4xl font-bold text-linkedin mb-6 text-center">Central Library</h1>
      <p className="mb-6 text-lg text-center">
        The institution has an artistically well-designed, spacious central library with an area of <b>15451 Sq.m.</b> It is a most lively place on the campus providing a safe, comfortable and friendly environment that enables learning and advancement of knowledge, and promotes discovery and scholarship. With a sitting capacity of over 200 students, the library has a ready stock of titles and <b>54815 volumes</b>, journals, magazines and newsletter from all over the world. The Library has subscribed to <b>6762 e-journals</b> from DELNET, INFLIBNET-N-List, IEEE, ASCE, ASME, Elsevier and <b>6226 e-books</b>. A separate digital section with 60 systems is part of the library; faculty and students can download and use them for their research and academics. The library also provides all kinds of support activities, like photocopying, audio-visual rooms, etc.
      </p>

      <h2 className="text-2xl font-semibold text-linkedin mb-4 mt-10">Library Collection</h2>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-linkedin text-white">
            <tr>
              <th className="px-4 py-2 text-left">S.No</th>
              <th className="px-4 py-2 text-left">Resource</th>
              <th className="px-4 py-2 text-left">No. of Volumes</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {[
              [1, "Books", "54815"],
              [2, "Titles", "11335"],
              [3, "Students Book Bank", "664"],
              [4, "Project Reports", "1235"],
              [5, "CDs & DVDs", "1680"],
              [6, "Periodicals- Hard Copies(Journals & Magazines)", "125"],
              [7, "No. of Scopus publications of the Staff (Since Inception)", "216"],
              [8, "No. of Scopus publications of the Staff in last Academic Year", "74"],
              [9, "Online Databases - (E-Journals) IEEE, ASCE, SPRINGER, ELSEVIER, J-GATE, McGraw-Hill, DELNET, NPTEL, NATIONAL DIGITAL LIBRARY", "18853"],
              [10, "Digital Library (75 MBPS Speed)", "30 systems"],
              [11, "Reprographic Facility", "Available"],
              [12, "Library Automated (EZLIB Software) with Barcode", "Available"],
              [13, "Bound Volumes", "1250"],
              [14, "Mc Graw Hill-E-Books", "380"],
            ].map(([sno, resource, count]) => (
              <tr key={sno} className="border-b last:border-b-0">
                <td className="px-4 py-2 font-medium">{sno}</td>
                <td className="px-4 py-2">{resource}</td>
                <td className="px-4 py-2">{count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold text-linkedin mb-4 mt-10">Online E-Journals</h2>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-linkedin text-white">
            <tr>
              <th className="px-4 py-2 text-left">Name of the Publisher</th>
              <th className="px-4 py-2 text-left">Resources</th>
              <th className="px-4 py-2 text-left">Link to Access</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {[
              ["IEEE", "Journals - 169", "IEEE Explore"],
              ["ASCE", "Journals - 38", "ASCE"],
              ["ASME", "Journals - 29", "ASME"],
              ["IEI (Membership SPRINGER)", "Series – A, B, C, D, E", "SPRINGER"],
              ["ELSEVIER", "Journals - 275", "ELSEVIER"],
              ["J- Gate", "Journals - 4606", "J-Gate"],
              ["KNIMBUS-E-BOOKS REMOTE ACCESS", "Journals - 4606", "J-Gate"],
              ["NLIST-INFLIBNET MEMBERSHIP", "Journals - 4606", "J-Gate"],
            ].map(([publisher, resources, link], i) => (
              <tr key={i} className="border-b last:border-b-0">
                <td className="px-4 py-2 font-medium">{publisher}</td>
                <td className="px-4 py-2">{resources}</td>
                <td className="px-4 py-2">
                  <Link href="#" className="text-linkedin underline hover:text-blue-700">{link}</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold text-linkedin mb-4 mt-10">DELNET</h2>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-linkedin text-white">
            <tr>
              <th className="px-4 py-2 text-left">Name of the Publisher</th>
              <th className="px-4 py-2 text-left">Resources</th>
              <th className="px-4 py-2 text-left">Link to Access</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr>
              <td className="px-4 py-2 font-medium">DELNET</td>
              <td className="px-4 py-2">Provide access to DELNET Union Catalogues and other Database to Member-Libraries.</td>
              <td className="px-4 py-2">
                <Link href="#" className="text-linkedin underline hover:text-blue-700">Delnet</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold text-linkedin mb-4 mt-10">E-Books</h2>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-linkedin text-white">
            <tr>
              <th className="px-4 py-2 text-left">Name of the Publisher</th>
              <th className="px-4 py-2 text-left">Resources</th>
              <th className="px-4 py-2 text-left">Link to Access</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr>
              <td className="px-4 py-2 font-medium">McGraw Hill</td>
              <td className="px-4 py-2">AICTE - Package of e-Journals: 380.</td>
              <td className="px-4 py-2"><Link href="#" className="text-linkedin underline hover:text-blue-700">McGraw Hill</Link></td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium">EBSCO-E-BOOKS ENGINEERING</td>
              <td className="px-4 py-2">Journals - 6226</td>
              <td className="px-4 py-2"><Link href="#" className="text-linkedin underline hover:text-blue-700">EBSCO</Link></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
} 