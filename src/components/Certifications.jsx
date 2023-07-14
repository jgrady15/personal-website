import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

import { motion } from "framer-motion";
import { styles } from "../styles";
// import { certifications } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import 'react-vertical-timeline-component/style.min.css';

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          My professional qualifications
        </p>
        <h2 className={styles.sectionHeadText}>
          Certifications.
        </h2>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Certifications, "certifications");