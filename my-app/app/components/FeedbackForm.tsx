"use client";

import { useState } from "react";

export default function FeedbackForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const response = await fetch("/api/feedback", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div className="feedback-section">
            <h3 className="feedback-heading">We'd love to hear your thoughts</h3>
            <p className="feedback-subtext">Share your feedback on this article.</p>

            <form onSubmit={handleSubmit} className="feedback-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Feedback</label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Your thoughts..."
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="form-textarea"
                    />
                </div>

                <button
                    type="submit"
                    className={`submit-btn ${status === 'submitting' ? 'loading' : ''}`}
                    disabled={status === 'submitting' || status === 'success'}
                >
                    {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Feedback'}
                </button>

                {status === 'success' && (
                    <p className="status-msg success">Thank you for your feedback!</p>
                )}
                {status === 'error' && (
                    <p className="status-msg error">Something went wrong. Please try again.</p>
                )}
            </form>
        </div>
    );
}
