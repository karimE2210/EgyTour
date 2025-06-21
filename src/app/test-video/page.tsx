"use client";

export default function TestVideoPage() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <h1 className="text-white text-2xl mb-8">Video Test Page</h1>
      
      <div className="space-y-8">
        <div>
          <h2 className="text-white text-lg mb-4">Video 1: 13912805_3840_2160_60fps.mp4</h2>
          <video 
            controls 
            className="w-full max-w-2xl"
            src="/images/mypics/13912805_3840_2160_60fps.mp4"
          />
        </div>
        
        <div>
          <h2 className="text-white text-lg mb-4">Video 2: 4174152-hd_1920_1080_30fps.mp4</h2>
          <video 
            controls 
            className="w-full max-w-2xl"
            src="/images/mypics/4174152-hd_1920_1080_30fps.mp4"
          />
        </div>
        
        <div>
          <h2 className="text-white text-lg mb-4">Video 3: 5976697-uhd_3840_2160_25fps.mp4</h2>
          <video 
            controls 
            className="w-full max-w-2xl"
            src="/images/mypics/5976697-uhd_3840_2160_25fps.mp4"
          />
        </div>
        
        <div>
          <h2 className="text-white text-lg mb-4">Video 4: 11276525-uhd_4096_1720_25fps.mp4</h2>
          <video 
            controls 
            className="w-full max-w-2xl"
            src="/images/mypics/11276525-uhd_4096_1720_25fps.mp4"
          />
        </div>
      </div>
    </div>
  );
} 