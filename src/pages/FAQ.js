import React from 'react';

const FAQ = () => {
    const faqs = [
        {
            question: 'What is your shipping policy?',
            answer: 'We offer free shipping on all orders over $500. Standard shipping typically takes 5-7 business days, while express shipping takes 2-3 business days.'
        },
        {
            question: 'How do I return an item?',
            answer: 'We offer a 30-day return policy for all items in their original condition. Simply contact our customer service team to initiate a return.'
        },
        {
            question: 'Do you offer assembly services?',
            answer: 'Yes, we offer professional assembly services for an additional fee. You can select this option during checkout.'
        },
        {
            question: 'What is your warranty policy?',
            answer: 'All our furniture comes with a 1-year warranty against manufacturing defects. Some items may have extended warranty options available.'
        },
        {
            question: 'Can I modify my order after placing it?',
            answer: 'Orders can be modified within 24 hours of placement. Please contact our customer service team as soon as possible.'
        },
        {
            question: 'How do I care for my furniture?',
            answer: 'Each piece comes with specific care instructions. Generally, we recommend regular dusting and avoiding direct sunlight to maintain the quality.'
        },
        {
            question: 'Do you offer financing options?',
            answer: 'Yes, we partner with several financing providers to offer flexible payment plans. Options are available at checkout.'
        },
        {
            question: 'Can I track my delivery?',
            answer: 'Yes, once your order ships, you will receive a tracking number via email to monitor your delivery status.'
        }
    ];

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-12 text-center mb-4">
                    <h2>Frequently Asked Questions</h2>
                    <p className="text-muted">Find answers to common questions about our products and services.</p>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="accordion" id="faqAccordion">
                        {faqs.map((faq, index) => (
                            <div className="accordion-item" key={index}>
                                <h2 className="accordion-header" id={`heading${index}`}>
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#collapse${index}`}
                                        aria-expanded="false"
                                        aria-controls={`collapse${index}`}
                                    >
                                        {faq.question}
                                    </button>
                                </h2>
                                <div
                                    id={`collapse${index}`}
                                    className="accordion-collapse collapse"
                                    aria-labelledby={`heading${index}`}
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-5">
                        <h4>Still have questions?</h4>
                        <p>Our customer service team is here to help!</p>
                        <a href="/contact" className="btn btn-primary">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;