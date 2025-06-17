import { motion } from "framer-motion";
import { useState } from "react";


export default function Test() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showFront,setShowFront] =useState(true);

  return (
    <div className="flip-card-container">
      <motion.div
        className="flip-card"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front Side */}
        { showFront&&(
         <motion.div
          className="flip-card-front"
          initial={false}
          animate={{ opacity: isFlipped ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <h3>Front Content</h3>
          <p>This is the front of the card</p>
        </motion.div>)
        }
        

        {/* Back Side */}
        {!showFront&&(<motion.div
          className="flip-card-back"
          initial={{ opacity: 0 }}
          animate={{ 
            rotateY: isFlipped ? 0 : 180,
            opacity: isFlipped ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <h3>Back Content</h3>
          <p>This is the back of the card</p>
        </motion.div>)}
        
      </motion.div>

      <button 
        className="flip-button"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {isFlipped ? "Show Front" : "Show Back"}
      </button>
    </div>
  );
}