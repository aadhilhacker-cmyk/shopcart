import { useState, type FormEvent } from 'react';
import { CheckCircle2, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill out your name, email address, and message.');
      return;
    }
    setError('');
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        {/* Store Contact Details */}
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            Contact Us
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            We would love to hear from you.
          </h1>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            Have a question about an order, product sizing, or shipping? Send us a message using
            the form and our team will respond promptly.
          </p>

          <dl className="mt-8 space-y-4 text-sm text-slate-600">
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" aria-hidden="true" />
              <div>
                <dt className="font-medium text-slate-900">Email</dt>
                <dd>support@bluecrestgoods.example</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" aria-hidden="true" />
              <div>
                <dt className="font-medium text-slate-900">Studio Address</dt>
                <dd>420 Harbor Street, Suite 2B, Portland, OR</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" aria-hidden="true" />
              <div>
                <dt className="font-medium text-slate-900">Support Hours</dt>
                <dd>Monday – Friday, 9:00 AM – 5:00 PM</dd>
              </div>
            </div>
          </dl>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8">
            {submitted ? (
              <div className="py-8 text-center">
                <div className="w-11 h-11 mx-auto rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                </div>
                <h2 className="mt-4 text-xl font-semibold text-slate-900">Message Sent</h2>
                <p className="mt-2 text-sm text-slate-600 max-w-sm mx-auto">
                  Thank you for reaching out. We have received your message and will reply within
                  one business day.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {error && (
                  <div
                    role="alert"
                    className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-sm text-red-700"
                  >
                    {error}
                  </div>
                )}

                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-slate-800 mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    required
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/15"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-slate-800 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/15"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-slate-800 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help you?"
                    required
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/15 resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
