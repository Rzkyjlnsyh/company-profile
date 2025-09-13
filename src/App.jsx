import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Phone, Mail, MapPin, Star, Award, ChevronDown, Menu, X, Globe, MessageCircle, Play, ChevronLeft, ChevronRight, Image, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';
import logo from './assets/logo.webp'
import Project1Image1 from './assets/projects/project-1/image-1.jpeg';
import Project1Image2 from './assets/projects/project-1/image-2.jpeg';
import Project1Image3 from './assets/projects/project-1/image-3.jpeg';
import Project2Image1 from './assets/projects/project-2/image-1.jpeg';
import Project2Image2 from './assets/projects/project-2/image-2.jpeg';
import Project3Image1 from './assets/projects/project-3/image-1.jpeg';
import Project3Image2 from './assets/projects/project-3/image-2.jpeg';
import Project4Image1 from './assets/projects/project-4/image-1.jpeg';
import Project4Image2 from './assets/projects/project-4/image-2.jpeg';
import Project5Image1 from './assets/projects/project-5/image-1.jpeg';
import Project5Image2 from './assets/projects/project-5/image-2.jpeg';
import Project6Image1 from './assets/projects/project-6/image-1.jpeg';
import Project6Image2 from './assets/projects/project-6/image-2.jpeg';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('id');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('photos');
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

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
        subtitle: 'Excellence is not a goal — excellence is identity.',
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
            title: 'Hanggar Bandara Kediri',
            location: 'Kediri, Jawa Timur , Indonesia',
            type: 'Komersial',
            images: [
              Project1Image1, Project1Image2, Project1Image3
            ],
            videoUrl: 'https://www.youtube.com/embed/ZrOT-ng35AA?si=eoCLMzYWlg5i-hlE',
            featured: true,
            description: 'Resort mewah dengan 150 villa premium yang memadukan arsitektur tradisional Bali dengan teknologi modern. Proyek senilai $50 juta ini menjadi landmark pariwisata internasional.',
            details: ['150 Villa Premium', '5 Tahun Konstruksi', 'Award Winning Design', 'Sustainable Architecture']
          },
          {
            title: 'Rumah dr. Hermawan',
            location: 'Pare Kediri , Jawa Timur , Indonesia',
            type: 'Bangun Rumah',
            images: [
              Project2Image1, Project2Image2
            ],
            videoUrl: 'https://www.youtube.com/embed/eJclzksshqo?si=jEwBXzD31Su2Wc-n',
            featured: false,
            description: 'Rumah tinggal modern dengan desain minimalis dan konsep ruang terbuka yang nyaman untuk keluarga.',
            details: ['Luas 350m²', '3 Kamar Tidur', 'Desain Modern', 'Material Premium']
          },
          {
            title: 'Rumah Tinggal Gus Iqbal Lirboyo',
            location: 'Kota Kediri, Jawa Timur , Indonesia',
            type: 'Renovasi',
            images: [
              Project3Image1, Project3Image2
            ],
            videoUrl: 'https://www.youtube.com/embed/ZrOT-ng35AA?si=pW95gXCNUoLBalHu',
            featured: false,
            description: 'Transformasi total kantor pusat perusahaan dengan konsep workspace modern dan ergonomis.',
            details: ['Luas 2000m²', '3 Lantai', 'Smart Office', 'Green Building']
          },
          {
            title: 'Rumah Tinggal Ning Millah Lirboyo',
            location: 'Kota Kediri , Jawa timur , Indonesia',
            type: 'Interior',
            images: [
              Project4Image1, Project4Image2
            ],
            videoUrl: 'https://www.youtube.com/embed/ZlpIs6LXFv0?si=HCxFBsk67ObdtsTc', // besok
            featured: false,
            description: 'Desain interior apartment premium dengan material imported dan furniture custom design.',
            details: ['Luas 120m²', '2 Bedroom', 'Smart Home', 'Luxury Finish']
          },
          {
            title: 'Bu Lurah Mojoroto',
            location: 'Kediri , Jawa Timur , Indonesia',
            type: 'Exterior',
            images: [
              Project5Image1, Project5Image2
            ],
            videoUrl: 'https://www.youtube.com/embed/lhDSxreVqPM?si=VCzFB0VaEezP3gCx', // besok
            featured: false,
            description: 'Renovasi fasad gedung komersial dengan material glass curtain wall dan aluminium composite panel.',
            details: ['Tinggi 15m', 'Material ACP', 'Curtain Wall', 'LED Lighting']
          },
          {
            title: 'PKP-RI KEDIRI',
            location: 'Kediri , Jawa Timur Indonesia',
            type: 'Komersial',
            images: [
              Project6Image1, Project6Image2
            ],
            videoUrl: 'https://www.youtube.com/embed/hgCWkoUZjGA?si=XpBjpj90xMkN9B-A', // besok
            featured: false,
            description: 'Pembangunan pabrik manufacturing dengan standar internasional dan teknologi terkini.',
            details: ['Luas 5000m²', '2 Shift Operation', 'Automation System', 'Quality Control']
          }
        ]
      },
      pillars: {
        title: 'Pilar Keunggulan Kami',
        subtitle: 'Yang Membedakan Kami dari yang Lain',
        items: [
          {
            title: 'Warisan Terbukti',
            subtitle: '30+ Tahun Kepercayaan',
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
          phone: '+62 813 6664 6664',
          email: 'info@signatureexcellence.com',
          address: 'Jl. Gajah Mada No.99, Kwadungan, Kec. Ngasem, Kabupaten Kediri, Jawa Timur 64182'
        }
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
// content.en.portfolio
portfolio: {
  title: 'Our Portfolio',
  subtitle: 'Outstanding Works That Build Legacy',
  projects: [
    {
      title: 'Hanggar Bandara Kediri', // besok
      location: 'Bali, Indonesia',
      type: 'Commercial',
      images: [
        Project1Image1, Project1Image2, Project1Image3
      ],
      videoUrl: 'https://www.youtube.com/embed/ZrOT-ng35AA?si=eoCLMzYWlg5i-hlE',
      featured: true,
      description: 'A luxurious resort with 150 premium villas blending traditional Balinese architecture with modern technology. This $50 million project is a landmark in international tourism.',
      details: ['150 Premium Villas', '5 Years of Construction', 'Award-Winning Design', 'Sustainable Architecture']
    },
    {
      title: 'Rumah dr. Hermawan',
      location: 'South Jakarta',
      type: 'Residential',
      images: [
        Project2Image1, Project2Image2
      ],
      videoUrl: 'https://www.youtube.com/embed/eJclzksshqo?si=jEwBXzD31Su2Wc-n',
      featured: false,
      description: 'A modern residential house with minimalist design and open space concept, perfect for a family.',
      details: ['Area 350m²', '3 Bedrooms', 'Modern Design', 'Premium Materials']
    },
    {
      title: 'Rumah Tinggal Gus Iqbal Lirboyo',
      location: 'Sudirman, Jakarta',
      type: 'Renovation',
      images: [
        Project3Image1, Project3Image2
      ],
      videoUrl: 'https://www.youtube.com/embed/ZrOT-ng35AA?si=pW95gXCNUoLBalHu',
      featured: false,
      description: 'Total transformation of a corporate headquarters with a modern, ergonomic workspace design.',
      details: ['Area 2000m²', '3 Floors', 'Smart Office', 'Green Building']
    },
    {
      title: 'Rumah Tinggal Ning Millah Lirboyo',
      location: 'Kebayoran Baru',
      type: 'Interior',
      images: [
        Project4Image1, Project4Image2
      ],
      videoUrl: 'https://www.youtube.com/embed/ZlpIs6LXFv0?si=HCxFBsk67ObdtsTc',
      featured: false,
      description: 'Interior design of a premium apartment with imported materials and custom-designed furniture.',
      details: ['Area 120m²', '2 Bedrooms', 'Smart Home', 'Luxury Finish']
    },
    {
      title: 'Bu Lurah Mojoroto',
      location: 'Surabaya',
      type: 'Exterior',
      images: [
        Project5Image1, Project5Image2
      ],
      videoUrl: 'https://www.youtube.com/embed/lhDSxreVqPM?si=VCzFB0VaEezP3gCx',
      featured: false,
      description: 'Facade renovation of a commercial building using glass curtain walls and aluminum composite panels.',
      details: ['Height 15m', 'ACP Material', 'Curtain Wall', 'LED Lighting']
    },
    {
      title: 'PKP-RI',
      location: 'Cikarang, Bekasi',
      type: 'Commercial',
      images: [
        Project6Image1, Project6Image2
      ],
      videoUrl: 'https://www.youtube.com/embed/hgCWkoUZjGA?si=XpBjpj90xMkN9B-A',
      featured: false,
      description: 'Construction of a manufacturing factory with international standards and advanced technology.',
      details: ['Area 5000m²', '2 Shift Operation', 'Automation System', 'Quality Control']
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
          phone: '+62 21 1234 5678',
          email: 'info@signatureexcellence.com',
          address: 'Gajah Mada Street Number 99, Kwadungan, Ngasem District, Kediri Regency, East Java (64182)'
        }
      }
    }
  };

  const t = content[language];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const location = formData.get('location');
    const project = formData.get('project');
    const message = formData.get('message');
    
    // Format pesan untuk WhatsApp
    const whatsappMessage = `Halo, saya ${name}. Saya ingin berkonsultasi mengenai proyek ${project} yang berlokasi ${location}. Pesan: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/6281330229771?text=${encodedMessage}`;

    // Arahkan ke WhatsApp
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Berhasil! Anda akan diarahkan ke WhatsApp.",
      duration: 5000,
    });
  };

  const handleWhatsApp = () => {
    const whatsappUrl = `https://wa.me/6281330229771`;
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

  return (
    <>
      <Helmet>
        <title>PT.ALFA TATA GRIYA - The Signature of Excellence</title>
        <meta name="description" content="Perusahaan konstruksi & interior premium dengan pengalaman 30+ tahun. Membangun proyek ikonik berskala nasional & internasional dengan standar excellence." />
        <meta property="og:title" content="PT.Alfa Tata Griya - The Signature of Excellence" />
        <meta property="og:description" content="Perusahaan konstruksi & interior premium dengan pengalaman 30+ tahun. Membangun proyek ikonik berskala nasional & internasional dengan standar excellence." />
      </Helmet>

      <div className="min-h-screen">
        {/* Scroll Progress Indicator */}
        <motion.div
          className="scroll-indicator"
          style={{ scaleX: scrollYProgress }}
        />

        {/* Navigation */}
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
    className="transition-opacity duration-300"
  />
</motion.div>

              {/* Desktop Navigation */}
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
                
                {/* Language Toggle */}
                <button
                  onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
                  className="flex items-center space-x-1 text-white hover:text-yellow-400 transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span>{language.toUpperCase()}</span>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-white"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Navigation */}
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

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <motion.div style={{ y }} className="absolute inset-0">
            <img  
              className="w-full h-full object-cover" 
              alt="Luxury resort construction project with modern architecture"
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

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <ChevronDown className="w-8 h-8 text-yellow-400" />
          </motion.div>
        </section>

        {/* About Section */}
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

{/* Portfolio Section */}
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

    {/* Featured Project (Full Width) */}
    {t.portfolio.projects
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
                  Featured Project
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
                View Project Details
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </motion.div>
      ))}

    {/* Other Projects Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {t.portfolio.projects
        .filter(project => !project.featured)
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
  </div>
</section>

        {/* Pillars Section */}
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

        {/* Testimonials Section */}
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

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-gradient">
                {t.contact.title}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {t.contact.subtitle}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-effect p-8 rounded-2xl"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {t.contact.form.name}
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-2xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white"
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
                      className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-2xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {t.contact.form.project}
                    </label>
                    <select
                      name="project"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-2xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white"
                      required
                    >
                      <option value="Residential">Bangun Rumah</option>
                      <option value="Commercial">Renovasi</option>
                      <option value="Industrial">Interior</option>
                      <option value="Hospitality">Exterior</option>
                      <option value="Hospitality">Lainnya</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {t.contact.form.message}
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-2xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white"
                      required
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full gold-gradient text-slate-900 hover:opacity-90 py-3 text-lg font-semibold rounded-2xl hover-lift"
                  >
                    {t.contact.form.submit}
                  </Button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className=" grid glass-effect p-8 rounded-2xl content-between"
              >
                <div className="glass-effect p-6 rounded-2xl hover-lift">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-8 h-8 text-yellow-400" />
                    <div>
                      <p className="font-semibold text-white">Phone</p>
                      <p className="text-gray-300">{t.contact.info.phone}</p>
                    </div>
                  </div>
                </div>

                <div className="glass-effect p-6 rounded-2xl hover-lift">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-8 h-8 text-yellow-400" />
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <p className="text-gray-300">{t.contact.info.email}</p>
                    </div>
                  </div>
                </div>

                <div className="glass-effect p-6 rounded-2xl hover-lift">
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-8 h-8 text-yellow-400" />
                    <div>
                      <p className="font-semibold text-white">Address</p>
                      <p className="text-gray-300">{t.contact.info.address}</p>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handleWhatsApp}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold rounded-2xl hover-lift"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  WhatsApp Consultation
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 py-12 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="font-playfair text-2xl font-bold text-gradient mb-4">
            PT.ALFA TATA GRIYA
            </div>
            <p className="text-gray-400 mb-6">
              Building Legacy, One Project at a Time
            </p>
            <div className="section-divider"></div>
            <p className="text-gray-500 text-sm">
              © 2025 PT.ALFA TATA GRIYA. All rights reserved.
            </p>
          </div>
        </footer>

        <Toaster />
      </div>
{/* Project Modal */}
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
      {/* Modal Header */}
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

      {/* Modal Content - Scrollable Area */}
      <div className="overflow-y-auto flex-1">
        <div className="p-6">
          {/* Tabs */}
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

          {/* Content */}
          {activeTab === 'photos' && (
            <div className="relative mb-6">
              <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Arrows */}
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

              {/* Thumbnails */}
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

          {/* Project Details */}
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

            {/* Project Type Badge */}
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-sm text-gray-400">Tipe Proyek:</span>
              <span className="text-sm text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full">
                {selectedProject.type}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Footer */}
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