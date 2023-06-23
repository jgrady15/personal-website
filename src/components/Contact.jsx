import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {}
  const handleSubmit = (e) => {}

  return (

    // Code for Contact Form
    <div className="xl: mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        
        {/* Header and Descriptor */}
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* Contact Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Name</span>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Enter your name..." className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Email</span>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email goes here..." className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Message</span>
            <textarea rows="7" name="message" value={form.message} onChange={handleChange} placeholder="Be yourself! Enter in something funny or memorable..." className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />
          </label>
        </form>

        {/* Submit Button */}
        <button type="submit" className="bg-tertiary py-3 px-8 mt-5 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
          {loading ? 'Sending...' : 'Send'}
        </button>
      </motion.div>

      {/* Code for Planet */}
      <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");