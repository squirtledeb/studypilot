import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Phone,
  CheckCircle,
  Star,
  BookOpen,
  Users,
  Trophy,
  Clock,
  GraduationCap,
  School,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import DiscoverButton from "@/components/ui/discover-button";
import Navbar from "@/components/ui/navbar";

const AnimatedSection = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const PulseButton = ({
  children,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Button
      onClick={onClick}
      className={`relative overflow-hidden before:absolute before:inset-0 before:bg-white/20 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 ${className}`}
    >
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-white/10 rounded-md"
      />
      {children}
    </Button>
  </motion.div>
);

const HeroSection = () => (
  <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-100">
    <div
      className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMGI5ODEiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-50"
      style={{ top: "34px" }}
    />

    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col items-center justify-center text-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <h1 className="text-7xl font-bold text-gray-900 mb-4">StudyPilot</h1>
            <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400 sm:text-4xl md:text-5xl mb-4">
              Unlock Your Full Academic Potential
            </p>
            <p className="text-4xl font-semibold text-gray-700 sm:text-5xl mb-6">
              With a tutor that cares
            </p>
            <p className="mx-auto max-w-3xl text-lg text-gray-500 mb-12 leading-relaxed">
              Expert tutor in{' '}
              <span className="relative inline-block align-baseline">
                20+ subjects
                <svg
                  viewBox="0 0 110 8"
                  width="110"
                  height="8"
                  className="absolute left-0 w-full h-2 bottom-[-2px]"
                  aria-hidden="true"
                >
                  <line x1="0" y1="6" x2="110" y2="6" stroke="#e3342f" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>{' '}
              <br />
              1-on-1 lessons tailored to how you learn best — no cookie-cutter teaching here.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center mb-16"
          >
            <DiscoverButton />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="w-full flex justify-center"
        >
          <div className="flex justify-center items-center space-x-8 text-emerald-600">
            <div className="flex items-center space-x-2"></div>
            <div className="flex items-center space-x-2"></div>
            <div className="flex items-center space-x-2"></div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="about" className="pt-8 pb-16 bg-white scroll-mt-24">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Your <span className="text-emerald-600">Dedicated Tutor</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Run by experienced educators who understand the Ontario curriculum
            inside and out.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-xl border-0 bg-gradient-to-br from-emerald-50 to-white">
            <CardContent className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6 items-center mb-6">
                <div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-40 h-40 mx-auto bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl"
                  >
                    <img
                      src="/profile.jpg"
                      alt="Profile"
                      className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg"
                    />
                  </motion.div>
                </div>

                <div className="text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Kian Shahbaz
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-start space-x-3">
                      <BookOpen className="w-6 h-6 text-emerald-600" />
                      <span className="text-gray-700 text-lg">
                        TMU Software Engineering Graduate
                      </span>
                    </div>
                    <div className="flex items-center justify-start space-x-3">
                      <Star className="w-6 h-6 text-emerald-600" />
                      <span className="text-gray-700 text-lg">GPA 3.85</span>
                    </div>
                    <div className="flex items-center justify-start space-x-3">
                      <Clock className="w-6 h-6 text-emerald-600" />
                      <span className="text-gray-700 text-lg">
                        3000+ Tutoring Hours
                      </span>
                    </div>
                    <div className="flex items-center justify-start space-x-3">
                      <Users className="w-6 h-6 text-emerald-600" />
                      <span className="text-gray-700 text-lg">
                        20+ Subjects Expertise
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                  About Me
                </h3>
                <p className="text-gray-600 leading-relaxed text-left text-sm">
                  My name is Kian. I am a TMU Software Engineering Bachelor
                  graduate with a cumulative GPA of 3.85. I have over 10
                  years of experience in Tutoring. I have tutored students
                  from various ages, backgrounds, and personality traits for
                  a total of over 3000 hours. I have worked with Tutoring
                  companies such as Tutor Doctor, TutorBright, and also as
                  an independent Tutor. I am available for the population of
                  Richmond Hill, Markham, and York Region (depending on
                  Distance).
                </p>
              </div>
              
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-emerald-700 mb-3 text-center">
                  Our Philosophy
                </h3>
                <p className="text-emerald-800 leading-relaxed text-center text-sm">
                  "Every student learns differently. That's why we create
                  personalized learning experiences that adapt to your unique
                  style, pace, and goals."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

const ServicesSection = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Grade 1-10",
      tagline: "Core Foundations",
      subjects: [
        "Mathematics",
        "Science",
      ],
    },
    {
      icon: BookOpen,
      title: "Grade 11-12",
      tagline: "Advanced Preparation",
      subjects: [
        "All Math Courses",
        "All Physics Courses",
        "All Chemistry Courses",
        "All Computer Science Courses",
      ],
    },
    {
      icon: School,
      title: "1st & 2nd Year University-level",
      tagline: "University Success",
      subjects: [
        "All Math Courses",
        "All Physics Courses",
        "All Computer Science Courses",
        "All Chemistry Courses",
      ],
    },
  ];

  return (
    <section id="services" className="pt-28 pb-20 gradient-secondary">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-emerald-600">The courses I cover:</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Proven results in weeks, not semesters
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h3>
                      <p className="mb-4 font-semibold text-emerald-700 text-lg">
                        {service.tagline}
                      </p>
                      <ul className="text-left mx-auto max-w-xs space-y-2">
                        {service.subjects.map((subject, subIndex) => (
                          <li key={subIndex} className="text-emerald-700 font-medium pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-emerald-400">
                            {subject}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

const ResultsSection = () => {
  const testimonials = [
    {
      name: "Student A",
      grade: "Grade X",
      subject: "Subject",
      improvement: "From XX% to YY%",
      quote:
        "This is a sample testimonial. The tutor's teaching style made a big difference!",
      rating: 5,
    },
    {
      name: "Student B",
      grade: "Grade Y",
      subject: "Subject",
      improvement: "From XX% to YY%",
      quote:
        "Another sample testimonial. I actually understand the concepts now!",
      rating: 5,
    },
    {
      name: "Student C",
      grade: "Grade Z",
      subject: "Subject",
      improvement: "From XX% to YY%",
      quote:
        "My skills improved dramatically. The tutor taught me how to think critically!",
      rating: 5,
    },
  ];

  return (
    <section id="results" className="pt-28 pb-20 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-emerald-600">Proven Results</span> That
              Speak Volumes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Over 95% of our students report higher confidence and improved performance after just one month
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-gradient-to-br from-emerald-50 to-white shadow-lg hover:shadow-xl transition-all duration-300 border-emerald-100">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="text-center mb-6">
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <div className="text-3xl font-bold text-emerald-600 mb-2">
                        {testimonial.improvement}
                      </div>
                      <div className="text-gray-500 text-sm">
                        in {testimonial.subject}
                      </div>
                    </div>
                    <blockquote className="text-gray-700 italic mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="text-center mt-auto">
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-500 text-sm">
                        {testimonial.grade}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div>
                <div className="text-4xl font-bold text-emerald-600 mb-2">
                  98%
                </div>
                <div className="text-gray-600">Grade Improvement</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-600 mb-2">
                  3000+
                </div>
                <div className="text-gray-600">Tutoring Hours</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-600 mb-2">
                  20+
                </div>
                <div className="text-gray-600">Subjects Covered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-600 mb-2">
                  100%
                </div>
                <div className="text-gray-600">Student Satisfaction</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section id="contact" className="py-20 gradient-primary text-white">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Grades?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Take the first step towards academic excellence. Call now to know more.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a
              href="tel:+1234567890"
              className="inline-flex items-center space-x-3 bg-white text-emerald-600 px-8 py-4 rounded-lg font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Phone className="w-6 h-6" />
              <span>(123) 456-7890</span>
            </a>
          </motion.div>

          <div className="mt-8 text-center opacity-75">
            <p className="text-lg">Available Monday - Friday, 9 AM - 9 PM</p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-900 text-white py-8">
    <div className="container mx-auto px-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4 text-emerald-400">StudyPilot</h3>
        <p className="text-gray-400 mb-4">
          Unlock Your Full Academic Potential
        </p>
        <div className="text-gray-500 text-sm">
          © 2024 StudyPilot. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
);

export default function Index() {
  useEffect(() => {
    // Add Inter font
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ResultsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
