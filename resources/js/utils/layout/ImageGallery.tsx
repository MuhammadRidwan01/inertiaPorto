import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, ExternalLink, Calendar, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

const sertifikatData: Sertifikat[] = [
    { id: 1, src: '/image/certificates/Dkn_depan.webp', title: 'BackEnd certificate 1', description: 'My first php Certificate', category: 'BackEnd certificate', issuer: 'Dimensi Kreasi Nusantara', issueDate: '2024-04-05', certLink: '/image/certificates/Dkn_depan.webp', issuerLogo: '/image/logos/dimensi nusantara.webp' },
    { id: 2, src: '/image/certificates/Dkn_belakang.webp', title: 'BackEnd certificate 2', description: 'My first php Certificate', category: 'BackEnd certificate', issuer: 'Dimensi Kreasi Nusantara', issueDate: '2024-04-05', certLink: '/image/certificates/Dkn_belakang.webp', issuerLogo: '/image/logos/dimensi nusantara.webp' },
    { id: 3, src: '/image/certificates/PtWan_depan.webp', title: 'Html Css', description: 'Html Css native sertificate 1', category: 'UI', issuer: 'PT WanTeknologi', issueDate: '2024-03-15', certLink: '/image/certificates/PtWan_depan.webp', issuerLogo: '/image/logos/wanteknologi.webp' },
    { id: 4, src: '/image/certificates/PtWan_belakang.webp', title: 'Html Css', description: 'Html Css native sertificate 2', category: 'UI', issuer: 'PT WanTeknologi', issueDate: '2024-04-01', certLink: '/image/certificates/PtWan_belakang.webp', issuerLogo: '/image/logos/wanteknologi.webp' },
    { id: 5, src: '/image/certificates/aws 1.webp', title: 'Cloud Practitioner Essentials', description: 'Mastering the fundamentals of AWS Cloud services', category: 'Cloud Computing', issuer: 'Dicoding', issueDate: '2024-11-23', certLink: 'https://www.dicoding.com/certificates/L4PQ570GVZO1', issuerLogo: '/image/logos/dicoding.webp' },
    { id: 6, src: '/image/certificates/aws 2.webp', title: 'Cloud Practitioner Essentials', description: 'In-depth understanding of AWS infrastructure and services', category: 'Cloud Computing', issuer: 'Dicoding', issueDate: '2024-06-01', certLink: 'https://www.dicoding.com/certificates/L4PQ570GVZO1', issuerLogo: '/image/logos/dicoding.webp' },
    { id: 7, src: '/image/certificates/aws 3.webp', title: 'Cloud Practitioner Essentials', description: 'Advanced cloud architecture and best practices', category: 'Cloud Computing', issuer: 'Dicoding', issueDate: '2024-11-23', certLink: 'https://www.dicoding.com/certificates/L4PQ570GVZO1', issuerLogo: '/image/logos/dicoding.webp' },
    { id: 8, src: '/image/certificates/js 1.webp', title: 'JavaScript Fundamentals', description: 'Mastering the core concepts of JavaScript programming', category: 'Programming', issuer: 'JavaScript Academy', issueDate: '2024-11-17', certLink: 'https://www.dicoding.com/certificates/6RPNY97R4Z2M', issuerLogo: '/image/logos/dicoding.webp' },
    { id: 9, src: '/image/certificates/js 2.webp', title: 'JavaScript Fundamentals', description: 'Exploring advanced JavaScript features and patterns', category: 'Programming', issuer: 'JavaScript Academy', issueDate: '2024-11-17', certLink: 'https://www.dicoding.com/certificates/6RPNY97R4Z2M', issuerLogo: '/image/logos/dicoding.webp' },
    { id: 10, src: '/image/certificates/js 3.webp', title: 'JavaScript Fundamentals', description: 'Becoming a JavaScript expert with practical applications', category: 'Programming', issuer: 'JavaScript Academy', issueDate: '2024-11-17', certLink: 'https://www.dicoding.com/certificates/6RPNY97R4Z2M', issuerLogo: '/image/logos/dicoding.webp' },
];

