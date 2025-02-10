"use client";

import { useState } from "react";
import Modal from "react-modal";
import { client } from "@/sanity/lib/client";

type Image = {
  asset: {
    url: string;
  };
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
        asset -> { url }
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

  // Fetch data on component mount
  useState(() => {
    getGallery().then(setGallery);
  });

  return (
    <div className="container mt-10 mx-auto p-8 mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Render gallery items */}
        {gallery.length > 0 ? (
          gallery.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Render images */}
              {item.images?.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  src={image.asset?.url}
                  alt={item.title || "Gallery Image"}
                  className="w-full h-48 object-cover cursor-pointer"
                  onClick={() => setSelectedImage(image.asset?.url)}
                />
              ))}
            </div>
          ))
        ) : (
          <p className="text-center col-span-4">No images to display.</p>
        )}
      </div>

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
