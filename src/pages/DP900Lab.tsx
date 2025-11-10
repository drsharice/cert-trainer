import { useState } from "react";
import { Dialog } from "@headlessui/react";

export default function DP900Lab() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const labs = [
    {
      id: 1,
      title: "Relational Data Concepts",
      description:
        "Understand how tables, primary keys, and foreign keys define relationships between entities.",
      image: "/images/labs/dp900/relational-diagram.png",
    },
    {
      id: 2,
      title: "Normalization",
      description:
        "Learn why normalization reduces redundancy and improves data integrity across tables.",
      image: "/images/labs/dp900/normalization-example.png",
    },
    {
      id: 3,
      title: "SQL Statements",
      description:
        "Explore core SQL commands: SELECT, INSERT, UPDATE, DELETE, and JOIN.",
      image: "/images/labs/dp900/sql-snippet.png",
    },
    {
      id: 4,
      title: "Database Objects",
      description:
        "Review tables, views, stored procedures, and triggers with practical code samples.",
      image: "/images/labs/dp900/db-objects.png",
    },
  ];

  return (
    <main
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        background: "linear-gradient(to right, #ecfdf5 0%, #ffffff 100%)",
        overflow: "hidden",
      }}
    >
      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; transform: translate(-50%, -45%); }
          to { opacity: 1; transform: translate(-50%, -50%); }
        }
        `}
      </style>

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          animation: "fadeIn 1s ease-in-out",
          textAlign: "center",
          width: "100%",
          maxWidth: "1200px",
          padding: "1rem",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(1.8rem, 2.5vw + 1rem, 2.5rem)",
            fontWeight: "bold",
            color: "#047857",
            marginBottom: "2rem",
          }}
        >
          DP-900 Lab: Describe Relational Concepts
        </h1>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(6px)",
            borderRadius: "1rem",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            padding: "2rem",
          }}
        >
          {labs.map((lab) => (
            <div
              key={lab.id}
              className="rounded-xl border border-emerald-100 bg-white shadow-md hover:shadow-lg transition cursor-pointer overflow-hidden"
              onClick={() => setSelectedImage(lab.image)}
            >
              <img
                src={lab.image}
                alt={lab.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-emerald-700 mb-2">
                  {lab.title}
                </h2>
                <p className="text-gray-600 text-sm mb-3">{lab.description}</p>
                <button className="px-4 py-2 bg-emerald-600 text-white text-sm rounded-lg hover:bg-emerald-700">
                  View Example
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for image preview */}
      <Dialog
        open={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      >
        <Dialog.Panel className="bg-white rounded-xl shadow-lg p-4 max-w-3xl">
          <img
            src={selectedImage || ""}
            alt="Code example"
            className="w-full h-auto rounded-lg"
          />
          <button
            className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
            onClick={() => setSelectedImage(null)}
          >
            Close
          </button>
        </Dialog.Panel>
      </Dialog>
    </main>
  );
}
