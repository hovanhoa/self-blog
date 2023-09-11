// Core viewer
import { Worker, Viewer } from "@react-pdf-viewer/core";

// Plugins
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// Import styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

export default function Resume() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div>
      <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js`}
      >
        <Viewer
          fileUrl="/resumes/HoVanHoa_Resume.pdf"
          plugins={[
            // Register plugins
            defaultLayoutPluginInstance,
          ]}
        />
      </Worker>
    </div>
  );
}
