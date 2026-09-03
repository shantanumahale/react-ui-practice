import { useEffect, useState } from "react";
import { checkFile } from "./utils";

export default function FileUpload() {
  const [files, setFiles] = useState<File[] | null>(null);
  const [actualTypes, setActualTypes] = useState<string[] | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files || [];
    if (files.length > 0) {
      setFiles([...files]);
    }
  };

  const handleClearClick = () => {
    setFiles(null);
    setActualTypes(null);
  };

  useEffect(() => {
    async function setActualTypesFn() {
      if (!files) return;
      const results = new Array(files.length);
      let index = 0;
      for (const file of files) {
        const res = await checkFile(file);
        results[index] = res;
        index++;
        if (index === files.length) {
          setActualTypes(results);
          return;
        }
      }
    }

    if (files && files.length > 0) {
      setActualTypesFn();
    }
  }, [files]);

  return (
    <div>
      <input
        type="file"
        onChange={handleFileChange}
        multiple
        // accept=".pdf, application/pdf"
      />
      <button onClick={handleClearClick}>Clear</button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {files &&
          actualTypes &&
          files.map((file, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 8,
              }}
            >
              {file.name} {actualTypes[i]}
            </div>
          ))}
      </div>
    </div>
  );
}
