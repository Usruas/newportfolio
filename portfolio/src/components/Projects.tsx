import { motion } from 'motion/react';
import { ExternalLink, Code, Link as LinkIcon } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'TaskMaster Dashboard',
      description: 'A high-performance project tracker with real-time collaboration features and drag-and-drop Kanban boards.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7XhtU3IyrENHvOsupHgR9w_7UmZuomlzgZ1Ce0KGJMlAIZYz9EJcrzrwdbh1z1JOSTI7ADHCmfzzpKOu5-Tz557o39YWNJhDv1lUmNvTrX8sjBsh-emcMAKfcf8KinsMIw_8yHB7ySBdFfWuETgPZiuQYe65UbjS9V32GgQxtKw7ifIhvNCe3D9fCQvfJnAG5CifPZ93OBvyX6npKoF1vc2Le3Mbty6oTM4OAKsFcoy0eqdkLPY7kGQq5jCPRUzxwJT_tuB6pwA',
      tags: ['React', 'Firebase'],
      links: [
        { label: 'Live Demo', url: '#', icon: ExternalLink },
        { url: '#', icon: Code },
      ]
    },
    {
      title: 'Iris Classifier Pro',
      description: 'A machine learning model for multiclass classification with a Streamlit interface for interactive predictions.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWI2md7JxLZ1_0Zb7de2F_HWMqpXhONfI2Rt4uBOdLIE_nUUpqzQGu0yaHsFba4m2TtArB5NwvASpUrzSROPMjuRRhzEAVg6Bfnp2BxVxpgty0D6aPl_0MkhZ3llCz41MYzGU_BkKtsNaTZI0fIVIjfMj5PeTAIHZ4ikI2uZ26AUZ-TmM3XT9XZCJJzIKv5Qd2ZDZ6f7us3hrJ5t2fuG4y_AArz3HBKAsSQBpn86S12mq3R9Foh062UBVkH5A0A1NAVl3LoYhiXA',
      tags: ['Python', 'Scikit'],
      links: [
        { label: 'Live Demo', url: '#', icon: ExternalLink },
        { url: '#', icon: Code },
      ]
    },
    {
      title: 'TechStore API',
      description: 'A robust RESTful API backend for an e-commerce platform with JWT authentication and Stripe integration.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9XFe-8ty-LTKhrsht0nS-exNj-X4xY9_Uct81_W-WKZKzgK3H7JCaIQXg_eeLim9q0wDl1Pq-R8zvlpX7upxs8f_CEuK4uJVhpIwmBJaFurN0FWXR37ob5C7A1oo4qDk3T7LkDJSLtNHFZEy8s6k1f0D3eVViaCGUtNMP7_3Gmsvurl19FnU8JErrSxDPq5cPuDz6cJ-e0GjBxsR-SXRvoMr8tBv4mDz0C85_aM5J2vsa8On9L0bQIqEpxU2rOpx7D6gYic07Tg',
      tags: ['Node.js'],
      links: [
        { label: 'GitHub', url: '#', icon: LinkIcon },
      ]
    },
    {
      title: 'Portfolio v1',
      description: 'My first personal portfolio built using pure HTML/CSS and minimal JavaScript for animations.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkL2YOR_34nbL2dxpY1PWXuADwq89cFSEHEXdbi4pvZWX-Xa76tWZRebDZG_qW96PfotL0F7A6tHcrDbELD1a0BW8Iz5eQsGqDht9L6gSSu7eAJJiibUkf_E4BJX1bs5ZMVIjU79reDuWfPd5UCbhzVH9cjNtLJEcXUf43QgfKtLvXDn8DskVZg6jBFDMJ1jvMQJWROX6zduel4hkwZdH5dPXAW3g6bYU5_YWUf2K_eTCw83MKv7xjFzQpx5Bpz0nrUDT4hrbZVA',
      tags: [],
      links: [
        { label: 'Live Demo', url: '#', icon: ExternalLink },
      ]
    },
    {
      title: 'CryptoTracker',
      description: 'Real-time cryptocurrency price tracker using CoinGecko API and Chart.js for data visualization.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVnvOKVnff3hUFDedbYdZ6jxUzcWaBqaHcvcdZ_UkwY7qAeR3mltYvJuUhs0bHOVWXo6Ahj1x_2bDIawvDx-Rb6qy5ncN21RmhoS2h6mooq_PSXxpEnf6Ndrz5RP5vpEppNLjH0F_94fjU42kmRFqA3EEkemPoXbnNk60zSKEUn1aFow5A9iMf7WRNBLWaQXbTA_4ByQvuBHbR9RK8MjY0kUefjbLKcnYEFMTY4iJqiQrmjX8hGRCgJ4iMB1pvZ6_E5D970MR8Pw',
      tags: [],
      links: [
        { label: 'GitHub', url: '#', icon: LinkIcon },
      ]
    },
    {
      title: 'ConnectChat',
      description: 'A simple real-time chat application using Socket.io and Express for instant messaging.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVzGaNDOxhPmjM_Qm2_JIKPKR5iyjTYWnmzlqvyOr9JFRLn9UzSQjjUUSmGod_1fNjqSdXNQSEod2mX3T-hh5lj6eYQectMYn4Ihb_j80J7abAZjrJVzLGPxZmPQhDmhiTJ7kpUH-JvBsXtFJDpprg6ADIMpUD1E_yrXlJmqQNjcOSsc70ryKrDZWOASqpru-pZFx2-CPL0IsAP0uhdW3RTtCIzlHL_bA-JWFKiZZu6LtiF5XL6k6Umx1usgd_RW8SxYMsb50cIQ',
      tags: [],
      links: [
        { label: 'GitHub', url: '#', icon: LinkIcon },
      ]
    }
  ];

  return (
    <section id="projects" className="py-xl bg-surface-container-lowest dark:bg-surface-container-low px-gutter">
      <div className="max-w-container-max mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-xl"
        >
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Recent Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-xs rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-surface rounded-2xl border border-outline-variant/30 overflow-hidden hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl flex flex-col"
            >
              <div className="relative h-48 shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover bg-surface-variant"
                  referrerPolicy="no-referrer"
                />
                {project.tags.length > 0 && (
                  <div className="absolute top-4 left-4 flex gap-xs flex-wrap">
                    {project.tags.map(tag => (
                      <span key={tag} className="glass-tag px-sm py-xs rounded-full text-white text-xs font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="p-md flex flex-col flex-1">
                <h3 className="font-bold text-lg mb-xs text-on-surface">{project.title}</h3>
                <p className="text-on-surface-variant text-sm mb-md line-clamp-2 flex-1">{project.description}</p>
                <div className="flex justify-between items-center mt-auto">
                  {project.links.map((link, i) => {
                    const Icon = link.icon;
                    if (link.label) {
                      return (
                        <a key={i} href={link.url} className="text-primary font-bold text-sm flex items-center gap-xs hover:underline">
                          {link.label} <Icon size={16} />
                        </a>
                      );
                    }
                    return (
                      <a key={i} href={link.url} className="text-on-surface-variant hover:text-primary transition-colors p-2 -mr-2 rounded-full">
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
