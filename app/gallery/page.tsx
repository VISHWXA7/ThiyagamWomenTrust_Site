"use client";

import { useState, useEffect } from "react";
import Modal from "react-modal";
import { client } from "@/sanity/lib/client";

type Image = {
  asset: {
    url: string;
  };
  description?: string;
  year?: number;
};

type GalleryItem = {
  title: string;
  images: Image[];
};

// Fetching gallery data
async function getGallery(): Promise<GalleryItem[]> {
  try {
    const query = `*[_type == "gallery"]{ 
      title, 
      images[] {
        asset -> { url },
        description,
        year
      } 
    }`;
    const data: GalleryItem[] = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching gallery data:", error);
    return [];
  }
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [filterYear, setFilterYear] = useState<string | number>("all");
  const [years, setYears] = useState<number[]>([]);

  useEffect(() => {
    getGallery().then((data) => {
      setGallery(data);
      const uniqueYears = Array.from(
        new Set(data.flatMap((item) => item.images.map((img) => img.year)))
      ).filter((year) => year !== undefined) as number[];
      setYears(uniqueYears.sort((a, b) => b - a));
    });
  }, []);

  const filteredGallery =
    filterYear === "all"
      ? gallery
      : gallery.map((item) => ({
          ...item,
          images: item.images.filter((img) => img.year === filterYear),
        }));

  return (
    <div className="container mx-auto p-8 mb-10">
      <h1 className="text-5xl font-bold mb-6 text-center">Gallery</h1>
      <div className="mb-4 flex justify-end">
        <select
          className="p-2 border rounded"
          value={filterYear}
          onChange={(e) => setFilterYear(e.target.value === "all" ? "all" : parseInt(e.target.value))}
        >
          <option value="all">All Years</option>
          {years.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>
      <div className="space-y-8">
        {filteredGallery.map((item, index) => (
          item.images.length > 0 && (
            <div key={index} className="flex flex-col md:flex-row items-center">
              <img
                src={item.images[0].asset.url}
                alt={item.title}
                className="w-[500px] h-[300px] object-cover rounded-xl cursor-pointer md:ml-6"
                onClick={() => setSelectedImage(item.images[0].asset.url)}
              />
              <div className="mt-4 md:mt-0 text-left lg:ml-20">
                <h2 className="text-2xl font-semibold">{item.images[0].description}</h2>
                <p className="text-gray-600 mt-2">{item.title}</p>
              </div>
            </div>
          )
        ))}
      </div>
      {selectedImage && (
        <Modal
          isOpen={!!selectedImage}
          onRequestClose={() => setSelectedImage(null)}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 p-4"
        >
          <div className="relative bg-white p-4 rounded-lg">
            <button
              className="absolute top-2 right-2 text-white bg-gray-800 rounded-full px-2 py-1"
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
