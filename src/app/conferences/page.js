"use client";

import { useState } from "react";
import Image from "next/image";

export default function Conference() {
  const [selectedImage, setSelectedImage] = useState(null);

  const conferences = [
    {
      title: "ESCAPE CONFERENCE",
      date: "October 2021",
      description:
        "The ESCAPE Conference is a cybersecurity-focused event bringing together experts, students, and professionals to discuss the latest trends in security, ethical hacking, and emerging threats.",
      flyer: "/flyer cong.jpg",
      images: ["/henryspeaking.jpg", "/collab.jpg", "/inside.jpg", "/speacker.jpg"],
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen">
      <main className="max-w-2xl mx-auto px-6 py-12 text-white">
        <h1 className="text-3xl font-bold mb-4">Conferences</h1>
        <p className="text-gray-400 mb-8 leading-relaxed">
          Here are some of the conferences I have organized and participated in.
        </p>

        <div className="space-y-8">
          {conferences.map((conf, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold">{conf.title}</h2>
                <span className="text-gray-400">{conf.date}</span>
              </div>
              <p className="text-gray-400 mt-2">{conf.description}</p>

              
              <div className="py-3  ">
                <div className="relative w-[250px] h-[250px] rounded-md overflow-hidden">
                  <Image
                    src={conf.flyer}
                    alt={`${conf.title} Flyer`}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="rounded-md shadow-md hover:scale-105 transition-transform"
                    unoptimized
                  />
                </div>
              </div> 
              {conf.images.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2">Gallery</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {conf.images.map((image, i) => (
                      <div
                        key={i}
                        className="relative w-full h-auto rounded-lg overflow-hidden cursor-pointer"
                        onClick={() => setSelectedImage(image)}  
                      >
                        <Image
                          src={image}
                          alt={`Conference Image ${i + 1}`}
                          width={300}
                          height={200}
                          objectFit="cover"
                          quality={100}
                          className="rounded-lg shadow-md hover:scale-105 hover:brightness-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main> 
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-[90%] md:w-[60%] lg:w-[50%]">
            <Image
              src={selectedImage}
              alt="Full Size Image"
              width={800}
              height={600}
              objectFit="contain"
              quality={100}
              className="rounded-lg shadow-lg"
            />
            <button
              className="absolute top-3 right-3 text-white text-2xl bg-black bg-opacity-50 rounded-full px-3 py-1"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
