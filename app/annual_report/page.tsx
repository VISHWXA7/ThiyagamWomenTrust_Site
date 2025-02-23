"use client";

import { useState } from "react";
import { client } from "@/sanity/lib/client";

type AnnualReportItem = {
  title: string;
  pdf: string;
};

// Fetching Annual Reports
async function getAnnualReports(): Promise<AnnualReportItem[]> {
  try {
    const query = `*[_type == "annualReport"] | order(title asc) {
      title,
      "pdf": pdf.asset->url
    }`;
    const data: AnnualReportItem[] = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching annual reports:", error);
    return [];
  }
}

export default function AnnualReportPage() {
  const [reports, setReports] = useState<AnnualReportItem[]>([]);

  // Fetch data on component mount
  useState(() => {
    getAnnualReports().then(setReports);
  });

  return (
    <div className="container mt-4 mx-auto p-6 mb-10">
      <h1 className="text-4xl font-bold mb-16 text-center">Annual Reports</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Render annual reports */}
        {reports.length > 0 ? (
          reports.map((report, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-lg font-semibold mb-2">{report.title}</h2>
              {report.pdf ? (
                <a
                  href={report.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-80 underline"
                >
                  View PDF
                </a>
              ) : (
                <p className="text-gray-500">No PDF available</p>
              )}
            </div>
          ))
        ) : (
          <p className="text-center col-span-4">No reports to display.</p>
        )}
      </div>
    </div>
  );
}
