export default function ContactPage() {
  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="max-w-md mx-auto">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <input type="text" id="name" className="w-full rounded-md border border-input px-3 py-2" placeholder="Your Name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input type="email" id="email" className="w-full rounded-md border border-input px-3 py-2" placeholder="your.email@example.com" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
            <textarea id="message" rows={4} className="w-full rounded-md border border-input px-3 py-2" placeholder="How can we help you?"></textarea>
          </div>
          <button type="submit" className="w-full bg-primary text-primary-foreground py-2 rounded-md font-medium">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
