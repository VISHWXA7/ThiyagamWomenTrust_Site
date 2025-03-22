"use client";

import { useState, useEffect } from "react";
import Modal from "react-modal";
import { client } from "@/sanity/lib/client";

type Image = {
  image: { asset: { url: string } };
  description: string;
  year: number;
};

type AwardItem = {
  title: string;
  awardImages: Image[];
};

async function getAwards(): Promise<AwardItem[]> {
  try {
    const query = `*[_type == "awards"]{ 
      title, 
      awardImages[] {
        image { asset -> { url } },
        description,
        year
      }
    }`;
    const data: AwardItem[] = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching award data:", error);
    return [];
  }
}

export default function AwardPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [awards, setAwards] = useState<AwardItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterYear, setFilterYear] = useState<number | "all">("all");

  useEffect(() => {
    getAwards().then((data) => {
      setAwards(data);
      setLoading(false);
    });
  }, []);

  const filteredAwards = awards.map((award) => ({
    ...award,
    awardImages: award.awardImages.filter(
      (img) => filterYear === "all" || img.year === filterYear
    ),
  }));

  const years = Array.from(
    new Set(awards.flatMap((a) => a.awardImages.map((img) => img.year)))
  ).sort((a, b) => b - a);

  return (
    <div className="container mx-auto p-8 mb-10">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-8 text-center">
        Awards
      </h1>

      {/* Year Filter Dropdown */}
      <div className="mb-6 flex justify-end">
        <select
          className="p-3 border border-gray-300 rounded-lg text-gray-700 shadow-md focus:ring-2 focus:ring-purple-500"
          value={filterYear}
          onChange={(e) =>
            setFilterYear(e.target.value === "all" ? "all" : parseInt(e.target.value))
          }
        >
          <option value="all">All Years</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <p className="text-center text-lg font-medium text-gray-700">
          Loading awards...
        </p>
      ) : filteredAwards.some((a) => a.awardImages.length > 0) ? (
        <div className="space-y-8">
          {filteredAwards.map(
            (award, index) =>
              award.awardImages.length > 0 && (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center bg-gray-100 p-6 rounded-lg shadow-md"
                >
                  {/* Image with refined size and styling */}
                  <img
                    src={award.awardImages[0].image.asset.url}
                    alt={award.title}
                    className="w-[400px] h-[250px] object-cover rounded-lg shadow-lg cursor-pointer border border-gray-300 md:ml-6"
                    onClick={() =>
                      setSelectedImage(award.awardImages[0].image.asset.url)
                    }
                  />

                  {/* Description Section */}
                  <div className="mt-4 md:mt-0 text-left lg:ml-10">
                    <h2 className="text-xl font-bold text-gray-900">
                      {award.awardImages[0].description}
                    </h2>
                    <p className="text-gray-600 mt-2 text-sm md:text-base">
                      {award.title}
                    </p>
                  </div>
                </div>
              )
          )}
        </div>
      ) : (
        <p className="text-center text-lg font-medium text-gray-700">
          No awards found for the selected year.
        </p>
      )}

      {/* Modal for enlarged image */}
      {selectedImage && (
        <Modal
          isOpen={!!selectedImage}
          onRequestClose={() => setSelectedImage(null)}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 p-4"
        >
          <div className="relative bg-white p-6 rounded-lg shadow-lg">
            <button
              className="absolute top-2 right-2 text-white bg-gray-800 rounded-full px-3 py-2"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Preview"
              className="max-w-full max-h-[80vh] rounded-lg"
            />
          </div>
        </Modal>
      )}
    </div>
  );
}
