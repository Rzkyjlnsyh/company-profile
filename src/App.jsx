import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Phone, Mail, MapPin, Star, Award, ChevronDown, Menu, X, Globe, MessageCircle, Play, ChevronLeft, ChevronRight, Image, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';
import logo from './assets/logo.webp'
import Project1Image1 from './assets/projects/project-1/image-1.webp';
import Project1Image2 from './assets/projects/project-1/image-2.webp';
import Project1Image3 from './assets/projects/project-1/image-3.webp';
import Project2Image1 from './assets/projects/project-2/image-1.webp';
import Project2Image2 from './assets/projects/project-2/image-2.webp';
import Project3Image1 from './assets/projects/project-3/image-1.webp';
import Project3Image2 from './assets/projects/project-3/image-3.webp';
import Project4Image1 from './assets/projects/project-4/image-1.webp';
import Project4Image2 from './assets/projects/project-4/image-2.webp';
import Project5Image1 from './assets/projects/project-5/image-1.webp';
import Project5Image2 from './assets/projects/project-5/image-2.webp';
import Project6Image1 from './assets/projects/project-6/image-1.webp';
import Project6Image2 from './assets/projects/project-6/image-2.webp';
import Project6Image3 from './assets/projects/project-6/image-3.webp';
import Project6Image4 from './assets/projects/project-6/image-4.webp';
import Project7Image1 from './assets/projects/project-7/image-1.webp';
import Project7Image2 from './assets/projects/project-7/image-2.webp';
import Project8Image1 from './assets/projects/project-8/image-1.webp';
import Project8Image2 from './assets/projects/project-8/image-2.webp';
import Project8Image3 from './assets/projects/project-8/image-3.webp';
import Project9Image1 from './assets/projects/project-9/image-1.webp';
import Project9Image2 from './assets/projects/project-9/image-2.webp';
import Project9Image3 from './assets/projects/project-9/image-3.webp';
import Project9Image4 from './assets/projects/project-9/image-4.webp';
import Project10Image1 from './assets/projects/project-10/image-1.webp';
import Project10Image2 from './assets/projects/project-10/image-2.webp';
import Project10Image3 from './assets/projects/project-10/image-3.webp';
import Project10Image4 from './assets/projects/project-10/image-4.webp';
import Project10Image5 from './assets/projects/project-10/image-5.webp';
import Project10Image6 from './assets/projects/project-10/image-6.webp';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('id');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('photos');
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);


  const content = {
    id: {
      nav: {
        about: 'Tentang Kami',
        portfolio: 'Portfolio',
        pillars: 'Keunggulan',
        testimonials: 'Testimoni',
        contact: 'Kontak'
      },
      hero: {
        title: 'PT.ALFA TATA GRIYA',
        subtitle: 'The Signature of Excellence',
        description: 'Lebih dari 20 tahun pengalaman membangun proyek-proyek ikonik berskala nasional dan internasional. Kami tidak sekadar membangun, kami menandatangani keunggulan.',
        cta1: 'Jelajahi Warisan Kami',
        cta2: 'Konsultasi Dengan Kami'
      },
      about: {
        title: 'Manifesto Kami',
        subtitle: 'Keunggulan bukanlah tujuan — keunggulan adalah identitas',
        description: 'Selama lebih dari tiga dekade, kami telah menjadi mitra terpercaya untuk proyek-proyek prestisius di seluruh dunia. Dari pabrik skala global hingga resort mewah di Bali, setiap proyek adalah cerminan dari komitmen kami terhadap integritas, presisi, dan seni arsitektur.',
        values: [
          { title: 'Integritas', desc: 'Komitmen tanpa kompromi pada kualitas' },
          { title: 'Presisi', desc: 'Detail yang sempurna dalam setiap elemen' },
          { title: 'Artistry', desc: 'Perpaduan engineering dan desain yang memukau' }
        ]
      },
      portfolio: {
        title: 'Portfolio Kami',
        subtitle: 'Karya Terbaik yang Membangun Warisan',
        projects: [
          {
            title: 'Gedung Hanggar Bandara Kediri',
            location: 'Kediri, Jawa Timur, Indonesia',
            type: 'commercial',
            images: [
              Project1Image1, Project1Image2, Project1Image3
            ],
            videoUrl: 'https://www.youtube.com/embed/ZrOT-ng35AA?si=eoCLMzYWlg5i-hlE',
            featured: true,
            description: 'Gedung Hanggar Bandara Kediri merupakan proyek berskala besar dengan konstruksi baja modern berstandar tinggi. Dirancang untuk menampung dan memelihara pesawat secara aman dan efisien, hanggar ini menggunakan struktur rangka baja raksasa dan material berkualitas tinggi, dengan pengerjaan yang mengutamakan presisi, keselamatan, dan ketepatan waktu.',
            details: ['Struktur Baja Modern', 'Sistem Scaffolding Presisi', 'Material Berkualitas Tinggi', 'Keselamatan Kerja Terjamin']
          },
          {
            title: 'Rumah dr. Hermawan',
            location: 'Pare, Kabupaten Kediri, Jawa Timur, Indonesia',
            type: 'renovation',
            images: [
              Project2Image1, Project2Image2
            ],
            videoUrl: 'https://www.youtube.com/embed/eJclzksshqo?si=jEwBXzD31Su2Wc-n',
            featured: false,
            description: 'Rumah dr. Hermawan menghadirkan desain modern minimalis yang elegan dengan bukaan jendela lebar dan tata ruang terbuka. Mengutamakan pencahayaan alami dan sirkulasi udara, hunian ini dibangun dengan material premium dan pengerjaan presisi untuk kenyamanan dan estetika.',
            details: ['Luas 350m²', '3 Kamar Tidur', 'Pencahayaan Alami', 'Material Premium']
          },
          {
            title: 'Rumah Tinggal Gus Iqbal Lirboyo',
            location: 'Kota Kediri, Jawa Timur, Indonesia',
            type: 'residential',
            images: [
              Project3Image1, Project3Image2
            ],
            videoUrl: 'https://www.youtube.com/embed/ZrOT-ng35AA?si=pW95gXCNUoLBalHu',
            featured: false,
            description: 'Rumah Tinggal Gus Iqbal Lirboyo memadukan nuansa klasik elegan dengan konstruksi modern. Menggunakan dinding bata ekspos dan jendela lengkung besar, rumah ini menawarkan estetika mewah dan kokoh, dibangun dengan material premium serta standar keselamatan tinggi.',
            details: ['Dinding Bata Ekspos', 'Jendela Lengkung', 'Material Premium', 'Konstruksi Kokoh']
          },
          {
            title: 'Rumah Tinggal Ning Millah Lirboyo',
            location: 'Kota Kediri, Jawa Timur, Indonesia',
            type: 'residential',
            images: [
              Project4Image1, Project4Image2
            ],
            videoUrl: 'https://www.youtube.com/embed/ZlpIs6LXFv0?si=HCxFBsk67ObdtsTc',
            featured: false,
            description: 'PT Alfa Tata Griya menghadirkan hunian dua lantai dengan arsitektur bergaya klasik modern yang memancarkan kesan mewah, anggun, dan berkelas. Dominasi warna putih pada fasad menciptakan tampilan yang bersih, elegan, sekaligus timeless, sementara detail profil dinding dan kolom-kolom tegas menambah sentuhan estetika yang megah. Pembangunan dilakukan dengan material premium, pengerjaan presisi, serta pengawasan ketat, memastikan rumah ini tidak hanya indah dipandang, tetapi juga kokoh dan nyaman untuk dihuni dalam jangka panjang.',
            details: ['Arsitektur Klasik Modern', 'Material Premium', 'Pengerjaan Presisi', 'Konsep Hunian Timeless']
          },
          {
            title: 'Rumah Bu Lurah Mojoroto',
            location: 'Kediri, Jawa Timur, Indonesia',
            type: 'renovation',
            images: [
              Project5Image1, Project5Image2
            ],
            videoUrl: 'https://www.youtube.com/embed/lhDSxreVqPM?si=VCzFB0VaEezP3gCx',
            featured: false,
            description: 'PT Alfa Tata Griya kembali membuktikan keunggulan dalam membangun hunian modern dengan struktur yang kokoh dan desain arsitektur elegan. Proyek ini sedang dalam tahap pembangunan struktur utama dengan material beton bertulang dan dinding bata ekspos, memastikan kekuatan, ketahanan, dan keamanan bangunan untuk jangka panjang. Setiap detail dikerjakan dengan standar profesional tinggi, pengawasan ketat, serta penerapan sistem keselamatan kerja yang disiplin, menciptakan pondasi yang solid untuk hunian yang nyaman dan prestisius.',
            details: ['Struktur Kokoh', 'Material Beton Bertulang', 'Dinding Bata Ekspos', 'Standar Keselamatan Tinggi']
          },
          {
            title: 'Gedung PKP-RI Kediri',
            location: 'Kediri, Jawa Timur, Indonesia',
            type: 'commercial',
            images: [
              Project6Image1, Project6Image2,Project6Image3, Project6Image4
            ],
            videoUrl: 'https://www.youtube.com/embed/hgCWkoUZjGA?si=XpBjpj90xMkN9B-A',
            featured: false,
            description: 'PT Alfa Tata Griya turut berperan dalam menghadirkan fasilitas publik yang modern, fungsional, dan representatif melalui pembangunan gedung PKP-RI Kediri. Bangunan dua lantai ini menampilkan desain arsitektur minimalis kontemporer, dengan struktur kolom kokoh, area terbuka yang luas, serta akses sirkulasi vertikal yang efisien, menciptakan lingkungan yang nyaman, produktif, dan ramah pengunjung. Pengerjaan dilakukan secara presisi dan profesional, mulai dari penguatan struktur utama hingga penyelesaian detail finishing.',
            details: ['Desain Minimalis Kontemporer', 'Struktur Kolom Kokoh', 'Area Terbuka Luas', 'Sirkulasi Vertikal Efisien']
          },
          {
            title: 'Pembangunan Jalan Blitar',
            location: 'Blitar, Jawa Timur, Indonesia',
            type: 'other',
            images: [
              Project7Image1, Project7Image2
            ],
            videoUrl: 'https://www.youtube.com/embed/hgCWkoUZjGA?si=XpBjpj90xMkN9B-A',
            featured: false,
            description: 'PT Alfa Tata Griya berkomitmen mendukung konektivitas dan kemajuan infrastruktur daerah melalui pembangunan jalan di wilayah Blitar, Jawa Timur. Proyek ini mencakup pengerjaan pengecoran jalan beton yang dilakukan dengan presisi tinggi dan standar kualitas terbaik, demi menciptakan akses transportasi yang lebih lancar, aman, dan tahan lama bagi masyarakat sekitar. Dengan tenaga ahli berpengalaman dan pengawasan ketat di setiap tahap, kami memastikan hasil konstruksi yang kokoh, rapi, dan siap menunjang pertumbuhan ekonomi lokal.',
            details: ['Pengecoran Jalan Beton', 'Presisi Tinggi', 'Akses Transportasi Lancar', 'Dukung Pertumbuhan Ekonomi']
          },
          {
            title: 'Kantor Resor Sintel 7.6 Kediri - KAI',
            location: 'Kediri, East Java, Indonesia',
            type: 'commercial',
            images: [
              Project8Image1, Project8Image2, Project8Image3
            ],
            videoUrl: 'https://www.youtube.com/embed/hgCWkoUZjGA?si=XpBjpj90xMkN9B-A',
            featured: false,
            description: 'PT Alfa Tata Griya plays a role in providing modern, functional, and representative public facilities through the construction of the PKP-RI Kediri building. This two-story building features a contemporary minimalist architectural design, with strong column structures, spacious open areas, and efficient vertical circulation access, creating a comfortable, productive, and visitor-friendly environment. Work is carried out with precision and professionalism, from main structure reinforcement to finishing detail completion.',
            details: ['Contemporary Minimalist Design', 'Strong Column Structures', 'Spacious Open Areas', 'Efficient Vertical Circulation']
          },
          {
            title: 'Proyek Interior',
            location: 'Kediri, East Java, Indonesia',
            type: 'interior',
            images: [
              Project9Image3, Project9Image2, Project9Image1, Project9Image4
            ],
            videoUrl: 'https://www.youtube.com/embed/hgCWkoUZjGA?si=XpBjpj90xMkN9B-A',
            featured: false,
            description: 'PT Alfa Tata Griya plays a role in providing modern, functional, and representative public facilities through the construction of the PKP-RI Kediri building. This two-story building features a contemporary minimalist architectural design, with strong column structures, spacious open areas, and efficient vertical circulation access, creating a comfortable, productive, and visitor-friendly environment. Work is carried out with precision and professionalism, from main structure reinforcement to finishing detail completion.',
            details: ['Contemporary Minimalist Design', 'Strong Column Structures', 'Spacious Open Areas', 'Efficient Vertical Circulation']
          },
          {
            title: 'Rumah Minimalis',
            location: 'Kediri, East Java, Indonesia',
            type: 'residential',
            images: [
              Project10Image1, Project10Image2, Project10Image3, Project10Image4, Project10Image5, Project10Image6
            ],
            videoUrl: 'https://www.youtube.com/embed/hgCWkoUZjGA?si=XpBjpj90xMkN9B-A',
            featured: false,
            description: 'PT Alfa Tata Griya plays a role in providing modern, functional, and representative public facilities through the construction of the PKP-RI Kediri building. This two-story building features a contemporary minimalist architectural design, with strong column structures, spacious open areas, and efficient vertical circulation access, creating a comfortable, productive, and visitor-friendly environment. Work is carried out with precision and professionalism, from main structure reinforcement to finishing detail completion.',
            details: ['Contemporary Minimalist Design', 'Strong Column Structures', 'Spacious Open Areas', 'Efficient Vertical Circulation']
          }
        ]
      },
      pillars: {
        title: 'Pilar Keunggulan Kami',
        subtitle: 'Yang Membedakan Kami dari yang Lain',
        items: [
          {
            title: 'Warisan Terbukti',
            subtitle: '20+ Tahun Kepercayaan',
            description: 'Tiga dekade pengalaman membangun proyek-proyek landmark yang menjadi ikon.'
          },
          {
            title: 'Presisi & Seni',
            subtitle: 'Engineering Meets Design',
            description: 'Perpaduan sempurna antara teknologi konstruksi terdepan dan seni desain yang memukau.'
          },
          {
            title: 'Eksklusivitas dalam Eksekusi',
            subtitle: 'Setiap Proyek adalah Signature',
            description: 'Pendekatan eksklusif untuk setiap klien dengan solusi yang disesuaikan secara personal.'
          },
          {
            title: 'Standar Kelas Dunia',
            subtitle: 'Standar Internasional',
            description: 'Menerapkan standar kualitas internasional dalam setiap aspek konstruksi dan desain.'
          },
          {
            title: 'Kepercayaan sebagai Mata Uang',
            subtitle: 'Kepercayaan sebagai Mata Uang',
            description: 'Membangun hubungan jangka panjang berdasarkan kepercayaan dan hasil yang konsisten.'
          }
        ]
      },
      testimonials: {
        title: 'Cerita Klien',
        subtitle: 'Kepercayaan yang Membangun Warisan',
        items: [
          {
            name: 'Ir. Bambang Sutrisno',
            position: 'CEO, PT Global Manufacturing',
            quote: 'PT.ALFA TATA GRIYA tidak hanya membangun pabrik kami, mereka membangun masa depan bisnis kami. Kualitas dan presisi yang luar biasa.',
            project: 'Global Manufacturing Plant'
          },
          {
            name: 'Sarah Mitchell',
            position: 'Resort Owner, Bali Luxury Resort',
            quote: 'Working with them was like having a master artist create our vision. Every detail exceeded our expectations.',
            project: 'Bali Luxury Resort'
          },
          {
            name: 'Dr. Ahmad Wijaya',
            position: 'Property Developer',
            quote: 'Profesionalisme dan dedikasi mereka terhadap excellence membuat setiap proyek menjadi masterpiece.',
            project: 'Premium Villa Complex'
          }
        ]
      },
      contact: {
        title: 'Mari Bangun Warisan Anda',
        subtitle: 'Mulai Perjalanan Menuju Keunggulan',
        form: {
          name: 'Nama Lengkap',
          location: 'Lokasi Proyek',
          project: 'Jenis Proyek',
          message: 'Pesan',
          submit: 'Kirim Konsultasi'
        },
        info: {
          phone: '+62 812 3305 1832',
          email: 'info@signatureexcellence.com',
          address: 'Jl. Gajah Mada No.99, Kwadungan, Kec. Ngasem, Kabupaten Kediri, Jawa Timur 64182'
        }
      },
      projectTypes: {
        residential: 'Bangun Rumah',
        renovation: 'Renovasi',
        interior: 'Interior',
        exterior: 'Exterior',
        commercial: 'Komersial',
        other: 'Lainnya'
      },
      footer: {
        tagline: "Membangun Warisan, Satu Proyek pada Satu Waktu"
      }
    },
    en: {
      nav: {
        about: 'About Us',
        portfolio: 'Portfolio',
        pillars: 'Our Pillars',
        testimonials: 'Testimonials',
        contact: 'Contact'
      },
      hero: {
        title: 'PT.ALFA TATA GRIYA',
        subtitle: 'The Signature of Excellence',
        description: 'Over 20 years of experience building iconic projects on national and international scales. We don\'t just build, we sign excellence.',
        cta1: 'Explore Our Legacy',
        cta2: 'Consult With Us'
      },
      about: {
        title: 'Our Manifesto',
        subtitle: 'Excellence is not a goal — excellence is identity.',
        description: 'For over three decades, we have been a trusted partner for prestigious projects worldwide. From global-scale factories to luxury resorts in Bali, every project reflects our commitment to integrity, precision, and architectural artistry.',
        values: [
          { title: 'Integrity', desc: 'Uncompromising commitment to quality' },
          { title: 'Precision', desc: 'Perfect detail in every element' },
          { title: 'Artistry', desc: 'Stunning blend of engineering and design' }
        ]
      },
      portfolio: {
        title: 'Our Portfolio',
        subtitle: 'Outstanding Works That Build Legacy',
        projects: [
          {
            title: 'Kediri Airport Hangar Building',
            location: 'Kediri, East Java, Indonesia',
            type: 'commercial',
            images: [
              Project1Image1, Project1Image2, Project1Image3
            ],
            videoUrl: 'https://www.youtube.com/embed/ZrOT-ng35AA?si=eoCLMzYWlg5i-hlE',
            featured: true,
            description: 'The Kediri Airport Hangar is a large-scale project featuring high-standard modern steel construction. Designed to safely and efficiently accommodate and maintain aircraft, it utilizes a robust steel framework and premium materials, prioritizing precision, safety, and timely execution.',
            details: ['Modern Steel Structure', 'Precision Scaffolding System', 'High-Quality Materials', 'Enhanced Safety Standards']
          },
          {
            title: 'Dr. Hermawan\'s House',
            location: 'Pare, Kediri Regency, East Java, Indonesia',
            type: 'renovation',
            images: [
              Project2Image1, Project2Image2
            ],
            videoUrl: 'https://www.youtube.com/embed/eJclzksshqo?si=jEwBXzD31Su2Wc-n',
            featured: false,
            description: 'Dr. Hermawan\'s House showcases an elegant modern minimalist design with wide windows and an open layout. Built with premium materials and precise craftsmanship, it maximizes natural light and ventilation for a comfortable and aesthetically pleasing home.',
            details: ['Area 350m²', '3 Bedrooms', 'Natural Lighting', 'Premium Materials']
          },
          {
            title: 'Gus Iqbal Lirboyo\'s Residence',
            location: 'Kediri City, East Java, Indonesia',
            type: 'residential',
            images: [
              Project3Image1, Project3Image2
            ],
            videoUrl: 'https://www.youtube.com/embed/ZrOT-ng35AA?si=pW95gXCNUoLBalHu',
            featured: false,
            description: 'Gus Iqbal Lirboyo\'s Residence blends classic elegance with modern construction. Featuring exposed brick walls and large arched windows, this home offers timeless luxury and durability, crafted with premium materials and high safety standards.',
            details: ['Exposed Brick Walls', 'Arched Windows', 'Premium Materials', 'Robust Construction']
          },
          {
            title: 'Ning Millah Lirboyo\'s Residence',
            location: 'Kediri City, East Java, Indonesia',
            type: 'residential',
            images: [
              Project4Image1, Project4Image2
            ],
            videoUrl: 'https://www.youtube.com/embed/ZlpIs6LXFv0?si=HCxFBsk67ObdtsTc',
            featured: false,
            description: 'PT Alfa Tata Griya presents a two-story residence with classic modern architecture that radiates luxury, elegance, and class. The dominant white color on the facade creates a clean, elegant, and timeless appearance, while detailed wall profiles and strong columns add a touch of majestic aesthetics. Construction was carried out with premium materials, precise workmanship, and strict supervision, ensuring this house is not only beautiful to look at but also sturdy and comfortable to live in for the long term.',
            details: ['Classic Modern Architecture', 'Premium Materials', 'Precision Workmanship', 'Timeless Living Concept']
          },
          {
            title: 'Village Head Mojoroto\'s House',
            location: 'Kediri, East Java, Indonesia',
            type: 'renovation',
            images: [
              Project5Image1, Project5Image2
            ],
            videoUrl: 'https://www.youtube.com/embed/lhDSxreVqPM?si=VCzFB0VaEezP3gCx',
            featured: false,
            description: 'PT Alfa Tata Griya once again demonstrates excellence in building modern homes with strong structures and elegant architectural designs. This project is in the main structure construction phase using reinforced concrete materials and exposed brick walls, ensuring the building\'s strength, durability, and safety for the long term. Every detail is executed with high professional standards, strict supervision, and disciplined work safety systems, creating a solid foundation for a comfortable and prestigious residence.',
            details: ['Strong Structure', 'Reinforced Concrete Materials', 'Exposed Brick Walls', 'High Safety Standards']
          },
          {
            title: 'PKP-RI Kediri Building',
            location: 'Kediri, East Java, Indonesia',
            type: 'commercial',
            images: [
              Project6Image1, Project6Image2, Project6Image3, Project6Image4
            ],
            videoUrl: 'https://www.youtube.com/embed/hgCWkoUZjGA?si=XpBjpj90xMkN9B-A',
            featured: false,
            description: 'PT Alfa Tata Griya plays a role in providing modern, functional, and representative public facilities through the construction of the PKP-RI Kediri building. This two-story building features a contemporary minimalist architectural design, with strong column structures, spacious open areas, and efficient vertical circulation access, creating a comfortable, productive, and visitor-friendly environment. Work is carried out with precision and professionalism, from main structure reinforcement to finishing detail completion.',
            details: ['Contemporary Minimalist Design', 'Strong Column Structures', 'Spacious Open Areas', 'Efficient Vertical Circulation']
          },
          {
            title: 'Blitar Road Construction',
            location: 'Blitar, East Java, Indonesia',
            type: 'other',
            images: [
              Project7Image1, Project7Image2
            ],
            videoUrl: 'https://www.youtube.com/embed/hgCWkoUZjGA?si=XpBjpj90xMkN9B-A',
            featured: false,
            description: 'PT Alfa Tata Griya is committed to supporting regional connectivity and infrastructure development through road construction in the Blitar area, East Java. This project includes concrete road casting work carried out with high precision and the best quality standards, to create smoother, safer, and more durable transportation access for the local community. With experienced expert personnel and strict supervision at every stage, we ensure sturdy, neat construction results ready to support local economic growth.',
            details: ['Concrete Road Casting', 'High Precision', 'Smooth Transportation Access', 'Support Local Economic Growth']
          },
          {
            title: 'Sintel Resort Office 7.6 Kediri - KAI',
            location: 'Kediri, East Java, Indonesia',
            type: 'commercial',
            images: [
              Project8Image1, Project8Image2, Project8Image3
            ],
            videoUrl: 'https://www.youtube.com/embed/hgCWkoUZjGA?si=XpBjpj90xMkN9B-A',
            featured: false,
            description: 'PT Alfa Tata Griya plays a role in providing modern, functional, and representative public facilities through the construction of the PKP-RI Kediri building. This two-story building features a contemporary minimalist architectural design, with strong column structures, spacious open areas, and efficient vertical circulation access, creating a comfortable, productive, and visitor-friendly environment. Work is carried out with precision and professionalism, from main structure reinforcement to finishing detail completion.',
            details: ['Contemporary Minimalist Design', 'Strong Column Structures', 'Spacious Open Areas', 'Efficient Vertical Circulation']
          },
          {
            title: 'Interior Projects',
            location: 'Kediri, East Java, Indonesia',
            type: 'interior',
            images: [
              Project9Image3, Project9Image2, Project9Image1, Project9Image4
            ],
            videoUrl: 'https://www.youtube.com/embed/hgCWkoUZjGA?si=XpBjpj90xMkN9B-A',
            featured: false,
            description: 'PT Alfa Tata Griya plays a role in providing modern, functional, and representative public facilities through the construction of the PKP-RI Kediri building. This two-story building features a contemporary minimalist architectural design, with strong column structures, spacious open areas, and efficient vertical circulation access, creating a comfortable, productive, and visitor-friendly environment. Work is carried out with precision and professionalism, from main structure reinforcement to finishing detail completion.',
            details: ['Contemporary Minimalist Design', 'Strong Column Structures', 'Spacious Open Areas', 'Efficient Vertical Circulation']
          },
          {
            title: 'Minimalist House',
            location: 'Kediri, East Java, Indonesia',
            type: 'residential',
            images: [
              Project10Image1, Project10Image2, Project10Image3, Project10Image4, Project10Image5, Project10Image6
            ],
            videoUrl: 'https://www.youtube.com/embed/hgCWkoUZjGA?si=XpBjpj90xMkN9B-A',
            featured: false,
            description: 'PT Alfa Tata Griya plays a role in providing modern, functional, and representative public facilities through the construction of the PKP-RI Kediri building. This two-story building features a contemporary minimalist architectural design, with strong column structures, spacious open areas, and efficient vertical circulation access, creating a comfortable, productive, and visitor-friendly environment. Work is carried out with precision and professionalism, from main structure reinforcement to finishing detail completion.',
            details: ['Contemporary Minimalist Design', 'Strong Column Structures', 'Spacious Open Areas', 'Efficient Vertical Circulation']
          }
        ]
      },
      pillars: {
        title: 'Our Pillars of Excellence',
        subtitle: 'What Sets Us Apart',
        items: [
          {
            title: 'Proven Legacy',
            subtitle: '20+ Years of Trust',
            description: 'Three decades of experience building landmark projects that become icons.'
          },
          {
            title: 'Precision & Artistry',
            subtitle: 'Engineering Meets Design',
            description: 'Perfect blend of cutting-edge construction technology and stunning design artistry.'
          },
          {
            title: 'Exclusivity in Execution',
            subtitle: 'Every Project is a Signature',
            description: 'Exclusive approach for each client with personally tailored solutions.'
          },
          {
            title: 'World-Class Standards',
            subtitle: 'International Standards',
            description: 'Applying international quality standards in every aspect of construction and design.'
          },
          {
            title: 'Trust as Currency',
            subtitle: 'Trust as Currency',
            description: 'Building long-term relationships based on trust and consistent results.'
          }
        ]
      },
      testimonials: {
        title: 'Client Stories',
        subtitle: 'Trust that Builds Legacy',
        items: [
          {
            name: 'Ir. Bambang Sutrisno',
            position: 'CEO, PT Global Manufacturing',
            quote: 'PT.ALFA TATA GRIYA didn\'t just build our factory, they built our business future. Extraordinary quality and precision.',
            project: 'Global Manufacturing Plant'
          },
          {
            name: 'Sarah Mitchell',
            position: 'Resort Owner, Bali Luxury Resort',
            quote: 'Working with them was like having a master artist create our vision. Every detail exceeded our expectations.',
            project: 'Bali Luxury Resort'
          },
          {
            name: 'Dr. Ahmad Wijaya',
            position: 'Property Developer',
            quote: 'Their professionalism and dedication to excellence makes every project a masterpiece.',
            project: 'Premium Villa Complex'
          }
        ]
      },
      contact: {
        title: 'Let\'s Build Your Legacy',
        subtitle: 'Start Your Journey to Excellence',
        form: {
          name: 'Full Name',
          location: 'Project Location',
          project: 'Project Type',
          message: 'Message',
          submit: 'Send Consultation'
        },
        info: {
          phone: '+62 812 3305 1832',
          email: 'info@signatureexcellence.com',
          address: 'Gajah Mada Street Number 99, Kwadungan, Ngasem District, Kediri Regency, East Java (64182)'
        }
      },
      projectTypes: {
        residential: 'Residential',
        renovation: 'Renovation',
        interior: 'Interior',
        exterior: 'Exterior',
        commercial: 'Commercial',
        other: 'Other'
      },
      footer: {
        tagline: "Building Legacy, One Project at a Time"
      }
    }
  };

  const t = content[language];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const location = formData.get('location');
    const projectType = formData.get('project');
    const message = formData.get('message');
    
    const projectTypeLabel = t.projectTypes[projectType] || projectType;
    const whatsappMessage = `Halo, saya ${name}. Saya ingin berkonsultasi mengenai proyek ${projectTypeLabel} yang berlokasi ${location}. Pesan: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/6281233051832?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: language === 'id' ? "Berhasil! Anda akan diarahkan ke WhatsApp." : "Success! You will be redirected to WhatsApp.",
      duration: 5000,
    });
  };

  const handleWhatsApp = () => {
    const whatsappUrl = `https://wa.me/6281233051832`;
    window.open(whatsappUrl, '_blank');
  };

  const openProjectModal = (project, index = 0) => {
    setSelectedProject(project);
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    setActiveTab('photos');
  };
  
  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };
  
  const nextImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) => 
        (prev + 1) % selectedProject.images.length
      );
    }
  };
  
  const prevImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) => 
        (prev - 1 + selectedProject.images.length) % selectedProject.images.length
      );
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

