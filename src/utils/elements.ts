export const elements = [
  {
    category: "Layout",
    items: [
      {
        id: "div",
        name: "Container",
        defaultProps: {
          width: 200,
          height: 100,
          backgroundColor: "#f5f5f5",
        },
      },
      {
        id: "section",
        name: "Section",
        defaultProps: {
          width: "100%",
          height: 300,
          backgroundColor: "#ffffff",
        },
      },
      {
        id: "grid",
        name: "Grid",
        defaultProps: {
          columns: 2,
          gap: 16,
        },
      },
    ],
  },
  {
    category: "Typography",
    items: [
      {
        id: "p",
        name: "Paragraph",
        defaultProps: {
          text: "Edit me",
          fontSize: 16,
          color: "#333",
        },
      },
      {
        id: "h1",
        name: "Heading 1",
        defaultProps: {
          text: "Heading 1",
          fontSize: 32,
          color: "#111",
        },
      },
      {
        id: "h2",
        name: "Heading 2",
        defaultProps: {
          text: "Heading 2",
          fontSize: 28,
          color: "#222",
        },
      },
    ],
  },
  {
    category: "Media",
    items: [
      {
        id: "img",
        name: "Image",
        defaultProps: {
          src: "/placeholder.png",
          width: 150,
          height: 100,
        },
      },
      {
        id: "video",
        name: "Video",
        defaultProps: {
          src: "https://example.com/video.mp4",
          width: 400,
          height: 225,
        },
      },
    ],
  },
  {
    category: "Forms & Buttons",
    items: [
      {
        id: "button",
        name: "Button",
        defaultProps: {
          text: "Click Me",
          backgroundColor: "#0070f3",
          color: "#fff",
          paddingX: 12,
          paddingY: 6,
          borderRadius: 4,
        },
      },
      {
        id: "input",
        name: "Input Field",
        defaultProps: {
          placeholder: "Enter text...",
          width: 200,
          height: 40,
        },
      },
    ],
  },
];
