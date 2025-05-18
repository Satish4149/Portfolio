import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaPaperPlane, FaExclamationTriangle } from 'react-icons/fa';
import { FaTimesCircle } from 'react-icons/fa';

const Contact = ({ setActiveSection }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const contactSection = document.getElementById('contact');
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActiveSection('contact');
        }
      },
      { threshold: 0.5 }
    );

    if (contactSection) observer.observe(contactSection);
    return () => {
      if (contactSection) observer.unobserve(contactSection);
    };
  }, [setActiveSection]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.length < 10) newErrors.message = 'Message should be at least 10 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="text-blue-500 dark:text-blue-400">04.</span> Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-500 dark:bg-blue-400 mb-8 mx-auto"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
            I'll do my best to get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-8"
        >
          {/* Left Contact Info */}
          <div className="md:w-1/3 flex flex-col justify-start bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Prefer This Contact</h3>
            <div>
              <p className="text-gray-600 dark:text-gray-400">Email</p>
              <a href="mailto:yadavsatish1609@gmail.com" className="text-blue-500 hover:underline">yadavsatish1609@gmail.com</a>
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400">Phone</p>
              <a href="tel:+91 6200512804" className="text-blue-500 hover:underline">+91 6200512804</a>
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400">LinkedIn</p>
              <a href="https://www.linkedin.com/in/satish-yadav-367376229/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">linkedin.Satish-Yadav</a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-2/3 bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
            {submitStatus === 'success' ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-red-900 rounded-full mb-4">
                  <FaTimesCircle className="w-8 h-8 text-red-500" />

                </div>
                <div className="text-center p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Contact Form Unavailable
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    The contact form is currently under maintenance. In the meantime, please reach out directly via email.
                  </p>
                  <a
                    href="mailto:yadavsatish1609@gmail.com"
                    className="inline-block px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
                  >
                    Email Me
                  </a>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6">Thank you for reaching out.</p>
                <button onClick={() => setSubmitStatus(null)} className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">Send Another Message</button>
              </motion.div>
            ) : submitStatus === 'error' ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full mb-4">
                  <FaExclamationTriangle className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Submission Failed</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">There was an error. Please try again or contact me directly at the email above.</p>
                <button onClick={() => setSubmitStatus(null)} className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">Try Again</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 md:p-8">
                {['name', 'email'].map((field, idx) => (
                  <div className="mb-6" key={idx}>
                    <label htmlFor={field} className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${errors[field] ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder={`Your ${field}`}
                    />
                    {errors[field] && <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-1 text-sm text-red-500">{errors[field]}</motion.p>}
                  </div>
                ))}
                <div className="mb-8">
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Your message here..."
                  />
                  {errors.message && <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-1 text-sm text-red-500">{errors.message}</motion.p>}
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium ${isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;























