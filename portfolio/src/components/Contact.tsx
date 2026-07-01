import { motion } from 'motion/react';
import { AtSign, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-xl px-gutter max-w-container-max mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-xl"
      >
        <h2 className="font-headline-lg text-headline-lg text-on-surface">Get In Touch</h2>
        <div className="w-20 h-1 bg-primary mx-auto mt-xs rounded-full"></div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-lg"
        >
          <form className="space-y-md" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-md">
              <div className="space-y-xs">
                <label className="text-sm font-bold ml-xs text-on-surface">Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-surface-container border-none focus:ring-2 focus:ring-primary/20 rounded-xl p-md transition-all text-on-surface placeholder:text-on-surface-variant/50 outline-none"
                />
              </div>
              <div className="space-y-xs">
                <label className="text-sm font-bold ml-xs text-on-surface">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-surface-container border-none focus:ring-2 focus:ring-primary/20 rounded-xl p-md transition-all text-on-surface placeholder:text-on-surface-variant/50 outline-none"
                />
              </div>
            </div>
            <div className="space-y-xs">
              <label className="text-sm font-bold ml-xs text-on-surface">Message</label>
              <textarea
                rows={4}
                placeholder="How can we collaborate?"
                className="w-full bg-surface-container border-none focus:ring-2 focus:ring-primary/20 rounded-xl p-md transition-all text-on-surface placeholder:text-on-surface-variant/50 outline-none resize-y"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-on-primary py-md rounded-xl font-bold hover:shadow-lg active:scale-[0.98] transition-all cursor-pointer"
            >
              Send Message
            </button>
          </form>

          <div className="flex flex-col gap-md pt-md">
            <div className="flex items-center gap-md">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                <AtSign size={20} />
              </div>
              <span className="text-on-surface-variant">student.dev@university.edu</span>
            </div>
            <div className="flex items-center gap-md">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                <MapPin size={20} />
              </div>
              <span className="text-on-surface-variant">Tech Hub, Hyderabad, India</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="h-full min-h-[300px] rounded-[2rem] overflow-hidden border border-outline-variant/30"
        >
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyYZsfu6kDRER-s_Af-XTZgSYU56d-k_wlep47qAT6ffKKX3peXeDmW1I6iVMKCNv4LxKkTBo3p6z0jzLODnrqqeu33Avz6cJueZq8SzTLNswpP2A90Kn-WVjBSZBQVjHhy4ogvAbZSWThr8DwuQVDro4Cwl_ppEtSDzGRKndF_lq5p4Tl1e7bNXv6EqJmkPpeMiqu53sWR4MZ0zvn9QTUJjMwm4fm0ENL8Wt1Vz6-0RZ1bzJ_7iUdn34OCofn_nX5E-KLHF2r1Q"
            alt="Hyderabad, India"
            className="w-full h-full object-cover grayscale opacity-50 contrast-125 bg-surface-variant"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}
