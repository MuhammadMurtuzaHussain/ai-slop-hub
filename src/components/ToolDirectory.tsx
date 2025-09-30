import ToolCard from "./ToolCard";

const tools = [
  {
    name: "Gamma",
    category: "Presentations & Websites",
    description: "AI design partner that generates stunning slides and websites, exports to PPT/Google Slides/PDF, and supports themes.",
    url: "https://gamma.app"
  },
  {
    name: "Lovable",
    category: "App Building",
    description: "No-code app builder that turns plain-language descriptions into working web apps; supports iterative updates and GitHub sync.",
    url: "https://lovable.dev"
  },
  {
    name: "Cursor",
    category: "Coding",
    description: "AI coding environment that makes developers extraordinarily productive and includes an agent that can turn ideas into code.",
    url: "https://cursor.com"
  },
  {
    name: "DALL·E 2",
    category: "Image Generation",
    description: "Text-to-image tool that creates original, realistic art and combines concepts and styles.",
    url: "https://labs.openai.com"
  },
  {
    name: "Runway",
    category: "Video Editing",
    description: "Multimodal AI tool that edits and generates video by describing desired changes.",
    url: "https://runwayml.com"
  },
  {
    name: "Notion AI",
    category: "Productivity",
    description: "All-in-one AI workspace that takes notes, searches apps, builds workflows, translates docs and generates diagrams.",
    url: "https://www.notion.com/product/ai"
  },
  {
    name: "ChatGPT",
    category: "Conversational AI",
    description: "Conversational AI assistant powered by the GPT-5 model that helps users find answers and inspiration.",
    url: "https://chatgpt.com"
  }
];

const ToolDirectory = () => {
  return (
    <section id="directory" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          AI Tools Directory
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Since you clearly need help with everything, here's a curated list of AI tools to make your life easier.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
          {tools.map((tool, index) => (
            <div 
              key={tool.name}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ToolCard {...tool} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolDirectory;
