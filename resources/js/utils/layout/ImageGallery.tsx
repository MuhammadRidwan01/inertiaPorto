"use client"
import React, { useState, useCallback, useMemo } from "react";
import {
    ChevronLeft,
    ChevronRight,
    X,
    ExternalLink,
    Calendar,
    Award,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LinkPreview } from "../ui/link-preview";

// Memindahkan interface dan data ke file terpisah
interface Sertifikat {
    id: number;
    src: string;
    title: string;
    description: string;
    category: string;
    issuer: string;
    issueDate: string;
    certLink: string;
    issuerLogo: string;
}
// Helper function to ensure URLs are absolute
const getAssetUrl = (path: string): string => {
    // You can change this to your actual domain
    const domain = "https://395f-66-96-225-109.ngrok-free.app";

    // If the path is already a full URL, return it as is
    if (path.startsWith('http://') || path.startsWith('https://')) {
        return path;
    }

    // Remove leading slash if present to avoid double slashes
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${domain}/${cleanPath}`;
};

const sertifikatData: Sertifikat[] = [
    {
        id: 1,
        src: getAssetUrl("/image/certificates/Dkn_depan.webp"),
        title: "PHP Native Certificate 1",
        description: "Pembuatan Aplikasi pemesanan hotel berbasis web",
        category: "BackEnd certificate",
        issuer: "Dimensi Kreasi Nusantara",
        issueDate: "2024-06-05",
        certLink: getAssetUrl("/image/certificates/Dkn_depan.webp"),
        issuerLogo: getAssetUrl("/image/logos/dimensi nusantara.webp"),
    },
    {
        id: 2,
        src: getAssetUrl("/image/certificates/Dkn_belakang.webp"),
        title: "PHP Native Certificate 2",
        description: "Pembuatan Aplikasi pemesanan hotel berbasis web",
        category: "BackEnd certificate",
        issuer: "Dimensi Kreasi Nusantara",
        issueDate: "2024-06-05",
        certLink: getAssetUrl("/image/certificates/Dkn_belakang.webp"),
        issuerLogo: getAssetUrl("/image/logos/dimensi nusantara.webp"),
    },
    {
        id: 3,
        src: getAssetUrl("/image/certificates/PtWan_depan.webp"),
        title: "Html Css",
        description: "Html Css native sertificate 1",
        category: "UI",
        issuer: "PT WanTeknologi",
        issueDate: "2024-12-01",
        certLink: getAssetUrl("/image/certificates/PtWan_depan.webp"),
        issuerLogo: getAssetUrl("/image/logos/wanteknologi.webp"),
    },
    {
        id: 4,
        src: getAssetUrl("/image/certificates/PtWan_belakang.webp"),
        title: "Html Css",
        description: "Html Css native sertificate 2",
        category: "UI",
        issuer: "PT WanTeknologi",
        issueDate: "2024-12-01",
        certLink: getAssetUrl("/image/certificates/PtWan_belakang.webp"),
        issuerLogo: getAssetUrl("/image/logos/wanteknologi.webp"),
    },
    {
        id: 5,
        src: getAssetUrl("/image/certificates/aws 1.webp"),
        title: "Cloud Practitioner Essentials",
        description: "Mastering the fundamentals of AWS Cloud services",
        category: "Cloud Computing",
        issuer: "Dicoding",
        issueDate: "2024-11-23",
        certLink: "https://www.dicoding.com/certificates/L4PQ570GVZO1",
        issuerLogo: getAssetUrl("/image/logos/dicoding.webp"),
    },
    {
        id: 6,
        src: getAssetUrl("/image/certificates/aws 2.webp"),
        title: "Cloud Practitioner Essentials",
        description: "In-depth understanding of AWS infrastructure and services",
        category: "Cloud Computing",
        issuer: "Dicoding",
        issueDate: "2024-11-23",
        certLink: "https://www.dicoding.com/certificates/L4PQ570GVZO1",
        issuerLogo: getAssetUrl("/image/logos/dicoding.webp"),
    },
    {
        id: 7,
        src: getAssetUrl("/image/certificates/aws 3.webp"),
        title: "Cloud Practitioner Essentials",
        description: "Advanced cloud architecture and best practices",
        category: "Cloud Computing",
        issuer: "Dicoding",
        issueDate: "2024-11-23",
        certLink: "https://www.dicoding.com/certificates/L4PQ570GVZO1",
        issuerLogo: getAssetUrl("/image/logos/dicoding.webp"),
    },
    {
        id: 8,
        src: getAssetUrl("/image/certificates/js 1.webp"),
        title: "JavaScript Fundamentals",
        description: "Mastering the core concepts of JavaScript programming",
        category: "Programming",
        issuer: "Dicoding",
        issueDate: "2024-11-17",
        certLink: "https://www.dicoding.com/certificates/6RPNY97R4Z2M",
        issuerLogo: getAssetUrl("/image/logos/dicoding.webp"),
    },
    {
        id: 9,
        src: getAssetUrl("/image/certificates/js 2.webp"),
        title: "JavaScript Fundamentals",
        description: "Exploring advanced JavaScript features and patterns",
        category: "Programming",
        issuer: "Dicoding",
        issueDate: "2024-11-17",
        certLink: "https://www.dicoding.com/certificates/6RPNY97R4Z2M",
        issuerLogo: getAssetUrl("/image/logos/dicoding.webp"),
    },
    {
        id: 10,
        src: getAssetUrl("/image/certificates/js 3.webp"),
        title: "JavaScript Fundamentals",
        description: "Becoming a JavaScript expert with practical applications",
        category: "Programming",
        issuer: "Dicoding",
        issueDate: "2024-11-17",
        certLink: "https://www.dicoding.com/certificates/6RPNY97R4Z2M",
        issuerLogo: getAssetUrl("/image/logos/dicoding.webp"),
    },
];

// Memisahkan komponen card untuk mengurangi re-render
const SertifikatCard: React.FC<{
    sertifikat: Sertifikat;
    onClick: () => void;
}> = React.memo(({ sertifikat, onClick }) => {
    const formattedDate = useMemo(
        () =>
            new Date(sertifikat.issueDate).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
            }),
        [sertifikat.issueDate]
    );

    return (
        <div
            className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-indigo-900 to-indigo-950 shadow-lg transition-all duration-300 hover:shadow-xl"
            onClick={onClick}
        >
            <div className="relative">
                <img
                    src={sertifikat.src}
                    alt={sertifikat.title}
                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy" // Lazy loading untuk gambar
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="rounded-lg bg-white px-4 py-2 font-medium text-indigo-600"
                    >
                        View Details
                    </motion.button>
                </div>
            </div>
            <div className="space-y-3 p-4">
                <div className="flex items-center justify-between">
                    <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-800">
                        {sertifikat.category}
                    </span>
                    <LinkPreview
                        url={sertifikat.certLink}
                        className="text-indigo-300 transition-colors hover:text-indigo-100"
                    >
                        <ExternalLink size={16} />
                    </LinkPreview>
                </div>
                <h3 className="text-lg font-semibold text-white line-clamp-2">
                    {sertifikat.title}
                </h3>
                <div className="flex items-center space-x-2 text-gray-300">
                    <Award size={16} />
                    <span className="text-sm">{sertifikat.issuer}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                    <Calendar size={16} />
                    <span className="text-sm">{formattedDate}</span>
                </div>
            </div>
        </div>
    );
});

// Memisahkan modal ke komponen terpisah
const DetailModal: React.FC<{
    sertifikat: Sertifikat;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
}> = React.memo(({ sertifikat, onClose, onPrev, onNext }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 min-h-full flex items-center justify-center bg-black bg-opacity-90 p-4"
    >
        <motion.div
            className="relative w-full max-w-7xl overflow-hidden rounded-xl bg-white"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
        >
            <button
                onClick={onClose}
                className="absolute right-4 top-4 z-10 rounded-full bg-white p-2 shadow-lg transition-colors hover:bg-gray-100"
            >
                <X size={20} className="text-black"/>
            </button>
            <div className="grid gap-6 md:grid-cols-2">
                <div className="relative">
                    <img
                        src={sertifikat.src}
                        alt={sertifikat.title}
                        className="h-full w-full object-contain"
                        width={64}
                        height={64}
                    />
                    <div className="absolute inset-0 flex items-center justify-between px-4">
                        <button
                            onClick={onPrev}
                            className="rounded-full bg-white p-2 shadow-lg transition-colors hover:bg-gray-100"
                        >
                            <ChevronLeft size={20} className=" text-black"/>
                        </button>
                        <button
                            onClick={onNext}
                            className="rounded-full bg-white p-2 shadow-lg transition-colors hover:bg-gray-100"
                        >
                            <ChevronRight size={20} className=" text-black"/>
                        </button>
                    </div>
                </div>
                <div className="space-y-4 md:p-6 bg-white md:flex md:items-center md:justify-center md:h-full">
                    <div className="md:w-full md:h-full md:flex md:flex-col md:justify-between md:bg-gray-100 p-3 md:p-6 rounded-3xl">
                        <div className="flex items-center space-x-4 mb-6">
                            <img
                                src={sertifikat.issuerLogo}
                                alt={sertifikat.issuer}
                                className="h-16 w-16 rounded-full object-cover border-2 border-indigo-200"
                                loading="lazy"
                            />
                            <div>
                                <h4 className="text-xl font-semibold text-gray-900">
                                    {sertifikat.issuer}
                                </h4>
                                <p className="text-sm text-gray-500">
                                    {new Date(
                                        sertifikat.issueDate
                                    ).toLocaleDateString("en-US", {
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </p>
                            </div>
                        </div>
                        <div className="mb-6">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                {sertifikat.title}
                            </h2>
                            <p className="text-lg text-gray-600 mb-4">
                                {sertifikat.description}
                            </p>
                            <span className="inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-800">
                                {sertifikat.category}
                            </span>
                        </div>
                        <LinkPreview
                            url={sertifikat.certLink}
                            className="w-full inline-flex items-center justify-center space-x-2 bg-indigo-600 text-white py-3 px-6 rounded-lg text-lg font-semibold transition-colors hover:bg-indigo-700"
                        >
                            <span>View Certificate</span>
                            <ExternalLink size={20} />
                        </LinkPreview>
                    </div>
                </div>
            </div>
        </motion.div>
    </motion.div>
));

const SertifikatGallery: React.FC = () => {
    const [selectedCertificate, setSelectedCertificate] =
        useState<Sertifikat | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        null
    );
    const [searchQuery, setSearchQuery] = useState("");
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    // Memoize categories
    const categories = useMemo(
        () => [
            "All",
            ...Array.from(
                new Set(sertifikatData.map((item) => item.category))
            ),
        ],
        []
    );

    // Memoize filtered certificates
    const filteredCertificates = useMemo(() => {
        return sertifikatData.filter((cert) => {
            const matchesCategory =
                !selectedCategory || cert.category === selectedCategory;
            const matchesSearch =
                cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                cert.description
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                cert.issuer.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    // Memoize handlers
    const handlePrev = useCallback(() => {
        if (selectedCertificate) {
            const currentIndex = sertifikatData.findIndex(
                (cert) => cert.id === selectedCertificate.id
            );
            const prevIndex =
                (currentIndex - 1 + sertifikatData.length) %
                sertifikatData.length;
            setSelectedCertificate(sertifikatData[prevIndex]);
        }
    }, [selectedCertificate]);

    const handleNext = useCallback(() => {
        if (selectedCertificate) {
            const currentIndex = sertifikatData.findIndex(
                (cert) => cert.id === selectedCertificate.id
            );
            const nextIndex = (currentIndex + 1) % sertifikatData.length;
            setSelectedCertificate(sertifikatData[nextIndex]);
        }
    }, [selectedCertificate]);

    const handleCategoryChange = useCallback((category: string) => {
        setSelectedCategory(category === "All" ? null : category);
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                    <input
                        type="text"
                        placeholder="Search certificates..."
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`rounded-full px-4 py-2 transition-colors ${
                                selectedCategory === category ||
                                (category === "All" &&
                                    selectedCategory === null)
                                    ? "bg-indigo-600 text-white"
                                    : "bg-indigo-100 text-indigo-800 hover:bg-indigo-200"
                            }`}
                            onClick={() => handleCategoryChange(category)}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>
            </div>

            <motion.div
                layout
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 my-8"
            >
                <AnimatePresence>
                    {filteredCertificates.map((sertifikat) => (
                        <motion.div
                            key={sertifikat.id}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                filter:
                                    hoveredId && hoveredId !== sertifikat.id
                                        ? "blur(2px) brightness(0.7)"
                                        : "blur(0px)",
                            }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            onHoverStart={() => setHoveredId(sertifikat.id)}
                            onHoverEnd={() => setHoveredId(null)}
                        >
                            <SertifikatCard
                                sertifikat={sertifikat}
                                onClick={() =>
                                    setSelectedCertificate(sertifikat)
                                }
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            <AnimatePresence>
                {selectedCertificate && (
                    <DetailModal
                        sertifikat={selectedCertificate}
                        onClose={() => setSelectedCertificate(null)}
                        onPrev={handlePrev}
                        onNext={handleNext}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default SertifikatGallery;
