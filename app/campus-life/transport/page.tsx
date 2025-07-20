"use client";

export default function TransportPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800 mt-24">
      <h1 className="text-4xl font-bold text-linkedin mb-6 text-center">Transportation</h1>
      <p className="mb-6">
        The college runs its own fleet of buses and the policy relates to the provision of transport support for the journey from the student's registered point of boarding to the registered college and back to the point of boarding. The main focus is to provide <b>SAFE and TIMELY</b> transport without affecting the quality of a student’s education and the composition of her peer group. College is running <b>30+ buses</b> covering all points in Visakhapatnam.
      </p>

      <h2 className="text-2xl font-semibold text-linkedin mb-4 mt-10">Staff Transport Concessions</h2>
      <ul className="list-disc list-inside mb-6">
        <li>For Staff with a salary above Rs. 20 thousand, the management offers concession of up to <b>40%</b> on the designated charge.</li>
        <li>For Staff with a salary between Rs. 10 thousand to 20 thousand, the management offers concession of up to <b>50%</b> on the designated charge.</li>
        <li>For Staff with a salary below Rs. 10 thousand, the management provides transport <b>free of charge</b>.</li>
        <li>For Non-Teaching the management provides transport free of charge, i.e. <b>100% Subsidy</b></li>
      </ul>

      <h2 className="text-2xl font-semibold text-linkedin mb-4 mt-10">Bus Driver & Route Information</h2>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-linkedin text-white">
            <tr>
              <th className="px-4 py-2 text-left">S.NO</th>
              <th className="px-4 py-2 text-left">Driver Name</th>
              <th className="px-4 py-2 text-left">Route</th>
              <th className="px-4 py-2 text-left">Contact No</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {[
              [1, "G.SATISH", "GAJUWAKA", "9493530079"],
              [2, "E.RAJU", "JAGADHAMBA", "9848626905"],
              [3, "Y.YELLAJI", "JAGADHAMBA", "7799859816"],
              [4, "N.SIVA KUMAR", "H.B.COLONY", "9573757548"],
              [5, "P.SOMA RAJU", "SCINDYA", "9703507936"],
              [6, "E.VENKATA APPARAO", "R.K.HOSPITAL", "8978883297"],
              [7, "K.KANNARAO", "SEETHAMADHARA", "8790634435"],
              [8, "K.SHANKAR RAO", "HIGHWAY", "9701035190"],
              [9, "K.APPALA KONDA", "DUVVADA", "9908120734"],
              [10, "K.RAJA BABU", "NTPC", "9160466845"],
              [11, "C.H.APPALA RAJU", "GOPALAPATNAM", "9177316608"],
              [12, "K.PYDI RAJU", "NTPC", "9642736744"],
              [13, "S.SATISH", "SEETHAMADHARA", "9493530079"],
              [14, "P.MUTYALA NAIDU", "PENDURTHI", "9700665572"],
              [15, "S.SUBHRAMANYAM", "HANUMANTHWAKA", "9618058335"],
              [16, "G.RAMA KRISHNA", "PENDURTHI", "9573377970"],
              [17, "O.CHINNA", "SCINDYA", "9989030653"],
              [18, "K.V.NAIDU", "B.C.ROAD", "9603015884"],
              [19, "D.NAGESH", "HANUMANTHWAKA", "9703287725"],
              [20, "J.AMMATHALLI NAIDU", "B.C.ROAD", "9000271849"],
              [21, "S.A.RAO", "AGNAMPUDI", "7799177069"],
              [22, "K.T.RAJU", "NARVA", "9392359666"],
              [23, "B.ESHWARAO", "TUNGALAM", "8499921991"],
              [24, "M.SIVA KUMAR", "SHEELANAGAR", "7730092142"],
              [25, "R.NOOKA RAJU", "GOPALAPATNAM", "8978050819"],
              [26, "Y.GANAPATHI", "JAGADHAMBA", "9032990871"],
              [27, "N.RAMANA", "R.K.HOSPITAL", "9010573359"],
              [28, "R.PARADESI NAIDU", "PARAWADA", "9908250608"],
              [29, "KOTI APPARAO", "ANAKAPALLI", "9908820358"],
              [30, "K.APPALA NAIDU", "ANAKAPALLI", "9550233916"],
              [31, "Y.TATHA BABU", "BAJI JN", "9959104526"],
              [32, "N.APPALA RAJU", "NTPC", "9502624285"],
              [33, "N.SHIMACHALAM", "PENDURTHI", "8978143769"],
              [34, "N.RAM NAIDU", "HANUMANTHWAKA", "7330674723"],
              [35, "JAGANADHAM", "HOSTEL", "9700868650"],
            ].map(([sno, name, route, contact]) => (
              <tr key={sno} className="border-b last:border-b-0">
                <td className="px-4 py-2 font-medium">{sno}</td>
                <td className="px-4 py-2">{name}</td>
                <td className="px-4 py-2">{route}</td>
                <td className="px-4 py-2">{contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 