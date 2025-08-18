import React, { useState, useRef, useEffect } from 'react';
import FAQIcons from '../assets/icons/FAQIcons';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const contentRefs = useRef([]);

    const faqs = [
        { question: " What is Elmntl? ", answer: "ELMNTL is a pioneering platform in functional and alternative medicine, dedicated to empowering individuals on their wellness journey. We provide personalized health solutions, connecting you with licensed healthcare professionals to address your unique needs." },
        { question: " Who are the healthcare professionals at ELMNTL? ", answer: "Our network comprises U.S.-licensed doctors, nurse practitioners, and specialists in various fields of functional and alternative medicine. Each professional undergoes a rigorous background check and license verification to ensure the highest standard of care." },
        { question: " How does the telehealth consultation work? ", answer: "Our telehealth service allows you to consult with healthcare professionals from the comfort of your home. After scheduling an appointment, you’ll engage in a secure video call to discuss your health concerns and receive personalized recommendations." },
        { question: "  Do I need a prior diagnosis to use ELMNTL's services? ", answer: "No prior diagnosis is necessary. Whether you’re seeking preventive care, managing existing conditions, or exploring alternative therapies, our professionals are here to guide you." },
        { question: "  How much do ELMNTL's services cost? ", answer: "Service costs vary based on the type and duration of the consultation or treatment plan. Detailed pricing information is available on our website, ensuring transparency and no hidden fees." },
        { question: "Is ELMNTL covered by insurance? ", answer: "Currently, our services are not covered by insurance. However, we strive to offer affordable options and flexible payment plans to accommodate various budgets. We also accept HSA and FSA payments." },
        { question: "What payment methods are accepted? ", answer: "We accept major credit cards, including Visa, Mastercard, American Express, and Discover. Payments can be securely processed through our website. We also accept HSA and FSA payments." },
        { question: "  Do you offer home delivery for products? ", answer: "Yes, we provide discreet and prompt home delivery for all products purchased through our platform." },
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='mb-20 px-[10px] md:px-[30px]'>
            <h2 className="text-[30px] md:text-[60px] font-bold mb-[80px] text-charcoal text-center">
                Frequently Asked Questions
            </h2>

            <div className="">
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div key={index} className="cursor-pointer">
                            <div
                                className="flex justify-between items-center border-b border-charcoal pt-2 pb-5"
                                onClick={() => toggleAccordion(index)}
                            >
                                <h3 className="flex-1 text-[28px] text-charcoal font-medium">{faq.question}</h3>
                                {isOpen ? (
                                    <FAQIcons.ArrowUp className="h-[30px] w-[30px] transition-transform duration-300" />
                                ) : (
                                    <FAQIcons.ArrowDown className="h-[30px] w-[30px] transition-transform duration-300" />
                                )}
                            </div>

                            <div
                                ref={(el) => (contentRefs.current[index] = el)}
                                style={{
                                    maxHeight: isOpen ? contentRefs.current[index]?.scrollHeight + "px" : "0px",
                                    transition: "max-height 0.4s ease, opacity 0.4s ease",
                                    overflow: "hidden",
                                    opacity: isOpen ? 1 : 0,
                                }}
                                className="px-2"
                            >
                                <div className="text-grayish-blue text-lg font-secondary py-2">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FAQ;
