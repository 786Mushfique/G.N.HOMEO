// "use client"

// import Image from "next/image"
// import { useState } from "react"

// export default function Gallery() {
//   const [selectedImage, setSelectedImage] = useState<number | null>(null)

//   const galleryImages = [
//     {
//       src: "/images/gallery-1.jpg",
//       alt: "G.N. Homeo Clinic - Medicine Shelves",
//       category: "Clinic",
//       title: "Medicine Collection",
//     },
//     {
//       src: "/images/gallery-2.jpg",
//       alt: "G.N. Homeo Clinic - Storefront",
//       category: "Clinic",
//       title: "Clinic Storefront",
//     },
//     {
//       src: "/images/gallery-3.jpg",
//       alt: "Homeopathic Medicine Bottles",
//       category: "Medicines",
//       title: "Premium Homeopathic Remedies",
//     },
//     {
//       src: "/images/gallery-4.jpg",
//       alt: "Dr. M.H. Rizwi - Patient Consultation",
//       category: "Services",
//       title: "Patient Consultation",
//     },
//     {
//       src: "/images/gallery-5.jpg",
//       alt: "Dr. M.H. Rizwi - Medical Consultation",
//       category: "Services",
//       title: "Medical Consultation",
//     },
//     {
//       src: "/images/gallery-6.jpg",
//       alt: "G.N. Homeo Clinic - Medicine Storage",
//       category: "Clinic",
//       title: "Medicine Storage",
//     },
//     {
//       src: "/images/gallery-7.jpg",
//       alt: "G.N. Homeo Clinic - Comprehensive Shelves",
//       category: "Clinic",
//       title: "Clinic Pharmacy Setup",
//     },
//     {
//       src: "/images/gallery-8.jpg",
//       alt: "G.N. Homeo Clinic - Organized Shelves",
//       category: "Clinic",
//       title: "Organized Medicine Shelves",
//     },
//     {
//       src: "/images/gallery-9.jpg",
//       alt: "Dr. M.H. Rizwi - At Work",
//       category: "Services",
//       title: "Dr. M.H. Rizwi at Work",
//     },
//     {
//       src: "/images/gallery-10.jpg",
//       alt: "G.N. Homeo Clinic - Entrance",
//       category: "Clinic",
//       title: "Clinic Entrance",
//     },
//   ]

//   return (
//     <main>
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 px-4 animate-fade-in-up">
//         <div className="max-w-7xl mx-auto">
//           <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Gallery</h1>
//           <p className="text-lg text-foreground/80 max-w-2xl">
//             Explore our clinic, medicines, and community service initiatives at{" "}
//             <span className="font-bold">G.N. Homeo Clinic</span>.
//           </p>
//         </div>
//       </section>

//       {/* Gallery Grid */}
//       <section className="py-16 px-4 bg-background">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {galleryImages.map((image, index) => (
//               <div
//                 key={index}
//                 className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer animate-scale-in"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//                 onClick={() => setSelectedImage(index)}
//               >
//                 <div className="relative h-64 w-full">
//                   <Image
//                     src={image.src || "/placeholder.svg"}
//                     alt={image.alt}
//                     fill
//                     className="object-cover group-hover:scale-110 transition-transform duration-300"
//                   />
//                 </div>
//                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end">
//                   <div className="w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity">
//                     <p className="font-semibold text-sm">{image.title}</p>
//                     <p className="text-xs text-gray-200">{image.category}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* About Our Services */}
//       <section className="py-16 px-4 bg-primary/5">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold text-foreground mb-12 text-center animate-fade-in-up">
//             Our Clinic & Services
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-card border border-border rounded-lg p-8 animate-slide-in-left hover:shadow-lg transition-all">
//               <h3 className="text-xl font-bold text-primary mb-4">Premium Medicines</h3>
//               <p className="text-foreground/80">
//                 We stock a comprehensive range of authentic homeopathic medicines from trusted manufacturers, ensuring
//                 the highest quality for our patients.
//               </p>
//             </div>

//             <div className="bg-card border border-border rounded-lg p-8 animate-fade-in-up hover:shadow-lg transition-all">
//               <h3 className="text-xl font-bold text-primary mb-4">Modern Clinic</h3>
//               <p className="text-foreground/80">
//                 Our well-equipped clinic provides a comfortable and hygienic environment for consultations and
//                 treatments, ensuring patient comfort and safety.
//               </p>
//             </div>

