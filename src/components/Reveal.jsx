import { motion } from 'framer-motion'
import { useReducedMotionPreference } from '../hooks/useReducedMotion'
export default function Reveal({ children, className = '', delay = 0, ...props }) {
  const reduce = useReducedMotionPreference()
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 28 }}
    whileInView={reduce ? {} : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.16 }}
    transition={{ duration: .65, delay, ease: [0.22, 1, 0.36, 1] }} {...props}>{children}</motion.div>
}
