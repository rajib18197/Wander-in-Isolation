import { getBlogPostList } from "../helpers/file-helpers";
import BlogRow from "./BlogRow";
// https://media.licdn.com/dms/image/D4E22AQHx50SHtAqgQA/feedshare-shrink_1280/0/1710265722936?e=1713398400&v=beta&t=1jMqOAR-FQhkbixGPN7wtGxcyNO9y8zj9RAAB8gNQUc

export default async function BlogsList() {
  const blogPosts = await getBlogPostList();

  return (
    <div className="blog-list">
      {blogPosts.map((blog) => (
        <BlogRow key={blog.slug} blog={blog} />
      ))}
    </div>
  );
}

// Patrick Lencioni says that humility is an ingredient of the ideal team player.

// I think he is on to something.

// The more we dare to say "I don't know" or "I don't understand",
// the more we learn, earn respect, and gain credibility.

// I believe everyone knows something we don't.

// Stop trying to hire the smartest people.

// Hire people who have these 9 traits instead:

// Too many businesses put too much emphasis on:

// - Qualifications
// - Experience
// - High IQ

// And focus less on the intangibles.
// The traits that you can’t teach to people.

// Here are 9 rare traits in every High Performer
// After hiring 500+ people:

// 1. Gets Work Done
// ↳ The ability to persist through any challenge.
// ↳ Is known for completing things fast.
// ↳ Super trustworthy with tasks.

// 2. Self-Awareness
// ↳ Are aware of their strengths and weaknesses.
// ↳ Knows how to improve their weaknesses.
// ↳ Will understand how long it takes to complete work.

// 3. Shows Empathy
// ↳ Treats everyone with respect.
// ↳ Will go into conversations with full empathy.
// ↳ Understands the struggles of others.

// 4. Strong Communicator
// ↳ Can communicate ideas & concepts very well.
// ↳ Can communicate with all types of people.
// ↳ Communicates clearly and at speed.

// 5. Great At Simplifying
// ↳ Great at breaking complex things down into simple ways.
// ↳ Keeps things short and simple.
// ↳ Understands difficult topics very well.

// 6. Control Over Emotions
// ↳ Can handle stress very well.
// ↳ Never let emotions affect decisions.
// ↳ Knows when to take a step back.

// 7. Speaks Up
// ↳ Doesn’t just accept things.
// ↳ Wants to see positive change.
// ↳ Will speak up for colleagues.

// 8. Manages Time Well
// ↳ Is self-organised & self-managing.
// ↳ Will provide updates clearly.
// ↳ Is on top of all tasks.

// 9. Enjoys Being Wrong
// ↳ Will embrace different viewpoints.
// ↳ Will own their mistakes.
// ↳ Has a growth mindset.

// Yes, qualifications may get you through the door…
// But showing these traits will truly help you excel.

// Here are free alternatives. Number 5 is insanely good.

// ⚠Do you want this type of content?⚠
// Join my FREE newsletter for Spicy AI 🌶 weekly!!

// 👉 https://lnkd.in/g6UpjHdd

// 😎 ChatGPT alternative 😎

// 1. Jasper Chat

// → Content creation and improvement
// → Answers questions with knowledge
// → Integrates with other tools

// https://jasper.ai

// 2. Chatsonic (Writesonic)

// → Real-time factual information access
// → Generates different creative text formats
// → Image generation capabilities

// 3. Google Bard (Gemini)

// → Powerful Google Search integration
// → Up-to-date information and insights
// → Code generation and explanation

// https://bard.google.com

// 4. YouChat

// → Combines chatbot with search engine
// → Summarizes factual topics well
// → Provides citations for answers

// https://you.com/

// 5. Claude (Anthropic)

// → Prioritizes safety and harmlessness
// → Focuses on helpful responses
// → Still under development

// https://lnkd.in/gMaCmPzW

// 6. Bing AI (Microsoft)

// → Web search results integration
// → Offers creative text formats
// → Citation of sources

// https://www.bing.com/

// 7. OpenAI Playground

// → Access to different GPT models
// → Highly customizable parameters
// → Ideal for developer experimentation

// https://openai.com/api/

// 8. Perplexity AI

// → Direct answers from sources
// → Provides citations and references
// → Summarizes complex information

// https://www.perplexity.ai/

// 9. Elsa Speak

// → Focus on language learning
// → Pronunciation correction and feedback
// → Tailored learning activities

// https://elsaspeak.com/

// 10. Replika

// → AI companion and friend
// → Emotionally supportive conversations
// → Personalized to your preferences

// https://replika.com/

// 😎 Midjourney & Dalle alternative 😎

// 1. Stable Diffusion

// → Text-to-image generation
// → Versatile, customizable image styles
// → Open-source and locally runnable

// 2. NightCafe

// → Diverse artistic style options
// → Community features for sharing
// → Simple, user-friendly interface

// https://lnkd.in/gzQESfaM

// 3. Jasper Art

// → Seamless writing workflow integration
// → AI creates alongside your content
// → Quick, focused image creation

// https://www.jasper.ai/art

// 4. StarryAI

// → NFT creation capabilities
// → Automatic image style transfers
// → Easy to use on mobile

// https://www.starryai.com/

// 5. Craiyon (formerly DALL-E Mini)

// → Free and publicly accessible
// → Fast image generation speeds
// → Unfiltered, sometimes bizarre results

// https://www.craiyon.com/