//             <div className="bg-card border border-border rounded-lg p-8 animate-slide-in-right hover:shadow-lg transition-all">
//               <h3 className="text-xl font-bold text-primary mb-4">Community Care</h3>
//               <p className="text-foreground/80">
//                 We are committed to serving the community through free health camps and providing affordable healthcare
//                 to those in need.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Modal for full image view */}
//       {selectedImage !== null && (
//         <div
//           className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in-up"
//           onClick={() => setSelectedImage(null)}
//         >
//           <div className="relative max-w-4xl w-full max-h-96 md:max-h-screen">
//             <Image
//               src={galleryImages[selectedImage].src || "/placeholder.svg"}
//               alt={galleryImages[selectedImage].alt}
//               fill
//               className="object-contain"
//             />
//             <button
//               onClick={() => setSelectedImage(null)}
//               className="absolute top-4 right-4 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition-colors"
//             >
//               ✕
//             </button>
//           </div>
//         </div>
//       )}
//     </main>
//   )
// }


// "use client"

// import Image from "next/image"
// import { useState } from "react"

// export default function Gallery() {
//   const [selectedImage, setSelectedImage] = useState<number | null>(null)

//   const galleryImages = [
//     { src: "/images/gallery-1.jpg", alt: "G.N. Homeo Clinic - Medicine Shelves", category: "Clinic", title: "Medicine Collection" },
//     { src: "/images/gallery-2.jpg", alt: "G.N. Homeo Clinic - Storefront", category: "Clinic", title: "Clinic Storefront" },
//     { src: "/images/gallery-3.jpg", alt: "Homeopathic Medicine Bottles", category: "Medicines", title: "Premium Homeopathic Remedies" },
//     { src: "/images/gallery-4.jpg", alt: "Dr. M.H. Rizwi - Patient Consultation", category: "Services", title: "Patient Consultation" },
//     { src: "/images/gallery-5.jpg", alt: "Dr. M.H. Rizwi - Medical Consultation", category: "Services", title: "Medical Consultation" },
//     { src: "/images/gallery-6.jpg", alt: "G.N. Homeo Clinic - Medicine Storage", category: "Clinic", title: "Medicine Storage" },
//     { src: "/images/gallery-7.jpg", alt: "G.N. Homeo Clinic - Comprehensive Shelves", category: "Clinic", title: "Clinic Pharmacy Setup" },
//     { src: "/images/gallery-8.jpg", alt: "G.N. Homeo Clinic - Organized Shelves", category: "Clinic", title: "Organized Medicine Shelves" },
//     { src: "/images/gallery-9.jpg", alt: "Dr. M.H. Rizwi - At Work", category: "Services", title: "Dr. M.H. Rizwi at Work" },
//     { src: "/images/gallery-10.jpg", alt: "G.N. Homeo Clinic - Entrance", category: "Clinic", title: "Clinic Entrance" },
//   ]

//   return (
//     <main>
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 px-4 animate-fade-in-up">
//         <div className="max-w-7xl mx-auto">
//           <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Gallery</h1>
//           <p className="text-lg text-foreground/80 max-w-2xl">
//             Explore our clinic, medicines, and community service initiatives at{" "}
//             <span className="font-bold">G.N. Homeo Clinic</span>.
//           </p>
//         </div>
//       </section>

//       {/* Gallery Grid */}
//       <section className="py-16 px-4 bg-background">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {galleryImages.map((image, index) => (
//               <div
//                 key={index}
//                 className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer animate-scale-in"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//                 onClick={() => setSelectedImage(index)}
//               >
//                 <div className="relative h-64 w-full">
//                   <Image
//                     src={image.src || "/placeholder.svg"}
//                     alt={image.alt}
//                     fill
//                     className="object-cover group-hover:scale-110 transition-transform duration-300"
//                   />
//                 </div>
//                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end">
//                   <div className="w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity">
//                     <p className="font-semibold text-sm">{image.title}</p>
//                     <p className="text-xs text-gray-200">{image.category}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Modal for full image view */}
//       {selectedImage !== null && (
//         <div
//           className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
//           onClick={() => setSelectedImage(null)}
//         >
//           <div
//             className="relative max-w-4xl w-full max-h-full"
//             onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
//           >
//             <Image
//               src={galleryImages[selectedImage].src || "/placeholder.svg"}
//               alt={galleryImages[selectedImage].alt}
//               width={1200}
//               height={800}
//               className="object-contain rounded-lg"
//             />
//             <button
//               onClick={() => setSelectedImage(null)}
//               className="absolute top-4 right-4 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition-colors"
//             >
//               ✕
//             </button>
//           </div>
//         </div>
//       )}
//     </main>
//   )
// }

"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import { X, ChevronLeft, ChevronRight, Grid3x3, Camera } from "lucide-react";

