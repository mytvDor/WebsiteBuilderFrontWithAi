import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, User, Minimize2, Maximize2, Send, Loader } from "lucide-react";
import ReactMarkdown from "react-markdown";

export default function AiChatComponent() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

  const handleSendMessage = async (e) => {
    if (e) e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      text: input,
      sender: "user",
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) throw new Error("Server Error");
      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          text: data.reply,
          sender: "ai",
          timestamp: new Date().toISOString(),
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          text: "**Error:** Unable to process your message. Please try again.",
          sender: "ai",
          timestamp: new Date().toISOString(),
          isError: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Card
      className={`fixed bottom-10 right-7 bg-zinc-900 border-zinc-500 shadow-lg shadow-zinc-500/20 z-50 rounded-xl overflow-hidden transition-all duration-300 ${
        isMinimized ? "w-[180px] max-w-[180px]" : "w-full sm:w-96"
      }`}
      style={{
        height: isMinimized ? "auto" : "500px",
        maxWidth: isMinimized ? "180px" : "calc(100vw - 2rem)",
      }}
    >
      <CardHeader className="p-3 border-b border-zinc-500/50 flex flex-row justify-between items-center bg-zinc-950">
        <CardTitle className="text-lg flex items-center text-zinc-200">
          <Bot className="mr-2 h-5 w-5" /> AI Assistant
        </CardTitle>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsMinimized(!isMinimized)}
          className="h-8 w-8 p-0 text-zinc-400 hover:text-zinc-300 hover:bg-zinc-800"
        >
          {isMinimized ? (
            <Maximize2 className="h-4 w-4" />
          ) : (
            <Minimize2 className="h-4 w-4" />
          )}
        </Button>
      </CardHeader>

      {!isMinimized && (
        <>
          <CardContent
            className="flex-1 overflow-auto p-4 space-y-4 custom-scrollbar"
            style={{
              height: "380px",
              backgroundImage:
                "radial-gradient(circle at center, rgba(163, 230, 53, 0.05) 0%, rgba(0, 0, 0, 0) 70%)",
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // Edge & IE
            }}
          >
            {messages.length === 0 ? (
              <div className="text-center text-zinc-500 h-full flex flex-col items-center justify-center">
                <Bot className="h-12 w-12 mb-3 text-zinc-500 opacity-50" />
                <p>Start a conversation with the AI assistant</p>
                <p className="text-xs mt-2 max-w-[80%]">
                  Ask about code, get help with debugging, or request website
                  ideas
                </p>
              </div>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 shadow-md ${
                      msg.sender === "user"
                        ? "bg-zinc-200 text-zinc-900 rounded-tr-none"
                        : msg.isError
                        ? "bg-red-500/80 text-white rounded-tl-none"
                        : "bg-zinc-800 text-zinc-300 rounded-tl-none border border-zinc-500/20"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1 border-b border-opacity-20 pb-1 border-current">
                      {msg.sender === "user" ? (
                        <User className="h-3 w-3" />
                      ) : (
                        <Bot className="h-3 w-3" />
                      )}
                      <span className="text-xs opacity-75">
                        {new Date(msg.timestamp).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                    <div className="prose prose-sm dark:prose-invert prose-headings:text-zinc-400 prose-a:text-zinc-400 max-w-full">
                      <ReactMarkdown
                        components={{
                          code({
                            node,
                            inline,
                            className,
                            children,
                            ...props
                          }) {
                            return (
                              <code
                                className={`${className} ${
                                  inline
                                    ? "inline"
                                    : "block overflow-x-auto whitespace-pre-wrap max-w-full"
                                }`}
                                {...props}
                              >
                                {children}
                              </code>
                            );
                          },
                          pre({ node, children, ...props }) {
                            return (
                              <pre
                                className="overflow-x-auto p-2 rounded bg-zinc-900 max-w-full"
                                {...props}
                              >
                                {children}
                              </pre>
                            );
                          },
                        }}
                      >
                        {msg.text}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))
            )}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] bg-zinc-800 text-zinc-300 rounded-lg p-3 flex items-center gap-2 border border-zinc-500/20 rounded-tl-none">
                  <Bot className="h-3 w-3" />
                  <Loader className="animate-spin h-3 w-3" />
                  <span>Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </CardContent>

          <form
            onSubmit={handleSendMessage}
            className="border-t border-zinc-500/50 p-2 flex gap-2 items-end bg-zinc-950"
          >
            <Textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message... (Shift+Enter for new line)"
              disabled={isLoading}
              className="flex-1 min-h-[38px] max-h-[150px] resize-none py-2 bg-zinc-800 text-zinc-300 border-zinc-500/50 focus:border-zinc-500 focus:ring-zinc-500 placeholder:text-zinc-500"
              rows={1}
            />
            <Button
              type="submit"
              size="icon"
              disabled={isLoading || !input.trim()}
              className="bg-zinc-200 text-zinc-900 hover:bg-zinc-200 h-9 w-9"
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </>
      )}
    </Card>
  );
}
