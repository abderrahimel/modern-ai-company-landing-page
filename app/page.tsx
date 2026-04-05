'use client'

import { motion } from 'framer-motion'
import { 
  Brain, 
  Zap, 
  BarChart3, 
  Shield, 
  Users, 
  ArrowRight,
  Star,
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin
} from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-primary-600" />
              <span className="text-2xl font-bold gradient-text">NeuralFlow AI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-primary-600 transition-colors">Features</a>
              <a href="#about" className="text-gray-700 hover:text-primary-600 transition-colors">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-primary-600 transition-colors">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors">Contact</a>
              <button className="btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              The Future of
              <span className="gradient-text block">Intelligent Automation</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Transform your business with cutting-edge AI technology. Automate processes, 
              analyze data, and unlock insights that drive growth and innovation.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="btn-primary flex items-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="btn-secondary">Watch Demo</button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Lightning Fast</h3>
                  <p className="text-gray-600">Process data 10x faster than traditional methods</p>
                </div>
                <div className="text-center">
                  <div className="bg-accent-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-accent-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Smart Analytics</h3>
                  <p className="text-gray-600">AI-powered insights from your data</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Enterprise Security</h3>
                  <p className="text-gray-600">Bank-level security for your data</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful AI <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive AI platform provides everything you need to automate, 
              analyze, and optimize your business operations.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Brain,
                title: "Machine Learning",
                description: "Advanced ML algorithms that learn and adapt to your business patterns for optimal performance.",
                color: "primary"
              },
              {
                icon: Zap,
                title: "Process Automation",
                description: "Automate repetitive tasks and workflows to increase efficiency and reduce human error.",
                color: "accent"
              },
              {
                icon: BarChart3,
                title: "Predictive Analytics",
                description: "Forecast trends and outcomes with AI-powered predictive models and data analysis.",
                color: "green"
              },
              {
                icon: Users,
                title: "Natural Language Processing",
                description: "Understand and process human language for chatbots, sentiment analysis, and more.",
                color: "blue"
              },
              {
                icon: Shield,
                title: "Anomaly Detection",
                description: "Identify unusual patterns and potential threats in real-time with intelligent monitoring.",
                color: "red"
              },
              {
                icon: ArrowRight,
                title: "API Integration",
                description: "Seamlessly integrate with existing systems through our robust and flexible API.",
                color: "purple"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-50 rounded-xl p-8 card-hover"
              >
                <div className={`bg-${feature.color}-100 rounded-full w-16 h-16 flex items-center justify-center mb-6`}>
                  <feature.icon className={`h-8 w-8 text-${feature.color}-600`} />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Revolutionizing Business with 
                <span className="gradient-text block">Artificial Intelligence</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                NeuralFlow AI is at the forefront of artificial intelligence innovation. 
                Our platform combines cutting-edge machine learning algorithms with 
                intuitive design to make AI accessible to businesses of all sizes.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Founded by a team of AI researchers and industry experts, we're committed 
                to democratizing artificial intelligence and helping organizations unlock 
                the full potential of their data.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
                  <div className="text-gray-600">Companies Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">99.9%</div>
                  <div className="text-gray-600">Uptime Guarantee</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">50M+</div>
                  <div className="text-gray-600">Data Points Processed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
                  <div className="text-gray-600">Expert Support</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center">
                      <Brain className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Advanced AI Models</h4>
                      <p className="text-gray-600 text-sm">State-of-the-art neural networks</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-accent-100 rounded-full w-12 h-12 flex items-center justify-center">
                      <Zap className="h-6 w-6 text-accent-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Real-time Processing</h4>
                      <p className="text-gray-600 text-sm">Instant insights and automation</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Enterprise Security</h4>
                      <p className="text-gray-600 text-sm">SOC 2 compliant infrastructure</p>
                    </div>
                  </div>
                </div>
              </div>
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-accent-500 rounded-full w-24 h-24 flex items-center justify-center text-white font-bold text-lg shadow-lg"
              >
                AI
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join hundreds of companies that trust NeuralFlow AI to power their intelligent automation.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Sarah Chen",
                role: "CTO, TechCorp",
                content: "NeuralFlow AI transformed our data processing capabilities. We've seen a 300% increase in efficiency and our team can now focus on strategic initiatives.",
                rating: 5
              },
              {
                name: "Michael Rodriguez",
                role: "VP Operations, GlobalManufacturing",
                content: "The predictive analytics have been game-changing for our supply chain. We can now anticipate issues before they occur and optimize our operations.",
                rating: 5
              },
              {
                name: "Emily Johnson",
                role: "Head of Analytics, FinanceFirst",
                content: "Implementation was seamless and the ROI was immediate. The AI insights have helped us make better decisions and reduce operational costs by 40%.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-50 rounded-xl p-8 card-hover"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get <span className="gradient-text">Started?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform your business with AI today. Contact our team to learn how 
              NeuralFlow AI can help you achieve your goals.
            </p>
            <button className="btn-primary text-lg px-12 py-4">
              Start Your AI Journey
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <Mail className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Email Us</h3>
              <p className="text-gray-600">hello@neuralflow.ai</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <Phone className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Call Us</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <MapPin className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
              <p className="text-gray-600">San Francisco, CA</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-8 w-8 text-primary-400" />
                <span className="text-2xl font-bold">NeuralFlow AI</span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering businesses with intelligent automation and AI-driven insights.
              </p>
              <div className="flex space-x-4">
                <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Github className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 NeuralFlow AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
