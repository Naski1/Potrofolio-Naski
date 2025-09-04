import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [step, setStep] = useState(1); // 1: intro, 2: name input, 3: message input

  // Replace with your actual WhatsApp number (without + sign)
  const whatsappNumber = "+6282233240254"; // Replace with your WhatsApp number

  const handleSendToWhatsApp = () => {
    const fullMessage = `Hi! My name is ${name}. ${message}`;
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setName("");
    setMessage("");
    setStep(1);
    setIsOpen(false);
  };

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2 && name.trim()) {
      setStep(3);
    } else if (step === 3 && message.trim()) {
      handleSendToWhatsApp();
    }
  };

  const renderChatContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-2">👋 Hi there!</p>
              <p className="text-sm">I'd love to hear from you! Click below to start a conversation on WhatsApp.</p>
            </div>
            <Button 
              onClick={() => setStep(2)}
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              Start Chat
            </Button>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-4">
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-2">👋 Nice to meet you!</p>
              <p className="text-sm">What's your name?</p>
            </div>
            <Input
              placeholder="Enter your name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && name.trim() && handleNext()}
            />
            <Button 
              onClick={handleNext}
              disabled={!name.trim()}
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              Continue
            </Button>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-4">
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-2">Hi {name}! 👋</p>
              <p className="text-sm">What would you like to discuss?</p>
            </div>
            <Textarea
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
            />
            <div className="flex gap-2">
              <Button 
                variant="outline"
                onClick={() => setStep(2)}
                className="flex-1"
              >
                Back
              </Button>
              <Button 
                onClick={handleNext}
                disabled={!message.trim()}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white"
              >
                <Send className="h-4 w-4 mr-2" />
                Send
              </Button>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <>
      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          onClick={() => setIsOpen(true)}
          size="icon"
          className="h-14 w-14 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl smooth-transition animate-float"
          style={{ animationDelay: '1s' }}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96">
          <div className="glass-card rounded-2xl shadow-xl animate-scale-in">
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">WhatsApp Chat</h3>
                  <p className="text-xs text-muted-foreground">Typically replies instantly</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setIsOpen(false);
                  setStep(1);
                  setName("");
                  setMessage("");
                }}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Chat Content */}
            <div className="p-4">
              {renderChatContent()}
            </div>

            {/* Footer */}
            <div className="px-4 pb-4">
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <MessageCircle className="h-3 w-3" />
                <span>Powered by WhatsApp</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppChat;