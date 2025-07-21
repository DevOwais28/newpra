import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import demoVideoAsset from '../assets/videoplayback.mp4'

const AppIntroVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="relative font-sans overflow-hidden">
      <div className="relative py-20 sm:py-24 bg-gradient-to-r from-purple-900 via-blue-900 to-green-900">
        <div className="relative z-10 container mx-auto max-w-5xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-neutral-900/95 via-neutral-800/95 to-neutral-900/95 backdrop-blur-xl rounded-3xl p-8 sm:p-12 shadow-2xl border border-neutral-600/50 relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="text-center mb-8">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-3xl sm:text-4xl font-bold text-white mb-2"
                >
                  See Logo Creation in Action
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-xl sm:text-2xl text-green-400/90 font-medium"
                >
                  Watch a real logo animation process
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative rounded-2xl overflow-hidden bg-black shadow-2xl border border-neutral-600/30"
              >
                <video
                  ref={videoRef}
                  className="w-full aspect-video object-cover rounded-2xl shadow-2xl border border-neutral-600/30"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                  controls
                  autoPlay
                  muted
                  playsInline
                  poster="https://images.pexels.com/photos/4065155/pexels-photo-4065155.jpeg?auto=compress&w=1000&q=80"
                >
                  <source src={demoVideoAsset} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AppIntroVideo 