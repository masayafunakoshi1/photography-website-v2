import React from 'react'
import './styles/FreqAskQuestions.css'

const FreqAskQuestions = () => {
    return (
        <div className="faqPage">

            <h1 className="faq-Title">Frequently Asked Questions</h1>

                <div>
                    <h4>Where are you located?</h4>
                    <p>
                        I am located in the New York Metropolitan area. Though more than willing to shoot anywhere, but will have to discuss travel details with the client.
                        <img></img>
                    </p>
                </div>

                <div>
                    <h4>How do I book a shoot?</h4>
                    <p>
                        Go to the Contact page and feel free to send me a message!
                    </p>
                </div>

                <div>
                    <h4>What are your rates?</h4>
                    <p>
                        Depends entirely on the type of shoot. Please go to the Contact page and send me a message, we can then discuss rates and find what works for both of us.
                    </p>
                </div>

                <div>
                    <h4>What kind of gear do you use?</h4>
                    <p>
                        I normally shoot with a Canon 760D, mainly using an 85mm Prime and 24mm Prime lens.
                        I am looking to upgrade my gear soon to something more powerful, but this gets the job done!
                    </p>
                </div>

                <div>
                    <h4>How long does it take to get our photos?</h4>
                    <p>
                        It all depends on the type of shoot, how long it was, how many photos were taken, any editing requests, etc... 
                        For example, on a 2-hour shoot, 100-150 photos taken, you will receive your photos within 2-3 days.
                        A clear estimate will be made right after the shoot.
                    </p>
                </div>
        </div>
    )
}

export default FreqAskQuestions
