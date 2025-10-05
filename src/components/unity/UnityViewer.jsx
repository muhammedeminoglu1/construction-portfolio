import { useEffect, useState } from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import { Loader, AlertCircle, Maximize2, Minimize2 } from 'lucide-react';

const UnityViewer = ({ buildFolder, width = "100%", height = "600px" }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const {
    unityProvider,
    isLoaded,
    loadingProgression,
    requestFullscreen,
  } = useUnityContext({
    loaderUrl: `${buildFolder}/Build.loader.js`,
    dataUrl: `${buildFolder}/Build.data`,
    frameworkUrl: `${buildFolder}/Build.framework.js`,
    codeUrl: `${buildFolder}/Build.wasm`,
  });

  const toggleFullscreen = () => {
    requestFullscreen(true);
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="relative bg-gray-900 rounded-xl overflow-hidden">
      {/* Loading Bar */}
      {!isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 z-10">
          <Loader className="animate-spin text-primary-400 mb-4" size={48} />
          <p className="text-white text-lg mb-2">3D Model Yükleniyor...</p>
          <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary-600 transition-all duration-300"
              style={{ width: `${loadingProgression * 100}%` }}
            />
          </div>
          <p className="text-gray-400 mt-2">{Math.round(loadingProgression * 100)}%</p>
        </div>
      )}

      {/* Unity Canvas */}
      <div className="relative" style={{ width, height }}>
        <Unity
          unityProvider={unityProvider}
          style={{ width: "100%", height: "100%" }}
          className="rounded-xl"
        />

        {/* Controls Overlay */}
        {isLoaded && (
          <div className="absolute top-4 right-4 flex gap-2">
            <button
              onClick={toggleFullscreen}
              className="p-3 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-colors shadow-lg"
              title="Tam Ekran"
            >
              {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
            </button>
          </div>
        )}

        {/* Instructions */}
        {isLoaded && (
          <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm">
            <p className="font-medium mb-1">Kontroller:</p>
            <p>🖱️ Fare Sol: Döndür | 🖱️ Fare Sağ: Kaydır | 🔄 Tekerlek: Yakınlaştır</p>
          </div>
        )}
      </div>

      {/* Error State */}
      {!isLoaded && loadingProgression === 0 && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 z-10">
          <AlertCircle className="text-red-400 mb-4" size={48} />
          <p className="text-white text-lg">Unity build dosyaları bulunamadı</p>
          <p className="text-gray-400 mt-2">Lütfen Unity build'ini public/unity-builds/ klasörüne yerleştirin</p>
        </div>
      )}
    </div>
  );
};

export default UnityViewer;