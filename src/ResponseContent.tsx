import React, { useState, useEffect } from "react";
import {marked} from "marked";

interface ResponseContentProps {
  content: string;
}

const ResponseContent: React.FC<ResponseContentProps> = ({ content }) => {
  const [formattedContent, setFormattedContent] = useState<string>("");

  useEffect(() => {
    const fetchResponseContent = async () => {
      // Simulate delay for typing effect (adjust as needed)
      await new Promise(resolve => setTimeout(resolve, 10000));

      // Convert Markdown to HTML
      const rawHTML = await marked(content, { breaks: true });

      // Update state with the formatted HTML
      setFormattedContent(rawHTML);
    };

    fetchResponseContent();

    // Clean up function if needed
    return () => {
      // Cleanup logic if necessary
    };
  }, [content]);

  return <div className="formatted-content" dangerouslySetInnerHTML={{ __html: formattedContent }} />;
};

export default ResponseContent;
