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


"use client"

import Image from "next/image"
import { useState } from "react"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
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
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 px-4 animate-fade-in-up">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Gallery</h1>
          <p className="text-lg text-foreground/80 max-w-2xl">
            Explore our clinic, medicines, and community service initiatives at{" "}
            <span className="font-bold">G.N. Homeo Clinic</span>.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end">
                  <div className="w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="font-semibold text-sm">{image.title}</p>
                    <p className="text-xs text-gray-200">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for full image view */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-full"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
          >
            <Image
              src={galleryImages[selectedImage].src || "/placeholder.svg"}
              alt={galleryImages[selectedImage].alt}
              width={1200}
              height={800}
              className="object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
