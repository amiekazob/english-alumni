"use client"

import React, { useEffect, useRef, useState } from "react"
import videojs from "video.js"
import "video.js/dist/video-js.css"
import "videojs-youtube"

// Define the props interface for the VideoPlayer component
interface VideoPlayerProps {
  options: any // video.js options
  onReady?: (player: any) => void
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ options, onReady }) => {
  const videoRef = useRef<HTMLDivElement | null>(null)
  const playerRef = useRef<any | null>(null)
  const [isClient, setIsClient] = useState(false)

  // Set client-side flag to prevent hydration mismatch
  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    // Only initialize player on client side
    if (!isClient) return
    
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The DOM element for the player needs to exist
      const videoElement = document.createElement("video-js")
      videoElement.classList.add("vjs-big-play-centered")
      if (videoRef.current) {
        videoRef.current.appendChild(videoElement)

        const player = (playerRef.current = videojs(videoElement, options, () => {
          player.log("player is ready")
          if (onReady) {
            onReady(player)
          }
        }))
      }
    } else {
      // You can update player options here if they change
      const player = playerRef.current
      player.autoplay(options.autoplay)
      player.src(options.sources)
    }
  }, [options, videoRef, onReady, isClient])

  // Dispose the Video.js player when the component unmounts
  useEffect(() => {
    const player = playerRef.current

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose()
        playerRef.current = null
      }
    }
  }, [])

  // Show placeholder during SSR to prevent hydration mismatch
  if (!isClient) {
    return (
      <div className="h-full bg-gray-900 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-sm opacity-75">Loading video player...</p>
        </div>
      </div>
    )
  }

  return (
    <div data-vjs-player className="h-full">
      <div ref={videoRef} className="h-full" />
    </div>
  )
}

export default VideoPlayer