const SertifikatCard: React.FC<{ sertifikat: Sertifikat; onClick: () => void }> = ({ sertifikat, onClick }) => {
    const formattedDate = new Date(sertifikat.issueDate).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric'
    });

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
                    <a
                        href={sertifikat.certLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-300 transition-colors hover:text-indigo-100"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ExternalLink size={16} />
                    </a>
                </div>
                <h3 className="text-lg font-semibold text-white line-clamp-2">{sertifikat.title}</h3>
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
};

const DetailModal: React.FC<{
    sertifikat: Sertifikat;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
}> = ({ sertifikat, onClose, onPrev, onNext }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
    >
        <motion.div
            className="relative w-full max-w-4xl overflow-hidden rounded-xl bg-white"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
        >
            <button
                onClick={onClose}
                className="absolute right-4 top-4 z-10 rounded-full bg-white p-2 shadow-lg transition-colors hover:bg-gray-100"
            >
                <X size={20} />
            </button>
            <div className="grid gap-6 md:grid-cols-2">
                <div className="relative">
                    <img
                        src={sertifikat.src}
                        alt={sertifikat.title}
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-between px-4">
                        <button
                            onClick={onPrev}
                            className="rounded-full bg-white p-2 shadow-lg transition-colors hover:bg-gray-100"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={onNext}
                            className="rounded-full bg-white p-2 shadow-lg transition-colors hover:bg-gray-100"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
                <div className="space-y-4 p-6">
                    <div className="flex items-center space-x-3">
                        <img
                            src={sertifikat.issuerLogo}
                            alt={sertifikat.issuer}
                            className="h-12 w-12 rounded-full object-cover"
                        />
                        <div>
                            <h4 className="font-medium text-gray-900">{sertifikat.issuer}</h4>
                            <p className="text-sm text-gray-500">
                                {new Date(sertifikat.issueDate).toLocaleDateString('en-US', {
                                    month: 'long',
                                    year: 'numeric'
                                })}
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2 className="mb-2 text-2xl font-bold text-gray-900">{sertifikat.title}</h2>
                        <p className="text-gray-600">{sertifikat.description}</p>
                    </div>
                    <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-800">
                        {sertifikat.category}
                    </span>
                    <a
                        href={sertifikat.certLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-indigo-600 transition-colors hover:text-indigo-800"
                    >
                        <span>View Certificate</span>
                        <ExternalLink size={16} />
                    </a>
                </div>
            </div>
        </motion.div>
    </motion.div>
);

const SertifikatGallery: React.FC = () => {
    const [selectedCertificate, setSelectedCertificate] = useState<Sertifikat | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    const categories = ["All", ...Array.from(new Set(sertifikatData.map(item => item.category)))];

    const filteredCertificates = sertifikatData.filter(cert => {
        const matchesCategory = !selectedCategory || cert.category === selectedCategory;
        const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            cert.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            cert.issuer.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const handlePrev = () => {
        if (selectedCertificate) {
            const currentIndex = sertifikatData.findIndex(cert => cert.id === selectedCertificate.id);
            const prevIndex = (currentIndex - 1 + sertifikatData.length) % sertifikatData.length;
            setSelectedCertificate(sertifikatData[prevIndex]);
        }
    };

    const handleNext = () => {
        if (selectedCertificate) {
            const currentIndex = sertifikatData.findIndex(cert => cert.id === selectedCertificate.id);
            const nextIndex = (currentIndex + 1) % sertifikatData.length;
            setSelectedCertificate(sertifikatData[nextIndex]);
        }
    };

    return (
        <div className="container mx-auto space-y-8 px-4 py-8">
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
                                (selectedCategory === category || (category === "All" && selectedCategory === null))
                                    ? 'bg-indigo-600 text-white'
                                    : 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200'
                            }`}
                            onClick={() => setSelectedCategory(category === "All" ? null : category)}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>
            </div>

            <motion.div
                layout
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
                <AnimatePresence>
                    {filteredCertificates.map((sertifikat) => (
                        <motion.div
                            key={sertifikat.id}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                filter: hoveredId && hoveredId !== sertifikat.id ? 'blur(2px) brightness(0.7)' : 'blur(0px)'
                            }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            onHoverStart={() => setHoveredId(sertifikat.id)}
                            onHoverEnd={() => setHoveredId(null)}
                        >
                            <SertifikatCard
                                sertifikat={sertifikat}
                                onClick={() => setSelectedCertificate(sertifikat)}
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