// Define the image type
type GalleryImage = {
  src: string;
  alt: string;
  category: string;
  title: string;
};

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const galleryImages: GalleryImage[] = [
    { src: "/images/gallery-1.jpg", alt: "G.N. Homeo Clinic - Medicine Shelves", category: "Clinic", title: "Medicine Collection" },
    { src: "/images/gallery-2.jpg", alt: "G.N. Homeo Clinic - Storefront", category: "Clinic", title: "Clinic Storefront" },
    { src: "/images/gallery-3.jpg", alt: "Homeopathic Medicine Bottles", category: "Medicines", title: "Premium Homeopathic Remedies" },
    { src: "/images/gallery-4.jpg", alt: "Dr. M.H. Rizwi - Patient Consultation", category: "Services", title: "Patient Consultation" },
    { src: "/images/gallery-5.jpg", alt: "Dr. M.H. Rizwi - Medical Consultation", category: "Services", title: "Medical Consultation" },
    { src: "/images/gallery-6.jpg", alt: "G.N. Homeo Clinic - Medicine Storage", category: "Clinic", title: "Medicine Storage" },
    { src: "/images/gallery-7.jpg", alt: "G.N. Homeo Clinic - Comprehensive Shelves", category: "Clinic", title: "Clinic Pharmacy Setup" },
    { src: "/images/gallery-8.jpg", alt: "G.N. Homeo Clinic - Organized Shelves", category: "Clinic", title: "Organized Medicine Shelves" },
    { src: "/images/gallery-9.jpg", alt: "Dr. M.H. Rizwi - At Work", category: "Services", title: "Dr. M.H. Rizwi at Work" },
    { src: "/images/gallery-10.jpg", alt: "G.N. Homeo Clinic - Entrance", category: "Clinic", title: "Clinic Entrance" },
  ];

  const categories = ["All", ...new Set(galleryImages.map((img) => img.category))];

  const filteredImages = useMemo(() => {
    if (filter === "All") return galleryImages;
    return galleryImages.filter((img) => img.category === filter);
  }, [filter]);

  // Find current index in filtered array for navigation
  const currentIndex = selectedImage
    ? filteredImages.findIndex((img) => img.src === selectedImage.src)
    : -1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") setSelectedImage(null);
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "ArrowRight") handleNext();
  };

  return (
    <main className="min-h-screen bg-background" onKeyDown={handleKeyDown} tabIndex={0}>
      {/* Hero Section with transparent banner image */}
      <section className="relative overflow-hidden py-16 px-4">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.tv9gujarati.com/wp-content/uploads/2024/12/5-44.jpg"
            alt="Various homeopathic medicines"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10" />
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-medium tracking-wide mb-4">
            <Camera size={14} />
            Our Moments
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Gallery
            </span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed">
            Explore our clinic, medicines, and community service initiatives at{" "}
            <span className="font-semibold text-primary">G.N. Homeo Clinic</span>.
          </p>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                    : "bg-card border border-border text-foreground/70 hover:bg-primary/10 hover:border-primary/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filteredImages.length === 0 ? (
            <div className="text-center py-20">
              <Grid3x3 className="mx-auto text-foreground/20 mb-4" size={48} />
              <p className="text-foreground/60">No images in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <div
                  key={image.src} // using src as key (assumes unique)
                  className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-card border border-border/50"
                  onClick={() => setSelectedImage(image)}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30">
                        View
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-semibold text-sm">{image.title}</p>
                    <p className="text-white/80 text-xs">{image.category}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors backdrop-blur-sm"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            {/* Navigation Arrows */}
            {filteredImages.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors backdrop-blur-sm ${
                    currentIndex === 0 ? "opacity-30 cursor-not-allowed" : "hover:scale-110"
                  }`}
                  disabled={currentIndex === 0}
                  aria-label="Previous"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  onClick={handleNext}
                  className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors backdrop-blur-sm ${
                    currentIndex === filteredImages.length - 1 ? "opacity-30 cursor-not-allowed" : "hover:scale-110"
                  }`}
                  disabled={currentIndex === filteredImages.length - 1}
                  aria-label="Next"
                >
                  <ChevronRight size={28} />
                </button>
              </>
            )}

            {/* Image */}
            <div className="relative flex-1 flex items-center justify-center">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="max-h-[80vh] w-auto object-contain rounded-lg shadow-2xl"
                priority
              />
            </div>

            {/* Caption */}
            <div className="bg-black/40 backdrop-blur-sm text-white p-4 rounded-b-lg mt-2 text-center">
              <p className="font-semibold text-lg">{selectedImage.title}</p>
              <p className="text-sm opacity-80">{selectedImage.category}</p>
              <p className="text-xs opacity-60 mt-1">
                {currentIndex + 1} / {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Inline styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.25s ease-out forwards;
        }
        .bg-grid-white\\/5 {
          background-image: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 24px 24px;
        }
      `}</style>
    </main>
  );
}