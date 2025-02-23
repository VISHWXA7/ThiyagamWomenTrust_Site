"use client";

import { useState, useEffect } from "react";
import Modal from "react-modal";
import { client } from "@/sanity/lib/client";

type Image = {
  asset: {
    url: string;
  };
};

type AwardItem = {
  title: string;
  awardImages: Image[];
};

// Fetching award data
async function getAwards(): Promise<AwardItem[]> {
  try {
    const query = `*[_type == "awards"]{ 
      title, 
      awardImages[] {
        asset -> { url }
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
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    getAwards().then((data) => {
      setAwards(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="container mt-1 mx-auto p-6 mb-10">
    <h1 className="text-4xl font-bold mb-16 text-center">Awards</h1>
      {loading ? (
        <p className="text-center">Loading awards...</p>
      ) : awards.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {awards.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {item.awardImages?.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  src={image.asset?.url}
                  alt={item.title || "Award Image"}
                  className="w-full h-48 object-cover cursor-pointer"
                  onClick={() => setSelectedImage(image.asset?.url)}
                />
              ))}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No awards to display.</p>
      )}

      {/* Image Preview Modal */}
      {selectedImage && (
        <Modal
          isOpen={!!selectedImage}
          onRequestClose={() => setSelectedImage(null)}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 p-4"
        >
          <div className="relative bg-white p-2 rounded-lg">
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
