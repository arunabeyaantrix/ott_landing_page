import React from 'react';

const faqs = [
    {
        question: 'What is DIAGNAL ENLIGHT?',
        answer: 'Lorem ipsum dolor sit amet, no pri unum deleniti, quis possit vulputate at vim. Aperiam instructior ex pro, doctus diceret pericula vis ne. ',
    },
    {
        question: 'How much does it cost?',
        answer: 'Lorem ipsum dolor sit amet, no pri unum deleniti, quis possit vulputate at vim. Aperiam instructior ex pro, doctus diceret pericula vis ne. ',
    },
    {
        question: 'Where can I watch it?',
        answer: 'Lorem ipsum dolor sit amet, no pri unum deleniti, quis possit vulputate at vim. Aperiam instructior ex pro, doctus diceret pericula vis ne. ',
    },
    {
        question: 'How do I cancel?',
        answer: 'Lorem ipsum dolor sit amet, no pri unum deleniti, quis possit vulputate at vim. Aperiam instructior ex pro, doctus diceret pericula vis ne. ',
    },
    {
        question: 'What can I watch?',
        answer: 'Lorem ipsum dolor sit amet, no pri unum deleniti, quis possit vulputate at vim. Aperiam instructior ex pro, doctus diceret pericula vis ne. ',
    },
    {
        question: 'Is ENLIGHT good for kids?',
        answer: 'Lorem ipsum dolor sit amet, no pri unum deleniti, quis possit vulputate at vim. Aperiam instructior ex pro, doctus diceret pericula vis ne. ',
    },
];

function Faq() {
    return (
        <div className="diagnal-faq">
            <div className="faq-main-title">
                <h1>Frequently Asked Questions</h1>
            </div>
            <div className="container">
                <div className="row">
                    {faqs.map((faq) => (
                        <div key={faq.question} className="col-xl-4 col-lg-6">
                            <h3 className="faq-question">{faq.question}</h3>
                            <p className="faq-answer">{faq.answer}</p>

                        </div>
                    ))}
                </div>
                <div className='faq_footer'>
                    <p>Ready to watch? Click get started to view our plans</p>
                    <button className="diagnal-btn">Get Started</button>
                </div>
                
            </div>
        </div>
    );
}

export default Faq;
