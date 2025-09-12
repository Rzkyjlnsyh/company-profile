import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Phone, Mail, MapPin, Star, Award, Users, Building, ChevronDown, Menu, X, Globe, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('id');
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
        title: 'The Signature of Excellence',
        subtitle: 'Every Build, A Legacy.',
        description: 'Lebih dari 30 tahun pengalaman membangun proyek-proyek ikonik berskala nasional dan internasional. Kami tidak sekadar membangun, kami menandatangani keunggulan.',
        cta1: 'Jelajahi Legacy Kami',
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
        title: 'Signature of The Month',
        subtitle: 'Proyek Unggulan yang Menjadi Legacy',
        featured: {
          title: 'Bali Luxury Resort',
          description: 'Resort mewah dengan 150 villa premium yang memadukan arsitektur tradisional Bali dengan teknologi modern. Proyek senilai $50 juta ini menjadi landmark pariwisata internasional.',
          details: ['150 Villa Premium', '5 Tahun Konstruksi', 'Award Winning Design', 'Sustainable Architecture']
        },
        projects: [
          { title: 'Global Manufacturing Plant', location: 'Jakarta', type: 'Industrial' },
          { title: 'Premium Villa Complex', location: 'Bali', type: 'Residential' },
          { title: 'International Hotel', location: 'Singapore', type: 'Hospitality' },
          { title: 'Corporate Headquarters', location: 'Surabaya', type: 'Commercial' }
        ]
      },
      pillars: {
        title: 'Pilar Keunggulan Kami',
        subtitle: 'Yang Membedakan Kami dari yang Lain',
        items: [
          {
            title: 'Proven Legacy',
            subtitle: '30+ Tahun Kepercayaan',
            description: 'Tiga dekade pengalaman membangun proyek-proyek landmark yang menjadi ikon.'
          },
          {
            title: 'Precision & Artistry',
            subtitle: 'Engineering Meets Design',
            description: 'Perpaduan sempurna antara teknologi konstruksi terdepan dan seni desain yang memukau.'
          },
          {
            title: 'Exclusivity in Execution',
            subtitle: 'Setiap Proyek adalah Signature',
            description: 'Pendekatan eksklusif untuk setiap klien dengan solusi yang disesuaikan secara personal.'
          },
          {
            title: 'World-Class Standards',
            subtitle: 'Standar Internasional',
            description: 'Menerapkan standar kualitas internasional dalam setiap aspek konstruksi dan desain.'
          },
          {
            title: 'Trust as Currency',
            subtitle: 'Kepercayaan sebagai Mata Uang',
            description: 'Membangun hubungan jangka panjang berdasarkan kepercayaan dan hasil yang konsisten.'
          }
        ]
      },
      testimonials: {
        title: 'Client Stories',
        subtitle: 'Kepercayaan yang Membangun Legacy',
        items: [
          {
            name: 'Ir. Bambang Sutrisno',
            position: 'CEO, PT Global Manufacturing',
            quote: 'The Signature of Excellence tidak hanya membangun pabrik kami, mereka membangun masa depan bisnis kami. Kualitas dan presisi yang luar biasa.',
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
        title: 'Let\'s Build Your Legacy',
        subtitle: 'Mulai Perjalanan Menuju Keunggulan',
        form: {
          name: 'Nama Lengkap',
          email: 'Email',
          message: 'Pesan',
          submit: 'Kirim Konsultasi'
        },
        info: {
          phone: '+62 21 1234 5678',
          email: 'info@signatureexcellence.com',
          address: 'Jakarta Design Center, Indonesia'
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
        title: 'The Signature of Excellence',
        subtitle: 'Every Build, A Legacy.',
        description: 'Over 30 years of experience building iconic projects on national and international scales. We don\'t just build, we sign excellence.',
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
        title: 'Signature of The Month',
        subtitle: 'Featured Projects that Become Legacy',
        featured: {
          title: 'Bali Luxury Resort',
          description: 'Luxury resort with 150 premium villas combining traditional Balinese architecture with modern technology. This $50 million project has become an international tourism landmark.',
          details: ['150 Premium Villas', '5 Years Construction', 'Award Winning Design', 'Sustainable Architecture']
        },
        projects: [
          { title: 'Global Manufacturing Plant', location: 'Jakarta', type: 'Industrial' },
          { title: 'Premium Villa Complex', location: 'Bali', type: 'Residential' },
          { title: 'International Hotel', location: 'Singapore', type: 'Hospitality' },
          { title: 'Corporate Headquarters', location: 'Surabaya', type: 'Commercial' }
        ]
      },
      pillars: {
        title: 'Our Pillars of Excellence',
        subtitle: 'What Sets Us Apart',
        items: [
          {
            title: 'Proven Legacy',
            subtitle: '30+ Years of Trust',
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
            quote: 'The Signature of Excellence didn\'t just build our factory, they built our business future. Extraordinary quality and precision.',
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
          email: 'Email',
          message: 'Message',
          submit: 'Send Consultation'
        },
        info: {
          phone: '+62 21 1234 5678',
          email: 'info@signatureexcellence.com',
          address: 'Jakarta Design Center, Indonesia'
        }
      }
    }
  };

  const t = content[language];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Format pesan untuk WhatsApp
    const whatsappMessage = `Halo, saya ${name}. Email: ${email}. Pesan: ${message}`;
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
        <title>The Signature of Excellence - Premium Construction & Interior</title>
        <meta name="description" content="Perusahaan konstruksi & interior premium dengan pengalaman 30+ tahun. Membangun proyek ikonik berskala nasional & internasional dengan standar excellence." />
        <meta property="og:title" content="The Signature of Excellence - Premium Construction & Interior" />
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
                className="font-playfair text-xl font-bold text-gradient"
              >
                The Signature of Excellence
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

            {/* Featured Project */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-effect rounded-3xl overflow-hidden mb-16 hover-lift"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img  
                    className="w-full h-full object-cover" 
                    alt="Bali luxury resort with traditional architecture and modern amenities"
                   src="https://images.unsplash.com/photo-1671372777043-5c46a3c047db" />
                </div>
                <div className="p-8 lg:p-12">
                  <h3 className="font-playfair text-3xl font-bold mb-4 text-gradient">
                    {t.portfolio.featured.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {t.portfolio.featured.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {t.portfolio.featured.details.map((detail, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Star className="w-5 h-5 text-yellow-400" />
                        <span className="text-sm text-gray-300">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Other Projects */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.portfolio.projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect p-6 rounded-2xl hover-lift"
                >
                  <Building className="w-8 h-8 text-yellow-400 mb-4" />
                  <h4 className="text-lg font-bold mb-2 text-white">{project.title}</h4>
                  <p className="text-sm text-gray-400 mb-1">{project.location}</p>
                  <p className="text-sm text-yellow-400">{project.type}</p>
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
                      className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {t.contact.form.email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {t.contact.form.message}
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white"
                      required
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full gold-gradient text-slate-900 hover:opacity-90 py-3 text-lg font-semibold rounded-lg hover-lift"
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
                className="space-y-8"
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
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold rounded-lg hover-lift"
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
              The Signature of Excellence
            </div>
            <p className="text-gray-400 mb-6">
              Building Legacy, One Project at a Time
            </p>
            <div className="section-divider"></div>
            <p className="text-gray-500 text-sm">
              © 2024 The Signature of Excellence. All rights reserved.
            </p>
          </div>
        </footer>

        <Toaster />
      </div>
    </>
  );
}

export default App;