// Dalam useEffect untuk filter, ganti dengan:
useEffect(() => {
  if (activeFilter === 'all') {
    setFilteredProjects(t.portfolio.projects);
  } else {
    const filtered = t.portfolio.projects.filter(
      project => project.type.toLowerCase() === activeFilter.toLowerCase()
    );
    setFilteredProjects(filtered);
  }
  // Hapus setVisibleProjects(6) dari sini untuk menghindari flicker
}, [activeFilter, t.portfolio.projects, language]);

// Fungsi loadMoreProjects yang diperbaiki:
const loadMoreProjects = () => {
  setVisibleProjects(prev => prev + 6);
  // Scroll ke bawah sedikit untuk menunjukkan proyek baru yang dimuat
  setTimeout(() => {
    window.scrollBy({ top: 300, behavior: 'smooth' });
  }, 100);
};

// Fungsi handleFilterChange yang diperbaiki:
const handleFilterChange = (filter) => {
  setActiveFilter(filter);
  setVisibleProjects(6);
  
  // Scroll ke section portfolio setelah filter berubah
  setTimeout(() => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 100);
};
  return (
    <>
      <Helmet>
        <title>PT.Alfa Tata Griya - The Signature of Excellence</title>
        <meta name="description" content="Perusahaan konstruksi & interior premium dengan pengalaman 20+ tahun. Membangun proyek ikonik berskala nasional & internasional dengan standar excellence." />
        <meta property="og:title" content="PT.Alfa Tata Griya - The Signature of Excellence" />
        <meta property="og:description" content="Perusahaan konstruksi & interior premium dengan pengalaman 20+ tahun. Membangun proyek ikonik berskala nasional & internasional dengan standar excellence." />
      </Helmet>

      <div className="min-h-screen">
        <motion.div
          className="scroll-indicator"
          style={{ scaleX: scrollYProgress }}
        />

        <nav className="fixed top-0 w-full z-50 glass-effect">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center"
              >
                <img
                  src={logo}
                  alt="PT.Alfa Tata Griya Logo"
                  className="transition-opacity duration-300 w-40 h-32"
                />
              </motion.div>

              <div className="hidden md:flex items-center space-x-8">
                <button onClick={() => scrollToSection('about')} className="text-white hover:text-yellow-400 transition-colors">
                  {t.nav.about}
                </button>
                <button onClick={() => scrollToSection('portfolio')} className="text-white hover:text-yellow-400 transition-colors">
                  {t.nav.portfolio}
                </button>
                <button onClick={() => scrollToSection('pillars')} className="text-white hover:text-yellow-400 transition-colors">
                  {t.nav.pillars}
                </button>
                <button onClick={() => scrollToSection('testimonials')} className="text-white hover:text-yellow-400 transition-colors">
                  {t.nav.testimonials}
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-white hover:text-yellow-400 transition-colors">
                  {t.nav.contact}
                </button>
                
                <button
                  onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
                  className="flex items-center space-x-1 text-white hover:text-yellow-400 transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span>{language.toUpperCase()}</span>
                </button>
              </div>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-white"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="md:hidden bg-slate-900/95 backdrop-blur-lg rounded-lg mt-2 p-4"
              >
                <div className="flex flex-col space-y-4">
                  <button onClick={() => scrollToSection('about')} className="text-white hover:text-yellow-400 transition-colors text-left">
                    {t.nav.about}
                  </button>
                  <button onClick={() => scrollToSection('portfolio')} className="text-white hover:text-yellow-400 transition-colors text-left">
                    {t.nav.portfolio}
                  </button>
                  <button onClick={() => scrollToSection('pillars')} className="text-white hover:text-yellow-400 transition-colors text-left">
                    {t.nav.pillars}
                  </button>
                  <button onClick={() => scrollToSection('testimonials')} className="text-white hover:text-yellow-400 transition-colors text-left">
                    {t.nav.testimonials}
                  </button>
                  <button onClick={() => scrollToSection('contact')} className="text-white hover:text-yellow-400 transition-colors text-left">
                    {t.nav.contact}
                  </button>
                  <button
                    onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
                    className="flex items-center space-x-1 text-white hover:text-yellow-400 transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    <span>{language.toUpperCase()}</span>
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </nav>

        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <motion.div style={{ y }} className="absolute inset-0">
            <img  
              className="w-full h-full object-cover" 
              alt="PT. ALFA TATA GRIYA"
              src="https://images.unsplash.com/photo-1694505455898-48d4676430a3" />
            <div className="absolute inset-0 hero-overlay"></div>
          </motion.div>

          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="font-playfair text-5xl md:text-7xl font-bold mb-6 text-gradient hero-text"
            >
              {t.hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-2xl md:text-3xl font-light mb-8 text-yellow-200"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-300 leading-relaxed"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Button
                onClick={() => scrollToSection('portfolio')}
                className="gold-gradient text-slate-900 hover:opacity-90 px-8 py-4 text-lg font-semibold rounded-full hover-lift"
              >
                {t.hero.cta1}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-full hover-lift"
              >
                {t.hero.cta2}
                <MessageCircle className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <ChevronDown className="w-8 h-8 text-yellow-400" />
          </motion.div>
        </section>

        <section id="about" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-gradient">
                {t.about.title}
              </h2>
              <p className="text-2xl md:text-3xl font-light text-yellow-200 mb-8">
                {t.about.subtitle}
              </p>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                {t.about.description}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {t.about.values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="glass-effect p-8 rounded-2xl hover-lift signature-border"
                >
                  <h3 className="text-2xl font-bold mb-4 text-gradient">{value.title}</h3>
                  <p className="text-gray-300">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-20 px-4 bg-slate-900/50">
  <div className="max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-gradient">
        {t.portfolio.title}
      </h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        {t.portfolio.subtitle}
      </p>
    </motion.div>

    {/* Filter Buttons */}
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      <button
        onClick={() => handleFilterChange('all')}
        className={`px-6 py-2 rounded-full transition-all ${
          activeFilter === 'all'
            ? 'bg-yellow-400 text-slate-900 font-semibold'
            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
        }`}
      >
        {language === 'id' ? 'Semua Proyek' : 'All Projects'}
      </button>
      <button
        onClick={() => handleFilterChange('residential')}
        className={`px-6 py-2 rounded-full transition-all ${
          activeFilter === 'residential'
            ? 'bg-yellow-400 text-slate-900 font-semibold'
            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
        }`}
      >
        {language === 'id' ? 'Residensial' : 'Residential'}
      </button>
      <button
        onClick={() => handleFilterChange('commercial')}
        className={`px-6 py-2 rounded-full transition-all ${
          activeFilter === 'commercial'
            ? 'bg-yellow-400 text-slate-900 font-semibold'
            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
        }`}
      >
        {language === 'id' ? 'Komersial' : 'Commercial'}
      </button>
      <button
        onClick={() => handleFilterChange('renovation')}
        className={`px-6 py-2 rounded-full transition-all ${
          activeFilter === 'renovation'
            ? 'bg-yellow-400 text-slate-900 font-semibold'
            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
        }`}
      >
        {language === 'id' ? 'Renovasi' : 'Renovation'}
      </button>
      <button
        onClick={() => handleFilterChange('interior')}
        className={`px-6 py-2 rounded-full transition-all ${
          activeFilter === 'interior'
            ? 'bg-yellow-400 text-slate-900 font-semibold'
            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
        }`}
      >
        {language === 'id' ? 'Interior' : 'Interior'}
      </button>
      <button
        onClick={() => handleFilterChange('exterior')}
        className={`px-6 py-2 rounded-full transition-all ${
          activeFilter === 'exterior'
            ? 'bg-yellow-400 text-slate-900 font-semibold'
            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
        }`}
      >
        {language === 'id' ? 'Exterior' : 'Exterior'}
      </button>
      <button
        onClick={() => handleFilterChange('other')}
        className={`px-6 py-2 rounded-full transition-all ${
          activeFilter === 'other'
            ? 'bg-yellow-400 text-slate-900 font-semibold'
            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
        }`}
      >
        {language === 'id' ? 'Lainnya' : 'Other'}
      </button>
    </div>

    {/* Featured Projects */}
    {filteredProjects
      .filter(project => project.featured)
      .map((project, index) => (
        <motion.div
          key={`featured-${index}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl overflow-hidden hover-lift cursor-pointer group mb-12"
          onClick={() => openProjectModal(project)}
        >
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-64 lg:h-96 overflow-hidden">
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex space-x-4">
                  <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <Image className="w-6 h-6 text-white" />
                    <span className="text-white text-sm ml-2">{project.images.length}</span>
                  </div>
                  {project.videoUrl && (
                    <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <Video className="w-6 h-6 text-white" />
                    </div>
                  )}
                </div>
              </div>
              <div className="absolute top-4 left-4">
                <span className="text-xs text-yellow-400 bg-yellow-400/20 px-3 py-1 rounded-full">
                  {language === 'id' ? 'Proyek Unggulan' : 'Featured Project'}
                </span>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
              <p className="text-sm text-gray-400 mb-2">{project.location}</p>
              <span className="text-xs text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full mb-4 self-start">
                {project.type}
              </span>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {project.details.slice(0, 4).map((detail, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                    <span className="text-xs text-gray-400">{detail}</span>
                  </div>
                ))}
              </div>
              <button className="text-yellow-400 hover:text-yellow-300 text-sm font-medium flex items-center self-start">
                {language === 'id' ? 'Lihat Detail Proyek' : 'View Project Details'}
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </motion.div>
      ))}

    {/* Regular Projects dengan pagination */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {filteredProjects
        .filter(project => !project.featured)
        .slice(0, visibleProjects)
        .map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl overflow-hidden hover-lift cursor-pointer group"
            onClick={() => openProjectModal(project)}
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex space-x-4">
                  <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <Image className="w-5 h-5 text-white" />
                    <span className="text-white text-sm ml-1">{project.images.length}</span>
                  </div>
                  {project.videoUrl && (
                    <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <Video className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
                <span className="text-xs text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded-full">
                  {project.type}
                </span>
              </div>
              <p className="text-sm text-gray-400 mb-1">{project.location}</p>
              <p className="text-sm text-gray-300 line-clamp-2">{project.description}</p>
            </div>
          </motion.div>
        ))}
    </div>

    {/* Load More Button */}
    {filteredProjects.filter(project => !project.featured).length > visibleProjects && (
      <div className="text-center">
        <Button
          onClick={loadMoreProjects}
          className="gold-gradient text-slate-900 hover:opacity-90 px-8 py-3 text-lg font-semibold rounded-full"
        >
          {language === 'id' ? 'Muat Lebih Banyak' : 'Load More Projects'}
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    )}

    {/* Empty State */}
    {filteredProjects.length === 0 && (
      <div className="text-center py-12">
        <div className="glass-effect p-8 rounded-2xl">
          <Image className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-300 mb-2">
            {language === 'id' ? 'Tidak ada proyek yang ditemukan' : 'No projects found'}
          </h3>
          <p className="text-gray-400">
            {language === 'id' 
              ? 'Coba gunakan filter yang berbeda atau lihat semua proyek.' 
              : 'Try using a different filter or view all projects.'}
          </p>
        </div>
      </div>
    )}
  </div>
</section>

        <section id="pillars" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-gradient">
                {t.pillars.title}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {t.pillars.subtitle}
              </p>
            </motion.div>

            <div className="space-y-8">
              {t.pillars.items.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect p-8 rounded-2xl hover-lift"
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <Award className="w-12 h-12 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-gradient">{pillar.title}</h3>
                      <p className="text-lg text-yellow-200 mb-3">{pillar.subtitle}</p>
                      <p className="text-gray-300 leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 px-4 bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-gradient">
                {t.testimonials.title}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {t.testimonials.subtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {t.testimonials.items.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="glass-effect p-8 rounded-2xl hover-lift"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.position}</p>
                    <p className="text-sm text-yellow-400 mt-1">{testimonial.project}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 px-4 sm:py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gradient">
                {t.contact.title}
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-2">
                {t.contact.subtitle}
              </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-8 sm:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-effect p-6 sm:p-8 rounded-2xl w-full"
              >
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {t.contact.form.name}
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-2xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {t.contact.form.location}
                    </label>
                    <input
                      type="text"
                      name="location"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-2xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {t.contact.form.project}
                    </label>
                    <select
                      name="project"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-2xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white text-sm sm:text-base"
                      required
                    >
                      <option value="">{t.contact.form.project}</option>
                      <option value="residential">{t.projectTypes.residential}</option>
                      <option value="renovation">{t.projectTypes.renovation}</option>
                      <option value="interior">{t.projectTypes.interior}</option>
                      <option value="exterior">{t.projectTypes.exterior}</option>
                      <option value="commercial">{t.projectTypes.commercial}</option>
                      <option value="other">{t.projectTypes.other}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {t.contact.form.message}
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-2xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white text-sm sm:text-base"
                      required
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full gold-gradient text-slate-900 hover:opacity-90 py-3 text-base sm:text-lg font-semibold rounded-2xl hover-lift"
                  >
                    {t.contact.form.submit}
                  </Button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col gap-4 sm:gap-6 w-full"
              >
                <div className="glass-effect p-4 sm:p-6 rounded-2xl hover-lift">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white text-sm sm:text-base">Phone</p>
                      <p className="text-gray-300 text-sm sm:text-base">{t.contact.info.phone}</p>
                    </div>
                  </div>
                </div>

                <div className="glass-effect p-4 sm:p-6 rounded-2xl hover-lift">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white text-sm sm:text-base">Email</p>
                      <p className="text-gray-300 text-sm sm:text-base break-all">{t.contact.info.email}</p>
                    </div>
                  </div>
                </div>

                <div className="glass-effect p-4 sm:p-6 rounded-2xl hover-lift">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white text-sm sm:text-base">Address</p>
                      <p className="text-gray-300 text-sm sm:text-base">{t.contact.info.address}</p>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handleWhatsApp}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-base sm:text-lg font-semibold rounded-2xl hover-lift mt-2"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  WhatsApp Consultation
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        <footer className="bg-slate-900 py-12 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="font-playfair text-2xl font-bold text-gradient mb-4">
              PT.ALFA TATA GRIYA
            </div>
            <p className="text-gray-400 mb-6">
              {t.footer?.tagline || "Building Legacy, One Project at a Time"}
            </p>
            <div className="section-divider"></div>
            <p className="text-gray-500 text-sm">
              © 2025 PT.ALFA TATA GRIYA. All rights reserved.
            </p>
          </div>
        </footer>

        <Toaster />
      </div>

      {isModalOpen && selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4"
          onClick={closeProjectModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-700 flex-shrink-0">
              <div>
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                <p className="text-gray-400">{selectedProject.location}</p>
              </div>
              <button
                onClick={closeProjectModal}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="overflow-y-auto flex-1">
              <div className="p-6">
                <div className="flex space-x-4 mb-6">
                  <button
                    onClick={() => setActiveTab('photos')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeTab === 'photos'
                        ? 'bg-yellow-400 text-slate-900'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    <Image className="w-4 h-4 inline mr-2" />
                    Photos ({selectedProject.images.length})
                  </button>
                  {selectedProject.videoUrl && (
                    <button
                      onClick={() => setActiveTab('video')}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        activeTab === 'video'
                          ? 'bg-yellow-400 text-slate-900'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      <Video className="w-4 h-4 inline mr-2" />
                      Video
                    </button>
                  )}
                </div>

                {activeTab === 'photos' && (
                  <div className="relative mb-6">
                    <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg">
                      <img
                        src={selectedProject.images[currentImageIndex]}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                      />
                      
                      {selectedProject.images.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                          >
                            <ChevronLeft className="w-6 h-6" />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                          >
                            <ChevronRight className="w-6 h-6" />
                          </button>
                        </>
                      )}
                    </div>

                    {selectedProject.images.length > 1 && (
                      <div className="grid grid-cols-4 gap-2 mt-4">
                        {selectedProject.images.map((image, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`relative h-16 sm:h-20 overflow-hidden rounded-lg transition-all ${
                              currentImageIndex === index
                                ? 'ring-2 ring-yellow-400 scale-105'
                                : 'opacity-70 hover:opacity-100'
                            }`}
                          >
                            <img
                              src={image}
                              alt={`Thumbnail ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'video' && selectedProject.videoUrl && (
                  <div className="relative h-64 sm:h-80 md:h-96 mb-6">
                    <iframe
                      src={selectedProject.videoUrl}
                      className="w-full h-full rounded-lg"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                )}

                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Deskripsi Proyek</h4>
                  <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.description}</p>
                  
                  <h4 className="text-lg font-semibold text-white mb-3">Detail Proyek</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {selectedProject.details.map((detail, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-300">{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center space-x-2 mb-6">
                    <span className="text-sm text-gray-400">Tipe Proyek:</span>
                    <span className="text-sm text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full">
                      {selectedProject.type}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-700 flex-shrink-0">
              <Button
                onClick={closeProjectModal}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold"
              >
                Tutup
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default App;